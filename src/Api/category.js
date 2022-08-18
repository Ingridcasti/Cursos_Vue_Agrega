//import axios from 'axios'
import { API_URL } from "@/utils/consts";




export async function getcategoriesApi(){
    //const datos=[],
    try{
        const response =await fetch(`${API_URL}/api/category`);
        const result= await response.json();
        const category= await result.data;
        return category;
        //const { data }= await axios.get(`${API_URL}/api/category`);
       // console.log(data);
        

    }catch(error){
        console.log(error);
        return null;
    }
}