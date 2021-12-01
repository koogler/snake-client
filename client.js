const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  });

  conn.on("connect", () => {
    conn.write("Name: EVN")
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up")
  // })

  // conn.on("connect", () => {
  //   conn.write("Move: down")
  // })

  // conn.on("connect", () => {
  //   conn.write("Move: left")
  // })

  // conn.on("connect", () => {
  //   conn.write("Move: right")
  // })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect }