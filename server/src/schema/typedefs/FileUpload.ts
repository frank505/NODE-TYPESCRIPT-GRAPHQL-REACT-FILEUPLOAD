import { GraphQLObjectType, GraphQLID, GraphQLString,GraphQLBoolean,GraphQLInt,GraphQLScalarType, GraphQLList } from "graphql";




export const FileUploadResponseType = new GraphQLObjectType({
    name: "FileUploadResponse",
    fields: () => {
        return ({
            success:{ type: GraphQLBoolean},
            message:{ type:GraphQLString},
            errorStatus:{type: GraphQLBoolean},
            error:{type: GraphQLString},
            token:{type:GraphQLString},
        });
    },
});



export const UploadType = new GraphQLScalarType({
    name: 'Uploads',
    serialize: (file:any)=>file,
    parseValue: (file:any)=>file,
    parseLiteral(file) {
        return file;
    }
});












