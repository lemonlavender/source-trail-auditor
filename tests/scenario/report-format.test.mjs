import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const format=readFileSync(new URL('../../skills/source-trail-auditor/references/report-format.md',import.meta.url),'utf8');
const expected=readFileSync(new URL('../../examples/expected-audit.md',import.meta.url),'utf8');

test('report contains decision-ready sections in order',()=>{
  const headings=['Scope and as-of time','Verdict','Claim-source matrix','Source ledger','Official task links','Freshness queue','Source diversity and independence','Verification route','Rewrite guidance','Coverage boundary'];
  let cursor=-1;
  for(const heading of headings){
    const next=format.indexOf(heading);
    assert.ok(next>cursor,`${heading} missing or out of order`);
    cursor=next;
  }
});

test('example preserves excerpt-only boundary and blocks unsafe decision',()=>{
  assert.match(expected,/`not-ready`/);
  assert.match(expected,/No URL was opened/i);
  assert.match(expected,/P0 C1/);
  assert.match(expected,/P0 C2/);
});
