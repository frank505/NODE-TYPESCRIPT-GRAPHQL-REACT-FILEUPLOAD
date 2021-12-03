import { GraphQLList } from "graphql";
import { FileUploadResponseType } from "../typedefs/FileUpload";

export const GET_ALL= {
    type: new GraphQLList(FileUploadResponseType),
    resolve(root:any,args:any,context:any)
    {
        return [];
    },
};