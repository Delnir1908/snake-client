
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function (key) {
  // code handling the key press will go here
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
    connection.write('Say: GG');
  }

  if (key === 'a') {
    connection.write('Move: left');
    connection.write('Say: RUN');
  }

  if (key === 's') {
    connection.write('Move: down');
    connection.write('Say: EAT');
  }

  if (key === 'd') {
    connection.write('Move: right');
    connection.write('Say: MEAT');
  }

  if (key === 'c') {
    connection.write('Say: SNAKE ALERT');
  }


};

module.exports = { setupInput };