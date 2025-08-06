---
form_title: EPICC Six-Month Follow-Up
form_file: code/pwepicc6monthfu.html
table_name: PWEPICC6MONTHFOLLOWUP
program: EPICC
client_form: true
pathway_form: true
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC 6 Month
pathway_event_logic:
    start_period: 180 - D
    end_period: 188 - D
    early_period: 8
    late_period: 10
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Initial Contact
    completion_check_table: PWEPICC6MONTHFOLLOWUP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICC6MONTHFU.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICC6MONTHFU.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-04
status: active
---