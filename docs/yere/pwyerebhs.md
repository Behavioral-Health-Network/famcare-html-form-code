---
form_title: YERE Behavioral Health Services
form_file: code/yere/pwyerebhs.html
table_name: PWYEREBEHAVIORALHEALTHSERVICESTP
program_scope: single
programs:
  - yere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-behavioral-health-services
pathway_name: YERE
pathway_id: 55320240807125033701
pathway_event: YERE Behavioral Health Services
pathway_event_logic:
    start_period: 0 - D
    end_period: 180 - D
    early_period: 0
    late_period: 0
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWYEREBEHAVIORALHEALTHSERVICESTP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWYEREBEHAVIORALHEALTHSERVICESTP.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWYEREBEHAVIORALHEALTHSERVICESTP.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# YERE Behavioral Health Services Form

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-12-03**: Adds initial Markdown documentation file.

</details>
