require("dotenv").config();
const passport = require("passport");
require("../config/passport")(passport);
const db = require("./mongoose");
const express = require("express");
const expressGraphQL = require('express-graphql');
const session = require("express-session");
const schema = require("./graphql/graphql");
const app = express();

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//GraphQL
app.use("/graphql", expressGraphQL({
  graphiql: true,
  schema: schema
}));

//Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;