const net = require("net");
const { connect } = require('./client');
const { setupInput }= require('./input');

console.log("Connecting ...");
const connection = connect(); // Capture the returned connection object
setupInput(connection); // Pass the connection object to setupInput