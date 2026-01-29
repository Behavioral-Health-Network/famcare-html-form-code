---
form_title: Payor Source
form_file: code/bhn-general/pwpayorsource.html
table_name: PWPAYORSOURCE
program_scope: multi
programs:
  - bcr
  - complex-care
  - epicc
  - ere
  - yere
form_type: 
client_form: true
tags:
  - summation-view
pathway_name: 
pathway_id: 
pathway_event: 
pathway_event_logic:
    start_period: 
    end_period:
    early_period: 
    late_period:
    recurring_period: 
    lag_period: 
    number_occurrences: 
    depends_on: 
    completion_check_table: 
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: 
      join_type: 
      on:
        - source: 
          target: 
        - source: 
          target: 
quick_submit_enabled: false
last_updated: 2026-01-29
status: active
---

# Payor Source Summation

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

<details markdown="1">
  <summary><strong>2026</strong></summary>

## 2026

- **2026-01-09**: Adds initial Markdown documentation file for HTML form.

</details>

<details markdown="1">
  <summary><strong>2025</strong></summary>

## 2025

- **2025-05-30**: Comments out any code for function `quicksubmitit()` and anything related to Quick Submit.

</details>

<details markdown="1">
  <summary><strong>2024</strong></summary>

## 2024

- **2024-09-18**: Adds initial commit of HTML file from Pathway Wizard.

</details>
</details>
