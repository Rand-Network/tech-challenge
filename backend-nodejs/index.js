const http = require("http");
const app = require("./src/app.js");
const server = http.createServer(app);
const { API_PORT } = process.env;

require("./src/config/database").connect();

const port = API_PORT || 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});