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
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWEPICC6MONTHFU.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWEPICC6MONTHFU.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
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

<!---DEPENDENCIES-START--->
<!---DEPENDENCIES-END--->

<!---CHANGELOG-START--->
## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

<details markdown="1">
  <summary><strong>2026</strong></summary>

### 2026

- **2026-01-29**: Updates text field prompt for `attending_sud_tx_verify_six_month` from "Can you verify if a client is attending SUD Treatment at an agency at this time?" to "SUD agency confirms that client is actively attending treatment at the SUD agency at this time."

</details>

<details markdown="1">
  <summary><strong>2025</strong></summary>

### 2025

- **2025-10-17**: Removes function `updateSixMonthForm()` and anything and BHN added such as `showfields()`. Added `treatment_path_six_month_unable_to_contact`, `what_mat_physician_appt_six_month_unable_to_contact`, and `mat_prescribed_physician_appt_six_month_unable_to_contact`. This will allow for BHN to follow the new workflow that was created without having to modify `checkhideall()`, `checkhide()`, or create a new function to accommodate the complex conditional logic.
- **2025-10-01**: Reorganizes the questions to make more sense and an easier work flow. Adds new questions `reason_not_participating_six_month`, `reason_not_attending_sud_tx_six_month`, `other_reason_not_attending_sud_tx_six_month`, and `attending_sud_tx_verfy_six_month`. Creates a new function called `updateSixMonthForm()` to handle the more complex conditional logic and `checkhideall()` still handles the simple `x = x` logic. Updates the `onclick` and `onchange` where needed. Removed 'Client Declined SUD Treatment Services' from `treatment_path_six_month`.
- **2025-08-27**: Adds HTML and JavaScript code for `TiedEnrollment` fix that GVT created to help join all our Pathway forms together.
- **2025-08-15**: Changes the `MAT_PRESCRIBED_PHYSICIAN_APPT_SIX_MONTH` data type from `varchar(30)` to `varchar(50)` to accommodate the newly added value of 'Unable To Contact Client Or Treatment Agency', which was too long for the field. Adds radio button option for `mat_prescribed_physician_appt_six_month`, 'Unable To Contact Client Or Treatment Agency'.
- **2025-08-12**: Restores 'Not Engaged' as an active program participation value after consulting with Carla.
- **2025-06-03**: Comments out any code for function `quicksubmitit()` and anything related to `Quick Submit`.
- **2025-03-14**: Removes Regional Transfer questions since they are not asked at 6 months.
- **2025-03-10**: Comments out `client_attend_intake_appt_six_month` and `intake_appt_date_six_month`. These questions are going to be answered on the `PWSUBroadTreatmentAgency summation` now.
- **2025-02-21**: Updates headers and instructional text for summations.

</details>
</details>
<!---CHANGELOG-END--->
