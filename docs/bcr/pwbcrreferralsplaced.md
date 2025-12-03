---
form_title: BCR Referrals Placed
form_file: code/bcr/pwbcrreferralsplaced.html
table_name: PWBCRREFERRALSPLACED
program_scope: single
programs:
  - bcr
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - bcr-referrals-placed
pathway_name: BCR
pathway_id: 55320240917145557321
pathway_event: BCR Referrals Placed
pathway_event_logic:
    start_period: 0 - D
    end_period: 14 - D
    early_period: 0
    late_period: 76
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: BCR Referral
    completion_check_table: PWBCRREFERRALSPLACED
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWBCRREFERRALSPLACED.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWBCRREFERRALSPLACED.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# BCR Referrals Placed Form

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-12-03**: Adds initial Markdown documentation file.

</details>
