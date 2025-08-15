---
form_title: EPICC Referral
form_file: code/pwepiccreferral.html
table_name: PWEPICCREFERRAL
program: EPICC
client_form: true
pathway_form: true
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: EPICC Referral
pathway_event_logic:
    start_period: 0 - D
    end_period: 0 - D
    early_period: 0
    late_period: 185
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: EPICC Referral
    completion_check_table: PWEPICCREFERRAL
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICCREFERRAL.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICCREFERRAL.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-04
status: active
---

# EPICC Referral

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog
