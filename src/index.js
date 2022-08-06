import { ApolloServer } from "apollo-server";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type User {
    email: String!
    friends: [User]
  }

  type Query {
    getUser: User
  }
`;

const resolvers = {
  Query: {
    getUser: () => {
      return {
        email: "test@gmail.com",
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(() => console.log("Server started on port: 4000"));
