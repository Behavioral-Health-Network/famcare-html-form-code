---
form_title: BCR Referrals Placed Summation
form_file: code/summation-forms/summationflbodypwbcrreferralsplaced.html
table_name: SUMMATIONFLBODYPWBCRREFERRALSPLACED
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
last_updated: 2026-01-12
status: active
---

# BCR Referrals Placed Summation

## Changelog

<details markdown="1">
  <summary><strong>View Changelog Details</strong></summary>

<details markdown="1">
  <summary><strong>2026</strong></summary>

### 2026

- **2026-01-12**: Adds `CLIENTNUMBER` to the `WHERE` clause explicitly because adding `DOCSERNO` to the display table appears to have caused the summation to switch to treating `DOCSERNO` as the key instead of `ID`. With no fallback filter for `CLIENTNUMBER`, the result was that all forms were listed in the table instead of being filtered by client.
- **2026-01-08**: Adds `DOCSERNO` to the summation table so that users may identify the correct duplicate form to delete when appropriate to avoid creating orphan child summation forms.

</details>

<details markdown="1">
  <summary><strong>2025</strong></summary>

### 2025

- **2025-12-24**: Adds inital Markdown documentation file.

</details>
</details>
