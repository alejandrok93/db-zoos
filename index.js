const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const server = express();
const ZooRoutes = require("./routers/ZooRoutes.js");
const BearRoutes = require("./routers/BearRoutes.js");

server.use(express.json());
server.use(helmet());
server.use("/api/zoos/", ZooRoutes);
server.use("/api/bears", BearRoutes);

// endpoints here
// server.get("/api/zoo", (req, res) => {
//   db("zoos")
//     .then(zoos => res.status(200).json(zoos))
//     .catch(err => res.status(500).json(err));
// });

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
