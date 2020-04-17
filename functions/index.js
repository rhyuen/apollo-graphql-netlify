const { ApolloServer, gql } = require("apollo-server-lambda");
const typeDefs = require("./graphql/schemas");
const resolvers = require("./graphql/resolvers");

console.log("hi guise.");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
});

exports.handler = server.createHandler();