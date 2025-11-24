---
form_title: ERE IHNA
form_file: code/pwereihna.html
table_name: PWEREIHNA
program_scope: single
programs:
  - ere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - ere-ihna
pathway_name: ERE
pathway_id: 55320250326123001961
pathway_event: ERE IHNA
pathway_event_logic:
    start_period: 1 - D
    end_period: 30 - D
    early_period: 0
    late_period: 180
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWEREIHNA
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEREIHNA.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEREIHNA.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-10-27
status: active
---

# ERE IHNA

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-10-27**: Fixes `data-source` for `mh_hx_none` so that it will return `0|1` instead of `NULL`.
- **2025-10-01**: Adds `specify_probation_parole_ihna` as a conditional question when `probation_parole_ihna` equals Yes. Fixes typo in `mh_history`, `su_history`, and `phy_health_history` directions on how to multi-select in the mastertable.
- **2025-09-19**: Changes the field prompts for `num_er_visits_past_three_months_ihna`, `num_hosp_past_three_months_ihna`, and `num_leo_contacts_past_three_months_ihna` to add the word Number at the beginning so that the outreach workers know we are looking for a numeric value
- **2025-08-25**: Adds HTML and JavaScript code for `TiedEnrollment` fix that GVT created to help join all our Pathway forms together.
- **2025-07-28**: Updates options for `probabtion_parole_ihna` to match the options they have in CareManager: Yes, Probation; Yes, Parole; Yes, Both; No, Unknown.
- **2025-07-01**: Adds code for `updateReportFields()` to allow each option in the check all that apply master tables (`mh_history`, `su_history`, and `phy_health_history`) to have it's own column. Comments out code for `quicksubmitit()` and `QuickSubmitReturn()`. This disables the Quick Submit option on the form. Also comments out code for question `contact_result_ppc_ihna`. Leadership decided they do not want this included at this time, but might want it later on.
- **2025-06-23**: Adds initial commit of HTML form.
