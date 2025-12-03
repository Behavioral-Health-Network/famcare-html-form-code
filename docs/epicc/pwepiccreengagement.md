---
form_title: EPICC Re-Engagement
form_file: code/pwepiccreengagement.html
table_name: PWEPICCREENGAGEMENTFORM
program_scope: single
programs:
  - epicc
form_type: pathways-standalone
client_form: true
tags:
  - standalone-form
  - epicc-reengagement
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
        - source: PWEPICCREENGAGEMENTFORM.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICCREENGAGEMENTFORM.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# EPICC Re-Engagement Form

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

- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-06-03**: Comments out code for function quicksubmitit() and anything related to Quick Submit.
- **2025-03-12**: Replacing the Master Table dropdown in reengagement_specialist with a filtered HR Dropdown.
- **2025-01-05**: Update to replace coach agency mts with reengage mt
- **2024-11-08**: Initial creation of EPICC Re-Engagement Form in Pathway Wizard.

</details>
