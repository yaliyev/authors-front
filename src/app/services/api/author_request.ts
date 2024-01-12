import axios from "axios";

export async function getAuthors(){
    return await axios.get('http://localhost:5100/').then(response=>response.data);
}
export async function getAuthorById(id:string){
    return await axios.get(`http://localhost:5100/${id}`).then(response=>response.data);
}

export async function postAuthor(author:any){
    return await axios.post('http://localhost:5100/',author);
}
export async function deleteAuthorApi(id:string){
    return await axios.delete(`http://localhost:5100/${id}`);
}