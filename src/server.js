/**
 * Created by rpanos on 8/26/17.
 */
const Hapi = require('hapi');
const Inert = require('inert');

var server = new Hapi.Server();

/*
    TODOS:
        Major
            - Add more TESTS!
                - esp around the fetch
            - Try installing!
            - Add auto linting! (to the build)

 */

server.connection({ port: 3000 });
server.register(Inert, () => {});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'src/static',
            listing: true
        }
    }
});

server.route({
    method: 'GET',
    path: '/demo',
    handler: function (request, reply) {
        reply.file('./src/static/index.html');
    }
});

server.route({
    method: 'GET',
    path: '/get-list',
    handler: function (request, reply) {

        let fullList = [
            'Webpack', 'Gulp', 'Grunt', 'Babel', 'Traceur',
            'UglifyJS', 'React', 'Angular', 'Ember', 'VueJs'
            ];

        if (request.query && request.query['reqLimit'] && request.query['reqLimit'] > 0) {
            fullList = fullList.slice(0, request.query['reqLimit']);
        }

        reply(fullList);
    }
});

module.exports = server;