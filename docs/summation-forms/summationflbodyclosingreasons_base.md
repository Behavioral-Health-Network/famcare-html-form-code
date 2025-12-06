---
form_title: Closing Reasons Summation
form_file: code/summation-forms/summationflbodyclosingreasons_base.html
table_name: SUMMATIONFLBODYCLOSINGREASONS_BASE
program_scope: multi
programs:
  - bcr
  - complex-care
  - epicc
  - ere
  - yere
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
date_field:
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
last_updated: 2025-12-06
status: active
---

# Closing Reasons Summation

## Changelog

- **2025-12-06**: Adds initial commit of HTML and Markdown documentation files. Adds `STATUSDESC` column to the summation so that it is easier to track 'Active|Inactive' status on program dismissal reasons.
