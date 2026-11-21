# JSON Formatter CLI

Format and validate JSON from stdin or a file

## Overview
JSON Formatter CLI is a small command-line script that reads JSON from standard input or a file, validates it against strict JSON rules, and prints a consistently indented version. It is aimed at developers who want a lightweight formatter for debugging, automation, and review without adding package dependencies. Because it is distributed as a single script, it can be added to local workflows, CI checks, or editor tasks with minimal setup.

## Use cases
- Piping an API response through the script to make nested JSON readable before debugging.
- Validating a configuration file in a pre-commit hook or CI step before it reaches production.
- Reformatting minified JSON copied from logs or another tool into stable, reviewable output.

## How to use
1. Download the script and place it somewhere on your PATH or in your project.
2. Run it with a file argument or pipe JSON into it, such as `json-formatter input.json` or `curl ... | json-formatter`.
3. Inspect the pretty-printed output or non-zero exit status to catch validation errors.

## What is included
- Pretty print
- Strict validation
- Zero dependencies

## License
Personal use. Redistribution not permitted.
