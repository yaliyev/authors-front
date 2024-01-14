import axios from "axios";

export async function getBooks(){
    return await axios.get('http://localhost:5100/books/getAll').then(response=>response.data);
}
export async function getBookById(id:string){
    return await axios.get(`http://localhost:5100/books/${id}`).then(response=>response.data);
}

export async function postBook(author:any){
    return await axios.post('http://localhost:5100/books/post',author);
}



export async function deleteBookApi(id:string){
    return await axios.delete(`http://localhost:5100/books/${id}`);
}