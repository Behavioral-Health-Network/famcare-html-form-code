---
form_title: Housing Status
form_file: code/bhn-general/pwhousingstatus.html
table_name: PWHOUSINGSTATUS
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

# Housing Status Summation

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

<details markdown="1">
  <summary><strong>2026</strong></summary>

## 2026

- **YYYY-MM-DD**: Adds change.

</details>

<details markdown="1">
  <summary><strong>2025</strong></summary>

## 2025

- **2025-11-13**: Adds initial Markdown documentation file for HTML form.
- **2025-10-20**: Removes `homeless_housing_insecure_eto` field since it is no longer relevant past fiscal year 2025.
- **2025-06-25**: Adds `housing_status_incarcerated` and `unhoused_shelter` fields, shown conditionally based on `client_housing_status` selection: 'Institutionally Housed' and 'Unhoused' respectively.
- **2025-05-30**: Comments out code for `quicksubmitit()` function.

</details>

<details markdown="1">
  <summary><strong>2024</strong></summary>

## 2024

- **2024-11-08**: Adds 'Unknown' option to `client_housing_status` and `homeless_housing_insecure_eto` fields.
- **2024-10-30**: Adds `homeless_housing_insecure_fy25` field. Renames `homeless_housing_insecure_fy25` field to `homeless_housing_insecure_eto`.
- **2024-10-18**: Sets `housing_start_date` field as required.
- **2024-10-11**: Renames `Question18` field to `Pathway_Date`.
- **2024-09-24**: Adds initial commit of HTML file from Pathway Wizard.

</details>
</details>
