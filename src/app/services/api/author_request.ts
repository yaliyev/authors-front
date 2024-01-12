import axios from "axios";


export async function postAuthor(author:any){
    return axios.post('http://localhost:5100/',author);
}