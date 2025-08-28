---
form_title: ERE Referral
form_file: code/pwerereferral.html
table_name: PWEREREFERRAL
program: ERE
client_form: true
pathway_form: true
pathway_name: ERE
pathway_id: 
pathway_event: ERE Referral
pathway_event_logic:
    start_period: 0 - D
    end_period: 2 - D
    early_period: 0
    late_period: 2
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWEREREFERRAL
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYEVENTCLIENT
      join_type: inner
      on:
        - source: PWEREREFERRAL.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: PWEREREFERRAL.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-08-25
status: active
---

# ERE Referral

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-07-14**: Fixes typo in the field prompt for first_ip_hosp and for patient_location_referral changes option Inpatient to Psychiatric Inpatient Unit upon Amy's request to better understand and classify what Inpatient means.
- **2025-07-01**: Comments out the all code for quicksubmitit and QuickSubmitReturn. These functions allow for Quick Submit to be on the form which allows users to save the form and bypass any required questions. Adds field promt for ineligible_reason_referral.
- **2025-06-23**: Changes Onsite to On-Site in referral_method.
