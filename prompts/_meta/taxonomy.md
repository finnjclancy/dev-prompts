taxonomy notes

structure
- top‑level themes: `general`, `tasks`, `languages`, `frameworks`, `devops`, `cloud`, `data-eng`, `ml-ai`, `databases`, `security`, `testing`, `ux-docs-writing`, `monorepo-and-tooling`, `integrations-and-messaging`, `niche-and-embedded`, `blockchain-and-crypto`, `localization-and-internationalization`, `collections`.
- go as deep as needed (e.g., `frameworks/backend/python/django`).

naming
- files: `kebab-case.json`.
- folders: lowercase with hyphens.

placement tips
- language‑agnostic? put it in `general/`.
- framework‑specific? put it under that framework.
- cross‑cutting (e.g., ci, infra)? live in `devops/`.

empties
- we track empty folders with `.gitkeep` so the tree stays visible.
