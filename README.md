# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 
https://github.com/lighthouse-labs/snek-multiplayer

## Final Product
To connect with the server, run play.js.

Constants including ip and port are stored in constants.js.

Connection details are included in client.js with defaut client name set to 'SNK'. Client sends message 'GLHF' upon successful connection.

Inputs are in input.js. 
Movements are bound with four keys:
'w' -up
's' -down
'a' -left
'd' -right

Each will send a short message as well when moving. 
A special key 'c' is bound to send a message 'SNAKE ALERT'.

Press 'ctrl' + 'c' to leave.





## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
