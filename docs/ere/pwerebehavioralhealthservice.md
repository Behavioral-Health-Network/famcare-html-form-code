---
form_title: ERE Behavioral Health Service
form_file: code/pwerebehavioralhealthservice.html
table_name: PWEREBEHAVIORALHEALTHSERVICE
program: ERE
client_form: true
pathway_form: true
pathway_name: ERE
pathway_id: 
pathway_event: ERE Behavioral Health Service
pathway_event_logic:
    start_period: 0 - D
    end_period: 180 - D
    early_period: 0
    late_period: 0
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: ERE IHNA
    completion_check_table: PWEREBEHAVIORALHEALTHSERVICE
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEPICCRPWEREBEHAVIORALHEALTHSERVICEEFERRAL.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEREBEHAVIORALHEALTHSERVICE.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-25
status: active
---

# ERE Behavioral Health Service

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-07-01**: Comments out all code for quicksubmitit and QuickSubmitReturn functions. This disables the Quick Submit option on the form, which allows users to save without answering all the required questions. Fixes issue with bh_admission_agency, wasn't filtering properly.
- **2025-06-23**: Adds filter to bh_admission_agency and su_admission_agency to filter the master table to those for ERE.
