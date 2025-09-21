prompt json format (quick ref)

required
- `title` (string)
- `description` (string)
- `category` (string)
- `instructions` (string) → single, copy‑pasteable block

commonly used
- `language` (string|null)
- `tech` (string|null)
- `subcategory` (string|null)
- `tags` (string[])
- `inputs` (array of { name, type, required?, default?, enum?, description? })
- `context` (string)
- `model_tips` (string)
- `risks` (string)
- `references` (string[])
- `output_format` ({ type: markdown|json|code|text, schema?: any })

placeholders
- use `{{variable_name}}` like `{{code_selection}}`, `{{repo_context}}`, `{{test_framework}}`.

design goals
- fast to scan; minimal boilerplate; consistent across folders.
