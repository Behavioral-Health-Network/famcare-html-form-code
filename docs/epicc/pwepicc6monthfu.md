---
form_title: EPICC Six-Month Follow-Up
form_file: code/pwepicc6monthfu.html
table_name: PWEPICC6MONTHFOLLOWUP
program_scope: single
programs:
  - epicc
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - epicc-six-month-follow-up
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC 6 Month
pathway_event_logic:
    start_period: 180 - D
    end_period: 188 - D
    early_period: 8
    late_period: 10
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Initial Contact
    completion_check_table: PWEPICC6MONTHFOLLOWUP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICC6MONTHFU.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICC6MONTHFU.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# EPICC Six-Month Follow-Up

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-27**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-08-15**: Adds radio button option for mat_prescribed_physician_appt_six_month, Unable To Contact Client Or Treatment Agency.
- **2025-08-15**: Changed the `MAT_PRESCRIBED_PHYSICIAN_APPT_SIX_MONTH` data type from varchar(30) to varchar(50) to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field.
- **2025-08-12**: Restored 'Not Engaged' as an active program participation value after consulting with Carla.  
