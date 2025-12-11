---
form_title: EPICC CORE Outreach Non Admission Data
form_file: code/pwepicccoreoutreachna.html
table_name: PWEPICCCOREOUTREACHNONADMISSIONDATA
program_scope: single
programs:
  - epicc
form_type: pathways-standalone
client_form: true
tags:
  - standalone-form
  - epicc-core-outreach
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
        - source: PWEPICCRPWEPICCCOREOUTREACHNONADMISSIONDATAEENGAGEMENTFORM.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWEPICCREEPWEPICCCOREOUTREACHNONADMISSIONDATANGAGEMENTFORM.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# EPICC CORE Outreach Non Admission Data

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
- **2025-03-05**: Renaming the HR_Dropdown field to coach_name.
- **2025-01-05**: Added instructions for summations. Does not currently have headers for summations.
- **2024-10-23**: Initial creation of EPICC CORE Outreach Non Admission Data Form in Pathway Wizard.

</details>
