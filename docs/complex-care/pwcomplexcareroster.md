---
form_title: Complex Care Roster
form_file: code/pwcomplexcareroster.html
table_name: PWCOMPLEXCAREROSTER
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
    completion_check_table: PWCOMPLEXCAREROSTER
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: 
      join_type: inner
      on:
        - source: PWCOMPLEXCAREROSTER.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWCOMPLEXCAREROSTER.CLIENT_NUMBER
          target: Q_CLIENT_BHN.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-01
status: active
---

# Comeplex Care Roster

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

- **2025-12-01**: Updates `program_assigned` field: 'Adult ERE Complex Care/BEACN' to 'Adult ERE', 'Clinical BEACN' to 'Mercy BEACN', 'H2HH' to 'BJC/H2H', and 'DePaul Vituity' to 'SSM Complex Care'. Adds `summationflbodypwcomplexcareclinicalnotes` to the bottom of the form so that Clinical Notes may be tracked via the Roster form.
- **2025-11-05**: Adds `date_added_cohort` field as a non-required input to allow for recording 'Cohort Selection Date'.
- **2025-10-31**: Adds `complex_care_referral_source` field.
- **2025-10-30**: Adds `dm3700_status` field.
- **2025-10-28**: Changes the `WHERE` clause for `cmhc_agency` and `ada_su_agency` to filter to ERE instead of LINCS NAV.
- **2025-08-27**: Comments out quicksubmitit and QuickSubmitReturn functions to disable the QUICK SUBMIT feature on the form. The QUICK SUBMIT feature would allow the user to save the form and bypass any required questions.
- **2025-08-27**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.

</details>
