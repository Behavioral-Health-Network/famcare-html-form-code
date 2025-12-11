---
form_title: Mercy BEACN Benchmarks
form_file: code/complex-care/pwmercybeacnbenchmarks.html
table_name: PWMERCYBEACNBENCHMARKS
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
pathway_event: Clinical BEACN Metrics
pathway_event_logic:
    start_period: 0 - D
    end_period: 30 - D
    early_period: 0
    late_period: 0
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWMERCYBEACNBENCHMARKS
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: 
      join_type: inner
      on:
        - source: PWMERCYBEACNBENCHMARKS.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWMERCYBEACNBENCHMARKS.CLIENT_NUMBER
          target: Q_CLIENT_BHN.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-11-06
status: active
---

# Mercy BEACN Benchmarks

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

- **2025-11-11**: Adds a condition to the `startup()` function to load `date_added_cohort` if `TIEDENROLLMENT` is already present. This is intended to address the fact that the cohort selection date is a read-only value on this form that is not saved to the table and thus is not displayed when the form reloads unless the user interacts with the Pathway Assignment field again, which leads to a confusing and poor user experience.
- **2025-11-06**: Adds a hidden field for `date_added_cohort` to allow for saving the form when the date even when the value is blank.
- **2025-11-05**: Adds `TIEDENROLLMENT` field to allow for one-to-one cardinality joins to `PATHWAYCLIENT.DOCSERNO` in order to join this data to the enrollment. Leverages the `TIEDENROLLMENT` field to replace the basic `PULL` syntax for `added_cohort_date`. Defines an `onchange` event to run the new function `getCohortDate()`, which, when combined with another new function `popCohortDate()` pulls the relevant cohort selection date only after Pathway Assignment has been made using `TIEDENROLLMENT`. This ensures that the cohort selection date is always correct, even when patients are re-referred and selected for the cohort more than once.
- **2025-10-29**: Adds `screenparm` `ROSTERDATE` to `PULL` the `PATHWAY_DATE` from `PWCOMPLEXCAREROSTER.html` and fill `added_cohort_date`. Removes required field element from `added_cohort_date` field. Removes `pfp_discharge_date` because the field is movingt o a new form that will dependent upon the Pathway Event for this form.
- **2025-08-11**: Adds HTML and JavaScript code.

</details>
