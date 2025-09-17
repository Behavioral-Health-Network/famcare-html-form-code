---
form_title: ERE Three Month Follow Up
form_file: code/pwerethreemonthfollowup.html
table_name: PWERETHREEMONTHFOLLOWUP
program_scope: single
programs:
  - ere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - ere-three-month-follow-up
pathway_name: ERE
pathway_id: 55320250326123001961
pathway_event: ERE 3 Month
pathway_event_logic:
    start_period: 90 - D
    end_period: 92 - D
    early_period: 5
    late_period: 90
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWERETHREEMONTHFOLLOWUP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWERETHREEMONTHFOLLOWUP.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWERETHREEMONTHFOLLOWUP.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# ERE Three Month Follow Up

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-07-01**: Comments out the all code for quicksubmitit and QuickSubmitReturn. These functions allow for Quick Submit to be on the form which allows users to save the form and bypass any required questions. Adds field promt for ineligible_reason_referral.
- **2025-06-23**: First Initial Commit from build in Pathway wizard.