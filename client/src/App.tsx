import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useMutation } from '@apollo/client';
import { FILE_UPLOAD_MUTATION } from './Graphql/Mutations/FileUploadMutations';


function App() {

  const [response,setResponse] = useState<any>('');


  const [fileUpload, { data, loading  }] = useMutation(FILE_UPLOAD_MUTATION,
    {
    onError: (err) =>
    {
        setResponse(err.message);
    },
    onCompleted: (data) =>
    {
      if(data.fileUpload?.success)
      {

        alert(data.fileUpload?.message);
        setResponse(data.fileUpload?.message);
      }


    },
  });


  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    if (!e.target.files) 
    {
      return;
    }
      const formdata = new FormData();
      formdata.append('file', e.target.files[0]);
      fileUpload({
        variables:formdata
      });
  }


  return (
    <div className="App">
      <div style={{backgroundColor:"red",color:"white",fontWeight:"bold"}}>
         {response}
      </div>
      
      <input type="file" name="file" id="file"  onChange={uploadFile} />
    </div>
  );
}

export default App;
