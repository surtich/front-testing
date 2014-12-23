var nock = require('nock');
nock('http://myapp').defaultReplyHeaders({
  'Access-Control-Allow-Origin': '*'
}).post('/register', {
  username: 'test@test.com',
  email: 'test@test.com'
}).times(Infinity).reply(200, {
  _id: 'testId',
  username: 'test@test.com',
  email: 'test@test.com'
}).get('/user/testId').times(Infinity).reply(200, {
  _id: 'testId',
  username: 'test@test.com',
  email: 'test@test.com'
});