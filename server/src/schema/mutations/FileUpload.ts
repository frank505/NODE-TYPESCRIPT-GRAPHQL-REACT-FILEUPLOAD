import { fileRenamer } from './../../helpers/fileHelperFunc';
import {GraphQLScalarType, GraphQLString} from "graphql";
import path from "path";
import * as fs from "fs";
import { UploadType,FileUploadResponseType } from '../typedefs/FileUpload';





interface IFormParams{
file:any,
email:string,
name:string
}





export const FILE_UPLOAD:any = {
    type:FileUploadResponseType,
    args:{
        email:{type:GraphQLString},
        password:{type:GraphQLString},
         file:{type:UploadType}

    },


    async resolve(parent:any, args:IFormParams,context:any)
    {
        const { createReadStream,filename, mimetype } = await args.file.file;
        const stream = createReadStream();
        console.log(stream);
        const uniqueName:string =  fileRenamer(filename);
        const pathName = path.join(__dirname, './'+uniqueName);
        await stream.pipe(fs.createWriteStream(pathName));
    }
}









