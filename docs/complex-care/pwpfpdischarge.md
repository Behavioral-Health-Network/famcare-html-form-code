---
form_title: PFP DISCHARGE
form_file: code/complex-care/pwpfpdischarge.html
table_name: PWPFPDISCHARGE
program_scope: single
programs:
  - complex-care
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - complex-care
pathway_name: Complex Care
pathway_id: 55320240920114308822
pathway_event: PfP Discharge
pathway_event_logic:
    start_period: 0 - D
    end_period: 30 - D
    early_period: 0
    late_period: 0
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWPFPDISCHARGE
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: 
      join_type: inner
      on:
        - source: PWPFPDISCHARGE.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWPFPDISCHARGE.CLIENT_NUMBER
          target: Q_CLIENT_BHN.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-11-12
status: active
---

# PfP Discharge

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

- **2025-11-12**: Adds `TIEDENROLLMENT` field to allow for one-to-one cardinality joins to `PATHWAYCLIENT.DOCSERNO` in order to join this data to the enrollment.
- **2025-10-29**: Adds HTML and JavaScript code.

</details>
