const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write('Name: SNK');
    //conn.write('Move: up');   
    conn.write('Say: GLHF');
  });

  return conn;
};



//console.log("Connecting ...");
// connect();
// setupInput();

module.exports = { connect };