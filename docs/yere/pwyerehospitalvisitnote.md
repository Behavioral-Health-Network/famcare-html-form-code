---
form_title: YERE Hospital Visit Note Form
form_file: code/yere/pwyerehopsitalvisitnote.html
table_name: PWYEREHOSPITALVISITNOTE
program_scope: single
programs:
  - yere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-hospital-visit-note
pathway_name: YERE
pathway_id: 55320240807125033701
pathway_event: YERE Hospital Visit Note
pathway_event_logic:
    start_period: 0 - D
    end_period: 30 - D
    early_period: 0
    late_period: 180
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on:
    completion_check_table: PWYEREHOSPITALVISITNOTE
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWYEREHOSPITALVISITNOTE.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWYEREHOSPITALVISITNOTE.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# YERE Hospital Visit Note Form

<!---DEPENDENCIES-START--->
<!---DEPENDENCIES-END--->

<!---CHANGELOG-START--->
<!---CHANGELOG-END--->
