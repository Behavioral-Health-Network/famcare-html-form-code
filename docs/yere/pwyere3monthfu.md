---
form_title: YERE Three-Month Follow-Up Form
form_file: code/yere/pwyere3monthfu.html
table_name: PWYERE3MONTHFOLLOWUPTP
program_scope: single
programs:
  - yere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-three-month-follow-up
pathway_name: YERE
pathway_id: 55320240807125033701
pathway_event: YERE 30 Day
pathway_event_logic:
    start_period: 90 - D
    end_period: 92 - D
    early_period: 7
    late_period: 90
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: YERE Initial Assessment
    completion_check_table: PWYERE3MONTHFOLLOWUPTP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWYERE3MONTHFOLLOWUPTP.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWYERE3MONTHFOLLOWUPTP.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# YERE Three-Month Follow-Up Form

<!---DEPENDENCIES-START--->
<!---DEPENDENCIES-END--->

<!---CHANGELOG-START--->
<!---CHANGELOG-END--->
