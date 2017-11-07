'use strict';

const hapi = require('hapi');
const numberwang = require("./numberwang");
const server = new hapi.Server();

server.connection({ port: 4000 });

server.route([{
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply({"numberwang": numberwang.numberwang(request.query.number)});
  }
}]);

server.start(err => {
  if (err) {
    // Fancy error handling here
    console.error( 'Error was handled!' );
    console.error( err );
  }
});
