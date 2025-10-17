---
form_title: EPICC Community Outreach Event
form_file: code/pwepicccommunityoutreachevent.html
table_name: PWEPICCCOMMUNITYOUTREACHEVENT
program_scope: single
programs:
  - epicc
form_type: pathways-standalone
client_form: true
tags:
  - standalone-form
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: null
pathway_event_logic: null
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICCCOMMUNITYOUTREACHEVENT.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICCCOMMUNITYOUTREACHEVENT.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-10-10
status: active
---

# EPICC Community Outreach Event

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-10-08**: Comments out code that makes the address information an expandable section and adds a header instead.
- **2025-06-03**: Comments out code for function quicksubmitit() and anything related to Quick Submit.
