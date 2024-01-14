import axios from "axios";

export async function uploadFile(file:any){
    var formData = new FormData();

    
    formData.append('file', file);

    
    const response  = await axios.post('http://localhost:5100/uploader/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then(response=>response.data);

    return response;
    
    
}

export async function uploadBookFile(file:any){
  var formData = new FormData();

  
  formData.append('file', file);

  
  const response  = await axios.post('http://localhost:5100/uploader/uploadBook', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  }).then(response=>response.data);

  return response;
  
  
}