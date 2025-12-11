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
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWEPICC3MONTHFU.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWEPICC3MONTHFU.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
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

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-10-17**: Fixes typo in transfer_type_thirty_day from transfered to transferred.
- **2025-10-17**: Removes function updateThreeMonthForm and anything and BHN added such as showfields(). Added `treatment_path_three_month_unable_to_contact`, `what_mat_physician_appt_three_month_unable_to_contact`, and `mat_prescribed_physician_appt_three_month_unable_to_contact`. This will allow for BHN to follow the new workflow that was created without having to modify checkhideall(), checkhide(), or create a new function to accommodate the complex conditional logic.
- **2025-10-01**: Updates `client_status_three_month` to change Recommending to Recommend. Takes out Client Declined SUD Treatment Services as an option for treatment_path_three_month.
- **2025-10-01**: Reorganizes the questions to make more sense and an easier work flow. Adds new questions `reason_not_participating_three_month`, `reason_not_attending_sud_tx_three_month`, `other_reason_not_attending_sud_tx_three_month`, and `attending_sud_tx_verfy_three_month`. Creates a new function called updateThreeMonthForm to handle the more complex conditional logic and checkhideall still handles the simple x = x logic. Updates the onclick and onchanges where needed.
- **2025-08-25**: Adds HTML and JavaScript code for `TiedEnrollment` fix that GVT created to help join all our Pathway forms together.
- **2025-08-15**: Adds `why_not_meet_prog_eligibility_three_month` as a conditional question when program participation option 002 Ineligible, Does Not Meet Program Criteria is selected. Makes `why_not_meet_prog_eligibility_three_month` and `intake_conducted_appt_date_three_month` required questions. Adds `presenting_notes_threem` at the bottom of the form.
- **2025-08-15**: Changed the `MAT_PRESCRIBED_PHYSICIAN_APPT_THREE_MONTH` data type from varchar(30) to varchar(50) to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field.
- **2025-07-22**: Adds Southeast option to `if_transfer_what_region_three_month`.
- **2025-06-11**: Updates `what_mat_physician_appt_thirty_day` to `what_mat_physician_appt_three_month`.
- **2025-06-03**: Comments out all code for function `quicksubmitit()` and anything related to Quick Submit.
- **2025-03-12**: Commented out missed client_attend_intake_appt_three_month code.

</details>
