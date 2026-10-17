import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const skill=readFileSync(new URL('../../skills/source-trail-auditor/SKILL.md',import.meta.url),'utf8');
const rules=readFileSync(new URL('../../skills/source-trail-auditor/references/claim-rules.md',import.meta.url),'utf8');

test('separates official action pages from overview pages',()=>{
  assert.match(skill,/official product overview is not the action page/i);
  for(const action of ['configure','download','check status','inspect pricing']) assert.match(rules,new RegExp(action,'i'));
});

test('requires temporal fit for volatile claims',()=>{
  assert.match(skill,/temporal fit/i);
  assert.match(rules,/availability, price, supported regions, model names/i);
  assert.match(rules,/as-of time/i);
});

test('prioritizes decision-reversing gaps',()=>{
  assert.match(rules,/P0.*reverse the decision/i);
  assert.match(rules,/P1.*change scope or steps/i);
  assert.match(rules,/P2.*contextual improvements/i);
});
