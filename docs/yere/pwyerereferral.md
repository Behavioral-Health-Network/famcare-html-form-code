---
form_title: YERE Referral
form_file: code/yere/pwyerereferral.html
table_name: PWYEREREFERRAL
program_scope: single
programs:
  - yere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-referral
pathway_name: YERE
pathway_id: 55320240807125033701
pathway_event: YERE Referral
pathway_event_logic:
    start_period: 0 - D
    end_period: 2 - D
    early_period: 0
    late_period: 2
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on:
    completion_check_table: PWYEREREFERRAL
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWYEREREFERRAL.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWYEREREFERRAL.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# YERE Referral Form

<!---DEPENDENCIES-START--->
<!---DEPENDENCIES-END--->

<!---CHANGELOG-START--->
<!---CHANGELOG-END--->
