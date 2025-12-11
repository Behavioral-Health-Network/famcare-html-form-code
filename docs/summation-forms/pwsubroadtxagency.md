---
form_title: EPICC SU Treatment Agency
form_file: code/summation-forms/pwsubroadtreatmentagency.html
table_name: PWEPICCSUBROADTREATMENTAGENCY
program_scope: single
programs:
  - epicc
form_type: summation
client_form: true
tags:
  - summation-view
pathway_name: EPICC
pathway_id: 55320240807113504583
pathway_event: none
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
    - table: 
      join_type: 
      on:
        - source: 
          target: 
        - source: 
          target: 
quick_submit_enabled: false
last_updated: 2025-11-20
status: active
---

# EPICC Substance Use Treatment Agency Summation

## YAML Notes

- `client_form: true` distinguishes forms tied to individual clients.

## Operational Context

This form tracks referrals to substance use treatment agencies for formal treatment for EPICC clients as a slowly changing dimension.

## Field Matrix

<!-- markdownlint-disable MD033 -->
| Field Name                  | Field Prompt                                      | Type       | Required | Conditional Logic Notes                                                                 |
|:----------------------------|:--------------------------------------------------|:----------:|:--------:|:---------------------------------------------------------------------------------------|
| `pathway_date`              | Pathway Date                                      | Date       | Yes      | Required via <span style="font-family: monospace">&#124;&#124;PWRequiredFieldRequiredText&#124;&#124;</span>; validated in `validateform()`           |
| `epicc_su_tx_agency`        | Referred Treatment Agency                         | Dropdown   | Yes      | SQL-driven choice table (`epicc_su_tx_agency`); onchange triggers `checkhideall()`      |
| `pfh_tx_facility`           | Preferred Family Healthcare Location              | Dropdown   | Yes      | SQL-driven choice table (`epicc_su_tx_agency` filtered for PFH); onchange triggers `checkhideall()` |
| `if_other_specify`          | If "Other", Specify                               | Text       | No       | Free-text field; displayed if agency selection is "Other"                               |
| `start_date`                | Start Date                                        | Date       | Yes      | Required via <span style="font-family: monospace">&#124;&#124;PWRequiredFieldRequiredText&#124;&#124;</span>; onchange triggers `checkhideall()`      |
| `end_date`                  | End Date                                          | Date       | No       | Optional; onchange triggers `checkhideall()`                                            |
| `su_tx_intake`              | Did client attend a new intake?                   | Radio      | Yes      | Yes/No; onchange triggers `checkhideall()`                                              |
| `su_tx_intake_date`         | Intake Date                                       | Date       | No       | Optional; onchange triggers `checkhideall()`                                            |
| `was_intake_completed`      | Was intake completed?                             | Radio      | Yes      | Yes/No; onchange triggers `checkhideall()`                                              |
| `intake_not_completed`      | Why was intake not completed?                     | Dropdown   | Yes      | Required if intake not completed; onchange triggers `checkhideall()`                    |
| `intake_not_completed_other`| Other Reason Intake Wasn't Completed              | Textarea   | No       | Free-text; displayed if "Other" selected in `intake_not_completed`                      |
| `coach_attend_intake`       | Did EPICC coach attend the intake appointment?    | Radio      | Yes      | Yes/No; onchange triggers `checkhideall()`                                              |
| `coach_not_attend_intake`   | Why did EPICC coach not attend the intake?        | Textarea   | No       | Free-text; displayed if "No" selected in `coach_attend_intake`                          |
| `ces_attend_intake`         | Did CES attend the intake appointment?            | Radio      | Yes      | Yes/No; onchange triggers `checkhideall()`                                              |
| `ces_not_attend_intake`     | Why did CES not attend the intake appointment?    | Textarea   | No       | Free-text; displayed if "No" selected in `ces_attend_intake`                            |
| `pathway_date_joinkey`      | N/A                                               | Date       | No       | Derived column: resolves to PATHWAY_DATE if present, otherwise START_DATE, which will be relevant for imported records. Added as a persisted computed column to support consistent joins to Pathway Event forms. Indexed to improve query performance.                            |
<!-- markdownlint-disable MD033 -->

## Cross References

- [EPICC Substance Use Treatment Agency Summation](https://github.com/Behavioral-Health-Network/FAMCare-HTML-Form-Code/blob/main/code/summation-forms/pwsubroadtxagency.html)
- [EPICC Substance Use Treatment AGency Summation Dictionary](https://github.com/Behavioral-Health-Network/BHN-Data-Team-Wiki/blob/main/docs/data-dictionaries/epicc-data-dictionaries/epicc-su-tx-agency.md) <!-- this link does not yet exist -->

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-11-20**: Adds initial markdown. Adds `PATHWAY_DATE_JOINKEY` to the base `PWSUBROADTREATMENTAGENCY` table in the `PROD` database.

</details>
