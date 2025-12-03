---
form_title: EPICC Events
form_file: code/pwepiccevents.html
table_name: PWEPICCEVENTS
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
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWEPICCEVENTS.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWEPICCEVENTS.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-10-10
status: active
---

# EPICC Events

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-10-08**: Makes epicc_events_materials_distributed required.
- **2025-09-24**: Created in Pathway Form Wizard

</details>
