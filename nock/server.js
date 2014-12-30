var nock = require('nock');
var extend = require('extend');

nock = nock('http://myapp').defaultReplyHeaders({
  'Access-Control-Allow-Origin': '*'
});

function register(nock, username) {
  
  var idUser = username + 'Id';
  
  var user = {
    username: username + '@test.com',
    email: username + '@test.com'
  };

  var reply = extend({
    _id: idUser
  }, user);
  
  nock.post('/register', user).once().reply(200, reply);
  nock.post('/register', user).times(Infinity).reply(200, {error: 'Duplicated user'});

  nock.get('/user/' + idUser).times(Infinity).reply(200, reply);
}

var mockUsers = ['test1', 'test2'];

mockUsers.forEach(register.bind(null, nock));