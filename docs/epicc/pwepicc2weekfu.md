---
form_title: EPICC Two-Week Follow-Up
form_file: code/pwepicc2weekfu.html
table_name: PWEPICC2WEEKFOLLOWUP
program_scope: single
programs:
  - epicc
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - epicc-two-week-follow-up
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC 2 Week
pathway_event_logic:
    start_period: 14 - D
    end_period: 16 - D
    early_period: 2
    late_period: 162
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Initial Contact
    completion_check_table: PWEPICC2WEEKFOLLOWUP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICC2WEEKFU.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICC2WEEKFU.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# EPICC Two-Week Follow-Up

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-08-15**: Adds conditional question `why_not_meet_prog_eligibility_two_week` when program participation option 002 Ineligible, Does Not Meet Project Criteria is selected. Adds radio button option to  `mat_prescribed_physician_appt_two_week`, Unable To Contact Client Or Treatment Agency. Adds presenting_notes_two_week to the bottom of the form.
- **2025-08-15**: Changed the `MAT_PRESCRIBED_PHYSICIAN_APPT_TWO_WEEK` data type from varchar(30) to varchar(50) to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field.
