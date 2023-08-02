import axios from 'axios';

const api = "https://filesharingbackend-xirw.onrender.com"
console.log(api)
export const uploadFile = async (data) => {
    try{
        let resp = await axios.post(`${api}/upload` , data)
        return resp.data;
    }
    catch (error){
        console.error('Something went wrong!!!' , error.message)
    }
}