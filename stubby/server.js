var Stubby = require('stubby').Stubby;

var stubby = new Stubby();
stubby.start({
  stubs: 8081,
  location: 'localhost',
  data: [
    {
      request: {
        url: "/register",
        method: 'POST',
        /*headers: {
          'Accept': 'Application/json'
        },
        post: '{"username": "test@test.com", "email": "test@test.com"}'*/
      },
      response: {
        headers: {
          'content-type': 'application/json'
        },
        body: {
          _id: 'testId',
          username: 'test@test.com',
          email: 'test@test.com'
        }
      }
    },
    {
      request: {
        url: '/user/testId',
        method: 'GET'
      },
      response: {
        headers: {
          'content-type': 'application/json'
        },
        body: {
          _id: 'testId',
          username: 'test@test.com',
          email: 'test@test.com'
        }
      }
    }
  ]
});



/*
 
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
 
 */