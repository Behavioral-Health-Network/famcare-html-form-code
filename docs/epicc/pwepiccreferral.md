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
last_updated: 2025-08-25
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

- **2025-08-25**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-08-15**: Removes client_on_outreach_list. Question no longer needed. Makes `ems_fire_district_place_referral_in_transit`, `emergency_response_call`, and `suboxone_ems` conditional upon 073 and 015.Adds open text field for `other_ems_fire_district`. It is a conditional questions when Other EMS/Fire District is selected for Which EMS/Fire District?
