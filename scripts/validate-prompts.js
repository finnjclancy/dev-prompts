#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const { red, green } = require('colorette');

const repoRoot = process.cwd();
const schemaPath = path.join(repoRoot, 'prompts', '_meta', 'validation-schema.json');

function loadJSON(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function main() {
  const schema = loadJSON(schemaPath);
  const ajv = new Ajv({ allErrors: true, strict: true });
  addFormats(ajv);
  const validate = ajv.compile(schema);

  const files = fg.sync(['prompts/**/*.json', '!prompts/_meta/**'], { cwd: repoRoot, absolute: true, dot: false });

  let hasErrors = false;
  for (const file of files) {
    try {
      const data = loadJSON(file);
      const ok = validate(data);
      if (!ok) {
        hasErrors = true;
        console.error(red(`Schema errors in: ${path.relative(repoRoot, file)}`));
        for (const err of validate.errors || []) {
          console.error(`  ${err.instancePath} ${err.message}`);
          if (err.params) console.error(`    params: ${JSON.stringify(err.params)}`);
        }
      }
    } catch (e) {
      hasErrors = true;
      console.error(red(`Invalid JSON: ${path.relative(repoRoot, file)}`));
      console.error(`  ${e.message}`);
    }
  }

  if (hasErrors) {
    console.error(red('\nValidation failed.'));
    process.exit(1);
  } else {
    console.log(green(`Validated ${files.length} files successfully.`));
  }
}

main();
