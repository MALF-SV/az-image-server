const typeDefs = `#graphql
    # This "Image" type defines the queryable fields for every image in our data source.
    type Image {
        data: String
    }

    type Query {
        image(width: Int!, height: Int!, young: Boolean, grayscale: Boolean): Image
    }
`;
export default typeDefs;
