import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';

const root=new URL('../../',import.meta.url);
const manifest=JSON.parse(readFileSync(new URL('ipollowork.plugin.json',root),'utf8'));
const en=readFileSync(new URL('README.md',root),'utf8');
const zh=readFileSync(new URL('README.zh-CN.md',root),'utf8');

test('manifest declares one safe complete Skill resource',()=>{
  assert.equal(manifest.schemaVersion,2);
  assert.equal(manifest.source.trusted,false);
  assert.equal('permissions' in manifest,false);
  assert.deepEqual(manifest.resources,[{type:'skill',id:'source-trail-auditor',label:'Source Trail Auditor',path:'skills/source-trail-auditor',required:true}]);
});

test('release archives and bilingual product documentation are complete',()=>{
  for(const file of ['dist/source-trail-auditor-1.0.0.ipollowork-plugin','dist/source-trail-auditor-1.0.0-skill.zip','dist/source-trail-auditor-1.0.0-source.zip','dist/SHA256SUMS.txt']) assert.equal(existsSync(new URL(file,root)),true,`${file} missing`);
  for(const text of [en,zh]){
    assert.match(text,/https:\/\/github\.com\/Devin-AXIS\/iPolloWork/);
    assert.match(text,/source-trail-auditor-1\.0\.0\.ipollowork-plugin/);
    assert.match(text,/claim|主张/i);
  }
});
