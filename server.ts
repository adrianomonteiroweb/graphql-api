import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    rootApi: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      rootApi: () => "Root Api",
    },
  },
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));
