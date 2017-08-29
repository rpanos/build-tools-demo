/**
 * Created by rpanos on 8/28/17.
 */

var server = require("../src/server.js");

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at: ', server.info.uri, '.  Yeah!');
});