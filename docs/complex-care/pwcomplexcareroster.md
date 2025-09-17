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
  - complex-care-roster
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
        - source: PWCOMPLEXCAREROSTER.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWCOMPLEXCAREROSTER.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# Comeplec Care Roster

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-27**: Comments out quicksubmitit and QuickSubmitReturn functions to disable the QUICK SUBMIT feature on the form. The QUICK SUBMIT feature would allow the user to save the form and bypass any required questions.
- **2025-08-27**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.