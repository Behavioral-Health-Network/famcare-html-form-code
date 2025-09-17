---
form_title: EPICC SOR Pilot CES Client Contact
form_file: code/pwepiccorpilotcescc.html
table_name: PWEPICCSORPILOTCESCLIENTCONTACT
program_scope: single
programs:
  - epicc
form_type: pathways-standalone
client_form: true
tags:
  - standalone-form
  - epicc-sor-ces-client-contact
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
        - source: table_name: PWEPICCSORPILOTCESCLIENTCONTACT.PATHWAY_DATE
          target: PATHWAYEVENTCLIENT.DATEACCOMPLISHED
        - source: table_name: PWEPICCSORPILOTCESCLIENTCONTACT.CLIENT_NUMBER
          target: PATHWAYEVENTCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-09-17
status: active
---

# EPICC SOR Pilot CES Client Contact

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

- **2025-08-21**: Adds HTML and JavaScript code for TiedEnrollment fix that GVT created to help join all our pathway forms together.
- **2025-06-03**: Comments out any code for function quicksubmitit() and anything related to Quick Submit.
- **2025-03-14**: Had neglected to change to CES Name.
- **2025-03-02**: remove trailing spaces from values in contact_status_sor_pilot_client_contact and type_of_contact_sor_pilot_contact
- **2025-01-05**: Set date_new_intake_appt_sor_pilot_client_contact to show only if does_client_have_a_next_sched_appt = "Yes
- **2024-11-07**: Initial creation of EPICC SOR Pilot CES Client Contact Form in Pathway Wizard.
