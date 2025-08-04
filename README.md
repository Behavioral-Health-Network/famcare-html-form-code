# FAMCare-HTML-Form-Code

This repository contains HTML form code for FAMCare, the outcomes database used by Behavioral Health Network of Greater St. Louis for its programs. The forms are designed to capture client data, program enrollments, and program participation and outcomes data.

## Form Parsing Utilities

This repo includes Python scripts for extracting field metadata from HTML forms and generating Markdown documentation.

To use these tools:

1. Install [Anaconda](https://www.anaconda.com/products/distribution)
2. Create the environment:

   ```bash

   conda env create -f environment.yml
   conda activate form-parser

   ```

3. Run the scripts to parse forms and generate documentation:

   ```bash
    python scripts/parse_form_fields.py --input code/pwepiccic.html --output docs/pwepiccic.md
    ```

See scripts/README.md for details.
