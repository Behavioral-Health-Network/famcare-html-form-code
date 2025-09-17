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
last_updated: 2025-09-17
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

-**2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-07-28**: Updates options for probabtion_parole_ihna to match the options they have in CareManager: Yes, Probation; Yes, Parole; Yes, Both; No, Unknown.
- **2025-07-01**: Adds code for updateReportFields to allow each option in the check all that apply master tables (mh_history, su_history, and phy_health_history) to have it's own column. Comments out code for quicksubmitit and QuickSubmitReturn. This disables the Quick Submit option on the form. Also comments out code for question contact_result_ppc_ihna. Leadership decided they do not want this included at this time, but might want it later on.
- **2025-06-23**: First commit since being managed by Pathway Wizard
