---
form_title: EPICC Thirty-Day Follow-Up
form_file: code/pwepicc30dayfu.html
table_name: PWEPICC30DAYFOLLOWUP
program: EPICC
client_form: true
pathway_form: true
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC 30 Day
pathway_event_logic:
    start_period: 30 - D
    end_period: 35 - D
    early_period: 5
    late_period: 150
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Initial Contact
    completion_check_table: PWEPICC30DAYFOLLOWUP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICC30DAYFU.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICC30DAYFU.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-04
status: active
---

# EPICC Thirty-Day Follow-Up

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

-**2025-08-15**: Fixes typo in `why_not_meet_prog_eligibility_thirty_day` field name. Adds `why_not_meet_prog_eligibility_thirty_day`. Makes `intake_conducted_appt_date_thirty_day` and `why_not_meet_prog_eligibility_thirty_day` required questions. Updates typos in `client_status_thirty_day` and `date_transferred_reengagement_specialist_thirty_day`.
- **2025-08-15**: Changed the `MAT_PRESCRIBED_PHYSICIAN_APPT_THIRTY_DAY` data type from varchar(30) to varchar(50) to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field.
