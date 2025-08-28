---
form_title: EPICC CORE Outreach Non Admission Data
form_file: code/pwepicccoreoutreachna.html
table_name: PWEPICCCOREOUTREACHNONADMISSIONDATA
program: EPICC
client_form: true
pathway_form: False
pathway_name: EPICC
pathway_id: 
pathway_event: 
pathway_event_logic:
    start_period: 
    end_period: 
    early_period: 
    late_period: 
    recurring_period: 
    lag_period: 
    number_occurrences: 
    depends_on: 
    completion_check_table: 
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICCRPWEPICCCOREOUTREACHNONADMISSIONDATAEENGAGEMENTFORM.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEPICCREEPWEPICCCOREOUTREACHNONADMISSIONDATANGAGEMENTFORM.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-25
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

- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-06-03**: Comments out code for function quicksubmitit() and anything related to Quick Submit.
- **2025-03-05**: Renaming the HR_Dropdown field to coach_name.
- **2025-01-05**: Added instructions for summations. Does not currently have headers for summations.
- **2024-10-23**: Initial creation of EPICC CORE Outreach Non Admission Data Form in Pathway Wizard.
