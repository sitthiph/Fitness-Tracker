require('dotenv').config();
const db = require("./mongoose");
const express = require("express");
const expressGraphQL = require('express-graphql');
const schema = require("./graphql/graphql");
const app = express();

//GraphQL
app.use("/graphql", expressGraphQL({
  graphiql: true,
  schema: schema
}));

//Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = app;