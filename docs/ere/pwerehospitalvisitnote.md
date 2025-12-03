---
form_title: ERE Hospital Visit Note
form_file: code/pwerehospitalvisitnote.html
table_name: PWEREHOSPITALVISITNOTE
program_scope: single
programs:
  - ere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-hospital-visit-note
pathway_name: ERE
pathway_id: 55320250326123001961
pathway_event: ERE Hospital Visit Note
pathway_event_logic:
    start_period: 0 - D
    end_period: 30 - D
    early_period: 0
    late_period: 180
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on:
    completion_check_table: PWEREHOSPITALVISITNOTE
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWEREHOSPITALVISITNOTE.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWEREHOSPITALVISITNOTE.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# ERE Hospital Visit Note

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-09-12**: Adds code to make TiedEnrollment a required question.
- **2025-09-11**: Created in Pathway Form Wizard

</details>
