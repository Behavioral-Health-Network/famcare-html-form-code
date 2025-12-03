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
last_updated: 2025-12-03
status: active
---

# BCR Referral Form

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-12-03**: Adds initial Markdown documentation file.

</details>
