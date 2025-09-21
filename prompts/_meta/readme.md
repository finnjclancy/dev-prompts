prompts library

hey! this repo is a big grab‑bag of developer prompts you can copy/paste straight into your ide chat. no hunting around, no wiring. open a json file, copy the instructions, done.

quick start
- pick a folder that matches your task (e.g. `general/testing/generate-unit-tests.json`).
- skim the top fields for context; the real meat is in `instructions`.
- replace placeholders like `{{code_selection}}` with your stuff.
- paste into your model (cursor, copilot, chatgpt, whatever) and go.

what’s inside the json
- title/description: what it does.
- tags/language/tech: helps search.
- inputs: placeholders you’ll want to fill.
- context: the “voice” or stance.
- instructions: the copy‑paste prompt. single block for easy paste.
- model_tips/risks: optional nudges.

philosophy
- copy‑paste first. every prompt is standalone. no includes required.
- consistent structure so you can swap prompts fast.
- community‑friendly: pr a new prompt anywhere in the tree.

pro tips
- keep selections small for tight answers (functions > whole files).
- mention your stack (e.g., jest vs vitest) to steer the model.
- ask the model to “return code only” when you’re ready.

contributing
see `prompts/_meta/contribution-guide.md` and `prompts/_meta/file-format.md`. there’s a schema in `validation-schema.json` if you want to validate locally.
