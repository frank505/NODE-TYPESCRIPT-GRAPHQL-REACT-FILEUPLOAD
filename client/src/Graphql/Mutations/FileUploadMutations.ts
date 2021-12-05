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

export const MULTIPLE_FILE_UPLOAD=gql`
mutation multipleFileUpload(
  $file: [Uploads!]!
) {
  multipleFileUpload(
    file: $file,
  ) {
     success,message,errorStatus,error,token
  }
}
`;
