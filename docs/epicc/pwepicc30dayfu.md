---
form_title: EPICC Thirty-Day Follow-Up
form_file: code/pwepicc30dayfu.html
table_name: PWEPICC30DAYFOLLOWUP
program_scope: single
programs:
  - epicc
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - epicc-thirty-day-follow-up
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
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWEPICC30DAYFU.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWEPICC30DAYFU.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
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

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-10-17**: Fixes typo in `transfer_type_thirty_day` from transfered to transferred.
- **2025-10-17**: Removes function updateThirtyDayForm and anything and BHN added such as showfields(). Added `treatment_path_thirty_day_unable_to_contact`, `what_mat_physician_appt_thirty_day_unable_to_contact`, and `mat_prescribed_physician_thirty_day_unable_to_contact`. This will allow for BHN to follow the new workflow that was created without having to modify checkhideall(), checkhide(), or create a new function to accomidate the complex conditional logic.
- **2025-10-01**: Removes Client Declined Services from `treatment_path_thirty_day` and updates the options for `client_status_thirty_day` from starting with Recommending to Recommend.
- **2025-10-01**: Reorganizes the questions to make more sense and an easier work flow. Adds new questions `reason_not_participating_thirty_day`, `reason_not_attending_sud_tx_thirty_day`, `other_reason_not_attending_sud_tx_thirty_day`, and `attending_sud_tx_verfy_thirty_day`. Creates a new function called updateThirtyDayForm to handle the more complex conditional logic and checkhideall still handles the simple x = x logic. Updates the onclick and onchanges where needed.
- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
-**2025-08-15**: Fixes typo in `why_not_meet_prog_eligibility_thirty_day` field name. Adds `why_not_meet_prog_eligibility_thirty_day`. Makes `intake_conducted_appt_date_thirty_day` and `why_not_meet_prog_eligibility_thirty_day` required questions. Updates typos in `client_status_thirty_day` and `date_transferred_reengagement_specialist_thirty_day`.
- **2025-08-15**: Changed the `MAT_PRESCRIBED_PHYSICIAN_APPT_THIRTY_DAY` data type from varchar(30) to varchar(50) to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field.
- **2025-07-22**: Adds Southeast option to `if_transfer_what_region_thirty_day`.
- **2025-06-03**: Comments out any code for function `quicksubmitit()` and anything related to Quick Submit.
- **2025-03-14**: Fixed save button issue. `preg_post_part_thirty_day` was in the !hiddenfield section and it shouldn't have been.
- **2025-03-12**: Removed `client_attend_intake_appt_thirty_day` and `intake_appt_date_thirty_day` since those questions are now being answered on the `PWBroadTreatmentAgency` summation. Changed view for `program_participation` to `thirty_day_fu` since columns for each follow-up form were added to the master table.

</details>
