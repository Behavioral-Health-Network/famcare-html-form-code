---
form_title: YERE Thirty-Day Follow-Up Form
form_file: code/yere/pwyere30dayfu.html
table_name: PWYERE30DAYFOLLOWUPTP
program_scope: single
programs:
  - yere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-thirty-day-follow-up
pathway_name: YERE
pathway_id: 55320240807125033701
pathway_event: YERE 30 Day
pathway_event_logic:
    start_period: 30 - D
    end_period: 32 - D
    early_period: 5
    late_period: 180
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: YERE Initial Assessment
    completion_check_table: PWYERE30DAYFOLLOWUPTP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWYERE30DAYFOLLOWUPTP.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWYERE30DAYFOLLOWUPTP.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# YERE Thirty-Day Follow-Up Form

<!---DEPENDENCIES-START--->
<!---DEPENDENCIES-END--->

<!---CHANGELOG-START--->
<!---CHANGELOG-END--->
