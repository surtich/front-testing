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
    },
    {
      request: {
        url: "/client",
        query: {
          page: 1
        },
        method: "GET"
      },
      response: {
        status: 500,
        body: "Bad request"
      }
    }
  ]
});
