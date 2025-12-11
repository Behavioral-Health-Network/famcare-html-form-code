# `scripts/` — Form Parsing & Metadata Utilities

This folder contains Python (and potentially R) scripts used to parse, analyze, and document HTML form structures from FAMCare exports. These utilities support metadata extraction, field diagnostics, and future DRY-compliant documentation workflows.

---

## Environment Setup

These scripts assume a Python 3.x environment managed via [Conda](https://docs.conda.io/en/latest/).

### 1. Clone the repo

```bash
git clone https://github.com/[your-org]/FAMCare-HTML-Form-Code.git
cd FAMCare-HTML-Form-Code/scripts
```

### 2. Create a Conda environment and activate it

```bash
conda env create -f environment.yml
conda activate famcare-parser
```

If environment.yml is missing, you can manually install dependencies:

```bash
conda install beautifulsoup4 pandas lxml
```

## Script Overview

|        Script Name       |                          Purpose                         |
|:------------------------:|:--------------------------------------------------------:|
| parse_form_fields.py     | Extracts field metadata from raw HTML form exports       |
| tag_field_exceptions.py  | Flags fields with missing, duplicate, or ambiguous logic |
| generate_field_matrix.py | Builds a Markdown matrix of fields for documentation     |

Scripts are modular and designed to be run independently or chained via CLI or notebook.

## Usage Examples

```bash
# Extract field metadata from a raw HTML form
python parse_form_fields.py --input ./code/pwepiccic.html --output docs/pwepiccic.md
```

Use --help on any script to see available flags and options.

## Contributor Notes

- Scripts are DRY-compliant and designed for auditability.
- Outputs are saved to metadata/ or diagnostics/ folders (create if missing).
- Please document any new scripts with a short header block and usage example.
- If you modify parsing logic, update the corresponding test cases in tests/.

## Audit Hooks

- All scripts log anomalies (e.g. missing IDs, duplicate names) to .log files.
- Consider reviewing diagnostics/ outputs before committing changes.
- For large form sets, batch processing scripts are available in batch/.

## Cleanup

Temporary files and compiled artifacts are excluded via .gitignore. If you encounter unexpected clutter, run:

```bash
git clean -xdf
```

## Future Directions

- Add R scripts for cross-validation and visualization
- Integrate with Markdown documentation pipeline
- Explore HTML-to-Markdown conversion for embedded help text
