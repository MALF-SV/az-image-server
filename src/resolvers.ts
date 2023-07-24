export interface GetImageInput {
  width: number;
  height: number;
  young: boolean;
  grayscale: boolean;
}

const resolvers = {
  Query: {
    image: async (
      _parent: any,
      { width, height, young, grayscale }: GetImageInput,
      { dataSources },
    ) => {
      const image = dataSources.imagesAPI.getImage(
        width,
        height,
        young,
        grayscale,
      );
      return {
        data: image,
      };
    },
  },
};

export default resolvers;
