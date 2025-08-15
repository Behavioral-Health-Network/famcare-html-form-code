---
form_title: EPICC Initial Contact
form_file: code/pwepiccic.html
table_name: PWEPICCINITIALCONTACT
program: EPICC
client_form: true
pathway_form: true
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC Initial Contact
pathway_event_logic:
    start_period: 0 - D
    end_period: 2 - D
    early_period: 0
    late_period: 180
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Referral
    completion_check_table: PWEPICCINITIALCONTACT
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICCIC.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICCIC.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-02
status: active
---

# EPICC Initial Contact Form

## YAML Notes

- `client_form: true` distinguishes forms tied to individual clients.
- `pathway_form: true` flags forms governed by Pathway Event logic.
- `pathway_event_dependency` is extensible and can be omitted for non-Pathway forms.
- `serial_logic.join_targets` allows one to document expected joins.
- `signature_tracking: true` is retained at vendor request but is discouraged in practice since signing forms locks them.

## Operational Context

This form tracks Initial Contact data for EPICC clients, including referral source, overdose context, MAT history, and client demographics. Used to determine program eligibility, document treatment pathways, and trigger downstream reporting fields.

## Field Matrix

|                Field Name               |                   Field Prompt                  |     Type     | Required |                    Conditional Logic Notes                    |
|:---------------------------------------:|:----------------------------------------:|:------------:|:--------:|:-------------------------------------------------------------:|
| `pathway_date`                            | Pathway Date                             | Date         | Yes        | Required via `setrequire()` and validated in `validateform()`     |
| `time_referral_placed`                    | Time of Referral Call                    | Time         | Yes        | Uses jQuery timepicker; required                              |
| `epicc_pro_or_core_ic`                    | Referral Type                            | Radio        | Yes        | Triggers conditional display of MAT fields                    |
| `program_participation_ic`                | Program Participation                    | Dropdown     | Yes        | SQL-driven choice table; triggers multiple conditional fields |
| `treatment_path_ic`                       | Anticipated Service Path                 | Radio        | Yes        |                                                               |
| `who_initiated_referral`                  | Who initiated the referral?              | Radio        | Yes        | Triggers `community_referral_source_ic` visibility              |
| `community_referral_source_ic`            | If Community Referral, Select One        | Dropdown     | Yes        | SQL-driven choice table                                       |
| `type_contact_ic`                         | Type of Contact                          | Radio        | Yes        |                                                               |
| `consent_crc_referral_ic`                 | Does client consent to CRC referral?     | Radio        | Yes        | Triggers `reason_consent_refused_crc_ic` if 'No'                |
| `epicc_opioids_of_use`                    | Opioid(s) of Use                         | Multi-Select | Yes        | Triggers hidden field updates via function `updateReportFields()`        |
| `overdose_event_referral`                 | Referral due to overdose event?          | Radio        | Yes        | Triggers `overdose_location`, `first_overdose`                    |
| `overdose_location`                       | Location of Overdose                     | Radio        | Yes        | Triggers `specify_other_location` if 'Other'                    |
| `first_overdose`                          | Was this the client's first overdose?    | Radio        | Yes        | Triggers `num_past_overdoses`, `most_recent_past_overdose_date`            |
| `su_treatment_past_twelve_mos`            | Treatment in past 12 months              | Radio        | Yes        |                                                               |
| `current_su_treatment`                    | Currently receiving treatment            | Radio        | Yes        |                                                               |
| `opioid_prescription_long_term_pain_mgmt` | Opioid prescription for pain management? | Radio        | Yes        |                                                               |
| `ever_prescription_mat_not_referral`      | Ever had MAT prescription?               | Radio        | Yes        |                                                               |
| `current_script_mat_not_referral`         | Current MAT prescription?                | Radio        |          | Triggers `current_script_mat_type`                            |
| `current_script_mat_type`                 | Type of MAT Prescribed                   | Dropdown     | Yes        |                                                               |
| `mat_initiated_hospital`                  | Was MAT initiated in hospital?           | Radio        | Yes        | Triggers `what_mat_initiated_hospital`                       |
| `what_mat_initiated_hospital`             | Type of MAT in Hospital                  | Dropdown     | Yes        |                                                               |
| `mat_script_discharge`                    | MAT prescription at discharge?           | Radio        |          | Triggers `what_mat_script_discharge`                          |
| `what_mat_script_discharge`               | Type of MAT Prescribed                   | Dropdown     | Yes        |                                                               |
| `overdose_ed_provided`                    | Was overdose education provided?         | Radio        | Yes        | Triggers `reason_oe_not_provided`                            |
| `reason_oe_not_provided`                  | If "No", why?                            | Radio        | Yes        | Triggers `if_other_specify`                                   |
| `narcan_distributed`                      | Was Narcan distributed?                  | Radio        | Yes        | Triggers `reason_narcan_not_distributed`                      |
| `reason_narcan_not_distributed`           | If not, why?                             | Radio        |          | Triggers `no_narcan_exp`                                      |
| `preg_post_part_ic`                       | Is client pregnant or postpartum?        | Radio        | Yes        |                                                               |
| `veteran_status`                          | Is client a veteran?                     | Radio        | Yes        |                                                               |
| `presenting_notes_ic`                     | Presenting Notes                         | Textarea     |          |                                                               |

Note: Additional fields like `non_opioid_substance_*`, `reason_ic_not_success`, and summation blocks are conditionally rendered or embedded.

## Embedded Summation Blocks

- `SummationFLBodyPWSUBROADTREATMENTAGENCY`
- `SummationFLBodyPWHOUSINGSTATUS`
- `SummationFLBodyPWPAYORSOURCE`

These are modular inserts for related data capture and are rendered via `||INCLUDESUMMATION||`.

## Hidden Field Sync

Hidden fields such as `opioid_of_use_fentanyl` are pivoted and updated via function `updateReportFields()` based on selections in `epicc_opioids_of_use`. This supports downstream reporting and analytics.

## JavaScript Notes

- All JavaScript is placed at the top per GVT convention.
- New functions are appended at the end of the script block.
- Function `updateReportFields()` dynamically syncs dropdown selections with hidden fields for reporting.
- Function `waitForElement()` ensures dropdowns are initialized even if loaded late.

## Cross References

- [EPICC Initial Contact Form](https://github.com/Behavioral-Health-Network/FAMCare-HTML-Form-Code.git/blob/main/code/epicc/pwepiccic.html)
- [EPICC Initial Contact Data Dictionary](https://github.com/Behavioral-Health-Network/BHN-Data-Team-Wiki.git/blob/main/docs/data-dictionaries/epicc/table-inital-contact.md)

## Changelog

- **2025-08-15**: Adds radio button option for `mat_prescribed_physician_appt_six_month`, Unable To Contact Client Or Treatment Agency.
- **2025-08-12**: Disables 'Already Enrolled In SUD Services' program participation value due to ongoing concerns on the part of the EPICC leadership that Recovery Coaches were misusing this value and would likely continue to do so despite retraining efforts.
- **2025-08-01**: Updates `epicc_program_participation` code '011' to description 'Services Transferred To ERE' to update the program name from 'LINCS IO'.
- **2025-07-30**: Refactors 0206 pivot fields and deprecates Notes column. Commentary relocated here.
- **2025-07-18**: Adds Southeast region to `if_transfer_what_region_ic` LOV.
- **2025-02-28**: Updates `epicc_program_participation` master table to remove 'Enrolled With EPICC' and replace it with 'Eligible For Services' after discussion with EPICC leadership team. The intention was to help clarify the distinction between enrollment with EPICC and enrollment with a treatment agency.
- **2025-02-08**: Updates headers and instructional text for the summations. Moved Housing Status summation to above the Payor Source summation to ensure consistency in layout across all program forms.
- **2024-12-31**: Adds 'Unknown' value to pregnancy field response options because Recovery Coaches may not know the answer to this question.
- **2024-12-02**: Changes `program_participation_*` fields to use a master table `epicc_program_participation`.
- **2024-11-30**: `ic_successful` removed from the form. The program participation field handles this logic.
- **2024-11-19**: Converts `epicc_opioids_of_use` to use a master table instead of using an independent checkbox field. It needs a conditional question to specify 'Other' opioids if that option is selected.
- **2024-11-19**: Adds 'Not Appliable' option to `consent_cric_referral_ic` to allow for instances where the client is already covered by insurance. We need to distinish 'NA' values from 'No' values to ensure accurate reporting.
- **2024-11-19**: Removes Recovery Coach summation. The Program Worker field on PROVIDERPLACEMENT is to be used in its place.
- **2024-11-18**: Renames independent checkboxes under 0206 for audit clarity.
- **2024-10-16**: Adds pregnancy question. It had recently been added to the form in ETO, and the decision was reached to leave it on the form.
- **2024-10-15**: Removes `coach_ic` for Recovery Coach performing Initial Contact and adds a summation instead.
- **2024-10-15**: Removes `agency_ic` for agency of Recovery Coach and adds a summation instead.
