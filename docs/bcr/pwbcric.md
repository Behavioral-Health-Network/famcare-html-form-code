---
form_title: BCR Initial Contact
form_file: code/bcr/pwbcric.html
table_name: PWBCRINITIALCONTACT
program_scope: single
programs:
  - bcr
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - bcr-initial-contact
pathway_name: BCR
pathway_id: 55320240917145557321
pathway_event: BCR Initial Contact
pathway_event_logic:
    start_period: 0 - D
    end_period: 14 - D
    early_period: 0
    late_period: 76
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: BCR Referral
    completion_check_table: PWBCRINITIALCONTACT
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWBCRINITIALCONTACT.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWBCRINITIALCONTACT.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-17
status: active
---

# BCR Initial Contact Form

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-12-17**: Moves `bcr_program_participation` up in the form to immediately follow `Pathway_Date`. Adds a hidden container (field `fldRestOfForm`) to only conditionally show all fields after `bcr_program_participation` if the values of "003" or "004" are NOT selected. This allows for Initial Contacts to be recorded when a client is unable to contact or when a client declines services without requiring us to modify all other fields to allow for an "Unknown" option. Adds an override to `checkhideall()` to force a change from `style="display: none;"` in the `fldRestOfForm` container to `style="display: block;"`. When the form is loaded, GVT's JavaScript injects inline `style="display:none;"` and jQuery `.show()` doesn't override it. With the override, `fldRestOfForm` container is forced to `style="display: block;"` allowing the rest of the form to be shown as expected. Moves fields `reason_if_ineligible_ic`, `other_reason_ineligible_ic`, and `bcr_grant` to the top of the hidden container `RestOfForm` so that they will be close to `bcr_program_participation` when they are conditionally shown. Sets field `reason_if_ineligible_ic` as required.
- **2025-12-03**: Adds initial Markdown documentation file.
- **2025-11-20**: Comments out `pregnant_ic` and `preg_child_last_90_ic`. Changes location of `planned_event`, `event_type`, and `event_type_other` to be right after `zip_of_initial_contact`.
- **2025-11-20**: Adds planned_event, event_type, event_type_other, reside_stl_city, and prior_mh_bh_service fields to the IC. These fields were requested to be movef from the Referral form to the IC by Tamela and Wendy to make the referral form shorter.
- **2025-08-25**: Adds HTML and JavaScript code to add `TiedEnrollment` field to the form as a fix GVT came up with to assist in joining our pathway forms together and avoiding duplication.
- **2025-03-11**: Removes extra class ="enter" that didn't need to be there before `pathway_date`.
- **2025-03-11**: Adds header at the top of the page since getting rid of logo.
- **2025-01-03**: Updates section headers.

</details>
