import { API_URL } from "@/utils/consts";

export async function get_Frontend(){
try {
    const response =await fetch(`${API_URL}/api/cursosporcategoria/1`);

        const result= await response.json();
        const cursos= await result.data;
        return cursos;
    
} catch (error) {
    console.log(error);
    return null;

}
}


export async function get_backend(){
    try {
        const response =await fetch(`${API_URL}/api/cursosporcategoria/2`);
    
            const result= await response.json();
            const cursos= await result.data;
            return cursos;
        
    } catch (error) {
        console.log(error);
        return null;
    
    }
    }

    export async function get_desing(){
        try {
            const response =await fetch(`${API_URL}/api/cursosporcategoria/3`);
        
                const result= await response.json();
                const cursos= await result.data;
                return cursos;
            
        } catch (error) {
            console.log(error);
            return null;
        
        }
        }