import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const skill=readFileSync(new URL('../../skills/source-trail-auditor/SKILL.md',import.meta.url),'utf8');
const rules=readFileSync(new URL('../../skills/source-trail-auditor/references/claim-rules.md',import.meta.url),'utf8');

test('requires atomic claim IDs and exact evidence mapping',()=>{
  assert.match(skill,/atomic claim IDs/i);
  assert.match(skill,/exact source evidence/i);
  assert.match(skill,/link count/i);
});

test('defines bounded support states',()=>{
  for(const state of ['supported','partial','contradicted','unverified']) assert.match(rules,new RegExp(`\\b${state}\\b`));
  assert.match(rules,/same subject, scope, and time/i);
});

test('does not treat official domains or snippets as proof',()=>{
  assert.match(rules,/merely because the source is official/i);
  assert.match(skill,/search snippets, AI summaries, and link labels/i);
});
