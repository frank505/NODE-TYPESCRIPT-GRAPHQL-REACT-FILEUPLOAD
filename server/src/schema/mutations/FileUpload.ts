import { fileRenamer } from './../../helpers/fileHelperFunc';
import {GraphQLList, GraphQLScalarType, GraphQLString} from "graphql";
import path from "path";
import  fs from "fs";
import { UploadType,FileUploadResponseType } from '../typedefs/FileUpload';





interface IFormParams{
file:any,
}





export const FILE_UPLOAD:any = {
    type:FileUploadResponseType,
    args:{
         file:{type:UploadType}

    },


    async resolve(parent:any, args:IFormParams,context:any)
    {
        const { createReadStream,filename, mimetype } = await args.file.file;
        const stream = createReadStream();
        console.log(stream);
        const uniqueName:string =  fileRenamer(filename);
        const pathName = path.join(__dirname, '../../files/'+uniqueName);
        await stream.pipe(fs.createWriteStream(pathName));
        return {
            success:true,
            message:'file uploaded successfully'
        }
    }
}

export const MULTIPLE_FILE_UPLOAD:any = {
    type:FileUploadResponseType,
    args:{
        file:{ type: new GraphQLList(UploadType) }
    },
    async resolve(parent:any, args:IFormParams,context:any)
    {
        console.log(args);
    }
}









