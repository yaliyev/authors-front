import axios from "axios";

export async function getAuthors(){
    return await axios.get('http://localhost:5100/').then(response=>response.data);
}

export async function postAuthor(author:any){
    return await axios.post('http://localhost:5100/',author);
}