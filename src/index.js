import { ApolloServer } from "apollo-server";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type User {
    email: String!
    friends: [User]
  }

  type Anime {
    title: String!
    characters: [String]
  }

  type Movie {
    title: String!
    characters: [String]
  }

  type Media {
    anime: Anime
    movie: Movie
  }

  type Query {
    getUser: User
    getMedia: Media
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
    getMedia: () => {},
  },
  Media: {
    anime: () => {
      return {
        title: "One Piece",
        characters: [
          "Monkey D. Luffy",
          "Roronoa Zoro",
          "Nami",
          "Usopp",
          "Sanji",
        ],
      };
    },
    movie: () => {
      return {
        title: "Zindagi Na Milegi Dobara",
        characters: ["Kabir", "Imran", "Arjun"],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(() => console.log("Server started on port: 4000"));
