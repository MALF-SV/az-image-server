import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import ImagesAPI from './images-api.js';
import resolvers from './resolvers.js';
import typeDefs from './schema.js';
const server = new ApolloServer({
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
