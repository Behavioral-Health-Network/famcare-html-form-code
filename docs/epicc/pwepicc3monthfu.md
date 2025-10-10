---
form_title: EPICC Three-Month Follow-Up
form_file: code/pwepicc3monthfu.html
table_name: PWEPICC3MONTHFOLLOWUP
program_scope: single
programs:
  - epicc
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - epicc-three-month-follow-up
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
last_updated: 2025-09-17
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

- **2025-10-01**: Updates client_status_three_month to change Recommending to Recommend. Takes out Client Declined SUD Treatment Services as an option for treatment_path_three_month.
- **2025-10-01**: Reorganizes the questions to make more sense and an easier work flow. Adds new questions reason_not_participating_three_month, reason_not_attending_sud_tx_three_month, other_reason_not_attending_sud_tx_three_month, and attending_sud_tx_verfy_three_month. Creates a new function called updateTThreeMonthForm to handle the more complex conditional logic and checkhideall still handles the simple x = x logic. Updates the onclick and onchanges where needed.
- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-08-15**: PWEPICC3MONTHFU: Adds `why_not_meet_prog_eligibility_three_month` as a conditional question when program participation option 002 Ineligible, Does Not Meet Program Criteria is selected. Makes `why_not_meet_prog_eligibility_three_month` and `intake_conducted_appt_date_three_month` required questions. Adds `presenting_notes_threem` at the bottom of the form.
- **2025-08-15**: Changed the `MAT_PRESCRIBED_PHYSICIAN_APPT_THREE_MONTH` data type from varchar(30) to varchar(50) to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field.
