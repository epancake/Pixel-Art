var assert = require('assert');
var queries = require('../queries');

const sheetsArray = [
  'ATS-1-a',
  'ATS-1',
  'a',
  'Manage and navigate a file system',
  'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
  'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
];


describe('#getSheetsLength', ()=>{
  it('returns the length of the array', ()=>{
    assert.deepEqual(queries.getSheetsLength(sheetsArray), 6);
  });
});

describe('#assessmentsArrayToObject', ()=>{
  it('returns an object with labels mapped to sheets array data', ()=>{
    assert.deepEqual(queries.assessmentsArrayToObject(sheetsArray), {
      assessmentId: 'ATS-1-a',
      standardId: 'ATS-1',
      version: 'a',
      description: 'Manage and navigate a file system',
      assessmentLink: 'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
      rubricLink: 'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
    });
  });

  it('returns a blank object when passed an empty array', ()=>{
    assert.deepEqual(queries.assessmentsArrayToObject([]), {});
  });
});
