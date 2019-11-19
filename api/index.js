const express = require("express");
const app = express();

app.use("/graphql", expressGraphQL({
  graphiql: true,
  schema: schema
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;