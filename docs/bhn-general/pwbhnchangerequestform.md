---
form_title: BHN Change Request Form
form_file: code/pwbhnchangerequestform.html
table_name: PWCBHNCHANGEREQUESTFORM
program_scope: none
programs:
  - none
form_type: 
client_form: false
tags:
  - change-management
  - change-request-form
pathway_name: 
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
    - table: 
      join_type: 
      on:
        - source: 
          target: 
        - source: 
          target: 
quick_submit_enabled: false
last_updated: 2026-06-15
status: active
---

# BHN Change Request Form

## YAML Notes

- `client_form: false` — this form is not tied to a single client record; it is an administrative workflow form.
- `dependency_selectors: true` — the form dynamically loads SQL, Report, and Documentation assets based on program scope and lineage metadata.
- `serial_logic.join_targets` is not used; dependencies are resolved through lineage views rather than relational joins.
- `signature_tracking: false` — this form is not intended to be signed and should remain editable throughout the workflow.
- `program_scope_behavior` is driven by `Q_BHN_FULL_DEPENDENCY_LINEAGE`, ensuring consistent filtering for single‑program, all‑program, and non‑program assets.

## Operational Context

The BHN Change Request Form is used to document, route, and approve changes to SQL assets, reports, documentation, and other governed artifacts within the BHN analytics ecosystem.  
It supports:

- **Impact analysis** via dependency selectors tied to lineage metadata  
- **Cross‑team coordination** between SQL developers, report writers, and program managers  
- **Governance workflows** requiring documentation of scope, rationale, and affected assets  
- **Program‑specific filtering**, ensuring that users only see assets relevant to the selected program (e.g., EPICC, BCR, Complex Care)

The form integrates with:

- `Q_BHN_FULL_DEPENDENCY_LINEAGE` for dependency expansion  
- `Q_BHN_VIEW_AND_TABLE_DEPENDENCIES` for SQL object lineage  
- `Q_BHN_SAVEDQUERY_DEPENDENCIES` for report lineage  
- `Q_BHN_DOCUMENTATION_DEPENDENCIES` for documentation lineage  

This ensures that users can accurately identify all downstream impacts of a proposed change.

## Field Matrix

<details markdown="1">
<summary><strong>Click to expand Field Matrix</strong></summary>

| Field Name | Field Prompt | Type | Required | Conditional Logic Notes |
|------------|--------------|------|----------|--------------------------|
| `requester_name` | Requester Name | Text | Yes | Auto‑populated from user context when available |
| `request_date` | Request Date | Date | Yes | Defaults to current date |
| `program` | Program | Dropdown | Yes | Drives dependency filtering; maps to program slugs (`epicc`, `bcr`, `complex-care`, `ere`, `yere`) |
| `change_type` | Type of Change | Dropdown | Yes | Options include SQL, Report, Documentation, Other |
| `change_summary` | Summary of Change | Textarea | Yes | High‑level description of the requested change |
| `change_details` | Detailed Description | Textarea | Yes | Full explanation of the change, rationale, and expected outcomes |
| `sql_dependencies` | Impacted SQL Assets | Multi‑Select | Conditional | Populated via CHOICETABLE; visible when `change_type` includes SQL |
| `report_dependencies` | Impacted Report Assets | Multi‑Select | Conditional | Populated via CHOICETABLE; visible when `change_type` includes Report |
| `doc_dependencies` | Impacted Documentation Assets | Multi‑Select | Conditional | Populated via CHOICETABLE; visible when `change_type` includes Documentation |
| `additional_dependencies` | Additional Dependencies | Textarea | No | For assets not captured by lineage views |
| `risk_level` | Risk Level | Radio | Yes | Options: Low, Medium, High |
| `risk_notes` | Risk Notes | Textarea | Conditional | Required when `risk_level = High` |
| `testing_required` | Testing Required? | Radio | Yes | Triggers testing plan fields |
| `testing_plan` | Testing Plan | Textarea | Conditional | Required when testing is required |
| `approver` | Approver | Dropdown | Yes | Program‑specific approver list |
| `approval_status` | Approval Status | Radio | Yes | Options: Pending, Approved, Rejected |
| `approval_notes` | Approval Notes | Textarea | Conditional | Required when status is Rejected |

</details>

## Dependency Selectors

The form includes three SQL‑driven dependency selectors:

- **SQL Assets** — filtered by `ROOT_SOURCE_TYPE = 'SQL_OBJECT'`
- **Report Assets** — filtered by `ROOT_SOURCE_TYPE = 'SAVEDQUERY'`
- **Documentation Assets** — filtered by `ROOT_SOURCE_TYPE = 'DOCUMENTATION'`

All three selectors use the same program‑scope logic:

- `PROGRAM_SCOPE = 'single'` → only assets matching the selected program slug  
- `PROGRAM_SCOPE = 'all'` → BHN‑wide assets  
- `PROGRAM_SCOPE = 'none'` → administrative or cross‑program assets  

This ensures consistent behavior across all asset types.

## Embedded Logic Notes

- Program slug mapping uses normalized provider names from the `PROVIDER` table.
- The CASE logic for program matching is identical across all three dependency selectors.
- BH

<!---DEPENDENCIES-START--->
<!---DEPENDENCIES-END--->

<!---CHANGELOG-START--->
<!---CHANGELOG-END--->
