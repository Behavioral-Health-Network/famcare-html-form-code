---
form_title: YERE Initial Assessment
form_file: code/yere/pwyereia.html
table_name: PWYEREINITIALCONTACT
program_scope: single
programs:
  - yere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-initial-assessment
pathway_name: YERE
pathway_id: 55320240807125033701
pathway_event: YERE Initial Assessment
pathway_event_logic:
    start_period: 0 - D
    end_period: 30 - D
    early_period: 0
    late_period: 180
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: YERE Referral
    completion_check_table: PWYEREINITIALCONTACT
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWYEREINITIALCONTACT.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWYEREINITIALCONTACT.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# YERE Initial Assessment Form

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-12-23**: Updates `referred_family_support_specialist` field text from, 'Is youth being referred to a Family Support Specialist?' to 'Has youth been referred to a YERE Family Support Provider through Vision for Children at Risk?'.
- **2025-12-03**: Adds initial Markdown documentation file.

</details>
