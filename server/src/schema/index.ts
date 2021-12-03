import { FILE_UPLOAD } from './mutations/FileUpload';
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        fileUpload:FILE_UPLOAD
    }
});


export const schema = new GraphQLSchema({
    // query: RootQuery,
    mutation: RootMutation,
});