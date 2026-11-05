---
form_title: ERE Episode Closure Request
form_file: code/pwereclosure.html
table_name: PWERECLOSURE
program_scope: single
programs:
  - ere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - ere-closure
pathway_name: ERE
pathway_id: 55320250326123001961
pathway_event: ERE Episode Closure Request
pathway_event_logic:
    start_period: 0 - D
    end_period: 90 - D
    early_period: 0
    late_period: 30
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: ERE IHNA
    completion_check_table: PWERECLOSURE
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWERECLOSURE.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWERECLOSURE.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2026-11-10
status: active
---

# ERE Episode Closure Request

## YAML Notes

## Operational Context

## Field Matrix

## Embedded Summation Blocks

## JavaScript Notes

## Cross References

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **2026-11-03**: Initially creates files, using the BHS form as a copy. 
- **2026-11-10**: Adds JS function `ResetBHSAgencyList()` to clear the `bhs_admission_agency` LOV if `bhs_model` has not been selected. Adds comments for this function and the functions `GetBHSAgencyList()` and `PopBHSAgencyList()`. Adds a comment before `bhs_admission_agency` to explain why the `CHOICESQLD` code has been retained despite the fact that we are using `PULLDATA` to populate the list of BHS service agencies so that we don't conclude that one is redundant and try to "fix" it or "clean it up" in the future. This is retained so that the list will show when using `View/Edit` on the form. With a new record, `GetBHSAgencyList()` creates the list using `PULLDATA`. Removes code for validateform on bhs_model and bhs_admission_agency.



</details>
