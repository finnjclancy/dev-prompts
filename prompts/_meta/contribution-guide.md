contribution guide (short + sweet)

how to add a prompt
1) find the right folder under `prompts/`.
2) create a new `kebab-case.json` file.
3) fill the fields (see `file-format.md`). keep `instructions` as one readable block.
4) keep placeholders like `{{code_selection}}` obvious and few.
5) run a json linter locally if you can. optional: validate with `validation-schema.json`.
6) open a pr with a short example in the description.

style rules
- be specific (framework, version, test runner).
- keep `instructions` numbered or bullet‑like but as a single string for painless pasting.
- avoid vendor lock‑in phrasing.
- add 2‑5 tags.

review checklist
- does it copy/paste cleanly and work first try?
- are risky failure modes called out in `risks`?
- is it in the right folder with the right filename?

nice‑to‑haves
- tiny “before/after” example in `examples`.
- `output_format.type` when you expect code/json only.
