import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useMutation } from '@apollo/client';
import { FILE_UPLOAD, MULTIPLE_FILE_UPLOAD } from './Graphql/Mutations/FileUploadMutations';


function App() {

  const [response,setResponse] = useState<any>('');
  const [responseMultiple,setResponseMultiple] = useState<any>('');


  const [fileUpload , {data:fileUploadData,loading:fileUploadLoding}] = useMutation(
    FILE_UPLOAD,
    {
    onError: (err) =>
    {
      console.log(err);
        setResponse(err.message);
    },
    onCompleted: (data) =>
    {
      console.log(data);
      if(data.fileUpload?.success)
      {

        alert(data.fileUpload?.message);
        setResponse(data.fileUpload?.message);
      }


    },

    
    
  });




  const [multipleFileUpload , { data:multipleFileUploadData, loading:multipleFileUploadLoading }] = useMutation(MULTIPLE_FILE_UPLOAD,
    {
    onError: (err) =>
    {
      console.log(err);
        setResponseMultiple(err.message);
    },
    onCompleted: (data) =>
    {
      console.log(data);
      if(data.multipleFileUpload?.success)
      {

        alert(data.multipleFileUpload?.message);
        setResponseMultiple(data.multipleFileUpload?.message);
      }
    },
    
  });


  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    if (!e.target.files) 
    {
      return;
    }

      let data = {
        file:e.target.files[0],
      }
      fileUpload({
        variables:data
      });
  }


  const uploadMultiple = (e:React.ChangeEvent<HTMLInputElement>) =>
  {
    if (!e.target.files) 
    {
      return;
    }
     
     let file:FileList =  e.target.files;

  
     
     let data = {
       file: file
     }

     multipleFileUpload({
       variables:data
     })
    
  }


  return (
    <div className="App"  style={{marginTop:'200px'}} >
        <h3>Single file uploads</h3>
      <div 
     
      >
      <div style={{backgroundColor:"red",color:"white",fontWeight:"bold"}}>
         {response}
      </div>
      
      <input type="file" name="file[]" id="file"  onChange={uploadFile} />

      </div>


      <h3>Multiple file Uploads</h3>
      <div>
      <div style={{backgroundColor:"red",color:"white",fontWeight:"bold"}}>
         {responseMultiple}
      </div>
      
      <input type="file" name="file" id="file" multiple={true} onChange={uploadMultiple} />
      </div>
     
    </div>
  );
}

export default App;
