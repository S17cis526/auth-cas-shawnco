var assert = require('assert');
var authCAS = require('./../lib/auth-cas');

it('A CAS host must be specified', function(){
  assert.throws(
    () => {
      new authCAS();
    }, 'CAS Host must be supplied');

  assert.throws( ()=> {
    new authCAS(undefined);
  }, 'CAS Host must be supplied');
});

it('A CAS host must be specified', function(){
  assert.throws(
    () => { new authCAS('https://cashost.com')},
    'A CAS host must be supplied'
  );
})
