---
form_title: ERE Hospital Visit Note
form_file: code/pwerehospitalvisitnote.html
table_name: PWEREHOSPITALVISITNOTE
program_scope: single
programs:
  - ere
form_type: pathways-standalone
client_form: true
tags:
  - standalone-form
pathway_name: ERE
pathway_id: 55320250326123001961
pathway_event: null
pathway_event_logic: null
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEREHOSPITALVISITNOTE.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEREHOSPITALVISITNOTE.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-10-10
status: active
---

# ERE Hospital Visit Note

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-09-12**: Adds code to make TiedEnrollment a required question.
- **2025-09-11**: Created in Pathway Form Wizard
