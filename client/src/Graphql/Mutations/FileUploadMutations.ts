import { gql } from "@apollo/client";

export const FILE_UPLOAD_MUTATION = gql`
  mutation loginAdmin(
    $file: Upload!
  ) {
    fileUpload(
      file: $file
    ) {
       success,message,errorStatus,error,token
    }
  }
`;
