import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

import ImagesAPI from './images-api.js';
import resolvers from './resolvers.js';
import typeDefs from './schema.js';

interface ContextValue {
  dataSources: {
    imagesAPI: ImagesAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        imagesAPI: new ImagesAPI({ cache }),
      },
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
