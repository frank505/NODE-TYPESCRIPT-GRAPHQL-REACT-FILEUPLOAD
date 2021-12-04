import { GET_ALL } from './query/FileUploadQuery';
import { FILE_UPLOAD, MULTIPLE_FILE_UPLOAD } from './mutations/FileUpload';
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        fileUpload:FILE_UPLOAD,
        multipleFileUpload:MULTIPLE_FILE_UPLOAD
    }
});


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
         getAll: GET_ALL,
    },
});


export const schema = new GraphQLSchema({
     query: RootQuery,
    mutation: RootMutation,
});