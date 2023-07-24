const resolvers = {
    Query: {
        image: async (_parent, { width, height, young, grayscale }, { dataSources }) => {
            const image = dataSources.imagesAPI.getImage(width, height, young, grayscale);
            return {
                data: image,
            };
        },
    },
};
export default resolvers;
