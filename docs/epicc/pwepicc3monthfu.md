---
form_title: EPICC Three-Month Follow-Up
form_file: code/pwepicc3monthfu.html
table_name: PWEPICC3MONTHFOLLOWUP
program: EPICC
client_form: true
pathway_form: true
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC 3 Month
pathway_event_logic:
    start_period: 90 - D
    end_period: 95 - D
    early_period: 5
    late_period: 85
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Initial Contact
    completion_check_table: PWEPICC3MONTHFOLLUP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICC3MONTHFU.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICC3MONTHFU.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-04
status: active
---

# EPICC Three-Month Follow-Up

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-15**: Changed the `MAT_PRESCRIBED_PHYSICIAN_APPT_THREE_MONTH` data type from varchar(30) to varchar(50) to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field.
