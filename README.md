# build-tools-demo

This is a simple demo of React and Hapi.

## To install: 

npm install


## To start the server:

node src/start_server.js


## The app should be at:

http://localhost:3000/demo


## If you decide to update the React code and want to build:

NODE_ENV=production node_modules/.bin/webpack -p


## From the root directory, you can run server tests:

./node_modules/lab/bin/lab test/server_tests.js 

< or wherever your npm put lab >

## And you can run the React tests with:

npm test


