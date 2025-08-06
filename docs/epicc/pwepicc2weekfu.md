---
form_title: EPICC Two-Week Follow-Up
form_file: code/pwepicc2weekfu.html
table_name: PWEPICC2WEEKFOLLOWUP
program: EPICC
client_form: true
pathway_form: true
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC 2 Week
pathway_event_logic:
    start_period: 14 - D
    end_period: 16 - D
    early_period: 2
    late_period: 162
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Initial Contact
    completion_check_table: PWEPICC2WEEKFOLLOWUP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICC2WEEKFU.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICC2WEEKFU.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-04
status: active
---
