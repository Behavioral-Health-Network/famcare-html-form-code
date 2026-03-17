---
form_title: BCR Referral
form_file: code/bcr/pwbcrreferral.html
table_name: PWBCRREFERRAL
program_scope: single
programs:
  - bcr
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - bcr-referral
pathway_name: BCR
pathway_id: 55320240917145557321
pathway_event: BCR Referral
pathway_event_logic:
    start_period: 0 - D
    end_period: 2 - D
    early_period: 0
    late_period: 2
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on:
    completion_check_table: PWBCRREFERRAL
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWBCRREFERRAL.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWBCRREFERRAL.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-02-12
status: active
---

# BCR Referral Form

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **2026-02-12**: Adds values 'Co-Location' and 'BCR Staff' to field `ref_source_type`.

2025

-
- **2025-12-03**: Adds initial Markdown documentation file.
- **2025-11-21**: Adds Counseling Agency as a drop down option to `how_hear_about_bcr`.
- **2025-11-20**: Comments out `method_referral`, `ref_through_event`, `bcr_ref_event`, `other_event_exp`, `prev_mh_bh_services`, `pregnant_at_ref`, `preg_or_child_last_ninety`, `reside_in_stl_city`, `bcr_prog_participation`, `marital_status_ref`, `bcr_reason_ineligible_ref`, and `other_reason_ineligible`. This was done per Tamela and Wendy's request to make the referral form shorter and some of the questions were moved to the IC form.
- **2025-08-25**: Adds HTML and JavaScript code to add `TiedEnrollment` field to the form as a fix GVT came up with to assist in joining our pathway forms together and avoiding duplication.
- **2025-05-01**: Adds closing div after `housing_status_referral`.
- **2025-05-01**: Adds `housing_status_referral` and removes Housing Status summation.
- **2025-01-03**: Adds summation instructions and adjusts one field to radio button control.

</details>
