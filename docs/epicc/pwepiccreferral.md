---
form_title: EPICC Referral
form_file: code/pwepiccreferral.html
table_name: PWEPICCREFERRAL
program_scope: single
programs:
  - epicc
form_type: pathways-governed
client_form: true
tags:
  - pathways-event
  - epicc-referral
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC Referral
pathway_event_logic:
    start_period: 0 - D
    end_period: 0 - D
    early_period: 0
    late_period: 185
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Referral
    completion_check_table: PWEPICCREFERRAL
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWEPICCREFERRAL.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWEPICCREFERRAL.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# EPICC Referral

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

<details markdown="1">
  <summary><strong>2026</strong></summary>

### 2026

- **YYYY-MM-DD**: Adds change.

</details>

<details markdown="1">
  <summary><strong>2025</strong></summary>

### 2025

- **2025-10-01**: Updates options for `program_participation_referral` to 'Eligible For Services', 'Ineligible', and 'Unable To Contact/Locate'. Adds a new field `ineligible_referral` where the user will select why the client wasn't eligible at referral and then `ineligible_reason` is conditional upon if 'Doesn't Meet Program Criteria' is selected for `ineligible_referral`.
- **2025-09-18**: Adds HTML and JavaScript code for `TiedEnrollment` fix that GVT created to help join all our Pathway forms together.
- **2025-08-15**: Removes `client_on_outreach_list` since the field is no longer needed. Makes `ems_fire_district_place_referral_in_transit`, `emergency_response_call`, and `suboxone_ems` conditional upon '073' and '015'. Adds open text field for `other_ems_fire_district`. This field is conditionally shown when 'Other EMS/Fire District' is selected for `Which EMS/Fire District?`
- **2025-07-21**: Adds question `why_not_suboxone_ems` after `suboxone_ems question`. If `suboxone_ems` question is answered as No then `why_not_suboxone_ems` question will show.
- **2025-07-14**: Makes `who_administered_suboxone` and `milligrams_suboxone` to be dependent on when `suboxone_ems` is 'Yes'.
- **2025-07-10**: Adds EMS questions (`emergency_response_call`, `suboxone_ems`, `who_administered_suboxone`, `milligrams_suboxone`, `ems_transport_to_hospital`) that were asked by AnswerFirst and EPICC reports out on monthly.
- **2025-06-03**: Comments out code for function `quicksubmitit()`.
- **2025-05-01**: Fixes alignment for the Save and Quick Save buttons.
- **2025-04-14**: Fixes alignment of Save, Quick Save, and Delete buttons to be in the center of the form.
- **2025-03-14**: Removes `agreeable_ed_outreach` from the `validateform()` function and the `setrequire()` function.

</details>
</details>
