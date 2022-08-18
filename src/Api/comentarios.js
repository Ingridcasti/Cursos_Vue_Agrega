import {API_URL, COMENTARIOS } from "@/utils/consts";
//import axios from 'axios'

export function comentarios_api(id){

    const curso=id;
    localStorage.setItem(COMENTARIOS, curso)
}

export function get_comentarios(){
    const curso=localStorage.getItem(COMENTARIOS);

    if (!curso) return null;
    return curso;

}

export async function get_comentarios_api(){
    const id_curso=get_comentarios();

    if(id_curso=="") return null;

    try {
        const response =await fetch(`${API_URL}/api/comentarios/${id_curso}`);
        const result= await response.json();
        const comentarios= await result.data;
        return comentarios;
       

    } catch (error) {
        console.log(error);
        return null;
    }

}

export async function get_cursos_comentarios_api(){
    const id_curso=get_comentarios();

    if(id_curso=="") return null;

    try {
        const response =await fetch(`${API_URL}/api/cursos/${id_curso}`);
        const result= await response.json();
        const curso= await result.data;
        return curso;
       
    } catch (error) {
        console.log(error);
        return null;
    }

}

export async function create_comentario(comentario){
    const data=[
        {
            id_curso:get_comentarios(),
            comentario:comentario,
            fecha_creacion: new Date(),

        }
    ]
    try {
        //console.log(data);
       const url=`${API_URL}/api/comentarios`
       const params={
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
         body: data,
       }
       //https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/cross-origin-resource-sharing/
       console.log(params);
       const response= await fetch(url,params);
       console.log(response);
       const result=await response.json();
       return result;

       //const response = await axios.post(url, data);
      // return response;
       
   } catch (error) {
       console.log(error);
       return null;
   }
}