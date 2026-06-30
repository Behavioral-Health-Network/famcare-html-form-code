---
form_title: YERE Behavioral Health Services Form
form_file: code/yere/pwyerebhs.html
table_name: PWYEREBEHAVIORALHEALTHSERVICESTP
program_scope: single
programs:
  - yere
form_type: pathways-governed
client_form: true
tags:
  - pathway-event
  - yere-behavioral-health-services
pathway_name: YERE
pathway_id: 55320240807125033701
pathway_event: YERE Behavioral Health Services
pathway_event_logic:
    start_period: 0 - D
    end_period: 180 - D
    early_period: 0
    late_period: 0
    recurring_period: 0 - D
    lag_period: 0 - D
    number_occurrences: 1
    depends_on: 
    completion_check_table: PWYEREBEHAVIORALHEALTHSERVICESTP
date_field: PATHWAY_DATE
parent_linkage: null
join_logic:
  targets:
    - table: PATHWAYCLIENT
      join_type: inner
      on:
        - source: PWYEREBEHAVIORALHEALTHSERVICESTP.TIEDENROLLMENT
          target: PATHWAYCLIENT.DOCSERNO
        - source: PWYEREBEHAVIORALHEALTHSERVICESTP.CLIENT_NUMBER
          target: PATHWAYCLIENT.CLIENTNUMBER
quick_submit_enabled: false
last_updated: 2025-12-03
status: active
---

# YERE Behavioral Health Services Form

## Special Validation Logic: Behavioral Health Intake Consistency Check

This form includes a custom validation rule inside `validateform()` that enforces logical consistency between three fields:

- `attend_bh_intake`  
- `mh_intake`  
- `su_intake`

### Why this rule exists

If a youth **attended a behavioral health intake**, then at least one of the two specific intake types — **Mental Health** or **Substance Use** — must be marked **Yes**. Selecting **No** for both is considered an invalid state and must block submission. With this
rule in place, no exception report or exceptional program management oversight is required to maintain data quality for type of intake.

This rule is intentionally stricter than the default “required field” checks used elsewhere in the form.

### How the rule works

Inside `validateform()`, the following condition is evaluated:

```javascript
if (
  !hiddenfield('mh_intake') &&
  gvtfieldvalue('attend_bh_intake') == 'Yes' &&
  gvtfieldvalue('mh_intake') == 'No' &&
  gvtfieldvalue('su_intake') == 'No'
) {
    edesc = edesc + `Either the Mental Health or Substance Use question must be Yes, when the intake/admission question is Yes\n`;
    seterror("mh_intake");
}
```

<!---DEPENDENCIES-START--->
<!---DEPENDENCIES-END--->

<!---CHANGELOG-START--->

## Changelog

<details markdown="1"> <summary><strong>View Changelog Details</strong></summary>

2026

- **YYYY-MM-DD**: Adds change.

2025

- **2025-12-03**: Adds initial Markdown documentation file.

</details>
<!---CHANGELOG-END--->
