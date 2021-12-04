import { gql } from "@apollo/client";

export const FILE_UPLOAD= gql`
  mutation fileUpload(
    $file: Uploads!
  ) {
    fileUpload(
      file: $file,
    ) {
       success,message,errorStatus,error,token
    }
  }
`;
