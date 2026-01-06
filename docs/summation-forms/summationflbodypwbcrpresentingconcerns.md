---
form_title: BCR Presenting Concerns Summation
form_file: code/summation-forms/summationflbodypwbcrpresentingconcerns.html
table_name: SUMMATIONFLBODYPWBCRPRESENTINGCONCERNS
program_scope: single
programs:
  - bcr
form_type: summation
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
last_updated: 2025-12-24
status: active
---

# BCR Presenting Concerns Summation

## Changelog

<details markdown="1">
  <summary><strong>View Changelog Details</strong></summary>

<details markdown="1">
  <summary><strong>2026</strong></summary>

### 2026

- **YYYY-MM-DD**: Adds change.

</details>

<details markdown="1">
  <summary><strong>2025</strong></summary>

### 2025

- **2025-12-24**: Adds `DOCSERNO` to the summation table so that users may identify the correct duplicate form to delete when appropriate to avoid creating orphan child summation forms.
- **2025-10-29**: Fixes the `SELECT` in the subquery for Presenting Concerns so that the summation table will now show all values selected instead of only showing a blank in the Presenting Concerns column.
- **2025-05-15**: Adds filter on `CLIENTNUMBER` to `WHERE` clause for SQL query building the summation table.
- **2025-04-25**: Adds initial commit of version from Alpha prior to modifying to show all selected values of `bcr_presenting_concerns` on the summation. Applies pattern from `SUMMATIONFLBODYPWBCRREFERRALSPLACED` to show all values of `bcr_presenting_concerns` on the summation.

</details>
</details>
