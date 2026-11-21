#!/usr/bin/env node
// Format and validate JSON. Usage: cat data.json | node format.js
const fs = require('fs');
const file = process.argv[2];
const raw = file ? fs.readFileSync(file, 'utf8') : fs.readFileSync(0, 'utf8');
try {
  const data = JSON.parse(raw);
  console.log(JSON.stringify(data, null, 2));
} catch (e) {
  console.error('Invalid JSON: ' + e.message);
  process.exit(1);
}
