const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("example")
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

console.log("Connecting ...");
connect();