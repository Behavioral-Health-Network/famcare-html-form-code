#!/usr/bin/env python

import argparse
import os
import logging
from bs4 import BeautifulSoup

# Setup logging
logging.basicConfig(
    filename='parse_form_fields.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Parse HTML form and extract field metadata
def extract_fields(html_path):
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
    except Exception as e:
        logging.error(f"Failed to open {html_path}: {e}")
        return []

    fields = []
    for tag in soup.find_all(['input', 'select', 'textarea']):
        name = tag.get('name')
        if not name:
            continue  # Skip unnamed fields

        field = {
            'name': name,
            'type': tag.name,
            'input_type': tag.get('type', 'N/A'),
            'label': tag.get('aria-label') or tag.get('title') or 'N/A',
            'required': 'required' in tag.attrs,
            'hidden': 'hidden' in tag.attrs or tag.get('type') == 'hidden'
        }
        fields.append(field)

    logging.info(f"Parsed {len(fields)} fields from {html_path}")
    return fields

# Write Markdown summary
def write_markdown(fields, output_path):
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# Field Summary\n\n")
            f.write("| Field Name | Type | Input Type | Required | Hidden | Label |\n")
            f.write("|------------|------|------------|----------|--------|-------|\n")
            for field in fields:
                f.write(f"| `{field['name']}` | `{field['type']}` | `{field['input_type']}` | "
                        f"{'✅' if field['required'] else ''} | "
                        f"{'✅' if field['hidden'] else ''} | {field['label']} |\n")
        logging.info(f"Markdown written to {output_path}")
    except Exception as e:
        logging.error(f"Failed to write Markdown: {e}")

# CLI entry point
def main():
    parser = argparse.ArgumentParser(description="Parse HTML form and extract field metadata.")
    parser.add_argument('--input', required=True, help='Path to HTML form file')
    parser.add_argument('--output', required=True, help='Path to output Markdown file')
    args = parser.parse_args()

    fields = extract_fields(args.input)
    if fields:
        write_markdown(fields, args.output)
    else:
        logging.warning(f"No fields extracted from {args.input}")

if __name__ == '__main__':
    main()

## Example Usage

# ```bash
# python parse_form_fields.py --input ./code/pwepiccic.html --output docs/pwepiccic.md
# ```

## Extensibility Ideas

# - Add support for parsing setrequire() and checkhide() logic from embedded JS
# - Output YAML block for metadata
# - Validate field names against data dictionary
# - Export to CSV or Excel for audit