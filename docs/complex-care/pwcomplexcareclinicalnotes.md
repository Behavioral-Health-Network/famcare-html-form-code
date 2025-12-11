---
form_title: Complex Care Clinical Notes
form_file: code/pwcomplexcareclinicalnotes.html
table_name: PWCOMPLEXCARECLINICALNOTES
program_scope: single
programs:
  - complex-care
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
pathway_name: Complex Care
pathway_id: 55320240920114308822
pathway_event: Complex Care Roster
pathway_event_logic:
    start_period: 0 - D
    end_period: 0 - D
    early_period: 0
    late_period: 0
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWCOMPLEXCARECLINICALNOTES
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: 
      join_type: inner
      on:
        - source: PWCOMPLEXCARECLINICALNOTES.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWCOMPLEXCARECLINICALNOTES.CLIENT_NUMBER
          target: Q_CLIENT_BHN.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-01
status: active
---

# Comeplex Care Clinical Notes

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

- **2025-12-01**: Adds initial Markdown documentation file. Adds condition to show `complex_care_committee_rationale` only when 'Do Not Select To BEACN Cohort' is selected for `Decision`. Capitalizes the letter 'C' in `Why Does Patient Not Meet BEACN Criteria?` field prompt.
- **2025-11-25**: Comments out `quicksubmitit()` and `QuickSubmitReturn()` functions. Adds `TIEDENROLLMENT` field to enable one-to-one joins to `PATHWAYCLIENT.DOCSERNO`. Adjusts the field alignments to the left. Adds condition to show `complex_care_reasons_ineligible` only when 'Client Does Not Meet BEACN Criteria' ('006') is selected for `complex_care_clinical_committee_rationale`.
- **2025-11-19**: Adds initial HTML file using the `Pathway Wizard`.

</details>
