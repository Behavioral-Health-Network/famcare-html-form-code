---
form_title: Housing Status Summation
form_file: code/summation-forms/summationflbodypwhousingstatus.html
table_name: SUMMATIONFLBODYPWHOUSINGSTATUS
program_scope: single
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
last_updated: 2025-12-22
status: active
---
# Housing Status Summation

## Changelog

- **2025-12-23**: Replaces`DOCSERNO` field with `PARENTDOCSERNO` field since the `PARENTDOCSERNO` is much more pertinent to identifying parent forms.
- **2025-12-22**: Adds `DOCSERNO` to the summation table so that users may identify the correct duplicate form to delete when appropriate to avoid creating orphan child summation forms.
- **2025-10-30**: Adds initial commit of version from Alpha. Adds `PATHWAY DATE` column, which was oddly missing.
