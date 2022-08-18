<template>
     <div class="layout layout-left">
                <div class="text">
                    <h3>{{nombre}}</h3>
                    <p>{{descripcion}}</p>
                </div>
                <div class="image">
                    <img :src="url" alt="">
                </div>
            </div>
</template>
<script>
import{get_cursos_comentarios_api} from "@/Api/comentarios"
import {onMounted, ref} from "vue";

export default {
    components:{
    },
    
    setup(){
        let nombre=ref(null);
        let descripcion=ref(null);
        let url=ref(null);

        onMounted( async ()=>{
            const response_curso =await get_cursos_comentarios_api();
            nombre.value=response_curso.nombre_curso;
            descripcion.value=response_curso.descripcion_curso;
            url.value=response_curso.url;
           
        });

        return{
            nombre,
            descripcion,
            url,

        }
    }

}
</script>

<style scoped>

.layout{
    width: 1280px;
    margin: 2px auto;
  
}

.section .layout div{
    display: inline-block;
    vertical-align: middle;
}

.section .layout h3{
    font-size: 48px;
    padding: 25px 0;
}

.section .layout p{
    padding: 25px 0;
    line-height: 32px;
}

.section .layout-left .text{
    width: 500px;
}

.section .layout-left .image{
    width: 770px;
    text-align: center;
}

.comentario_text{
  width: 50%;
  margin: 5px 0;
  padding: 5px;
}

img{
    width: 300px;
    height: 300px;
}

@media screen  and (max-width:1100px){
    .comentario_text,
    .section .layout-left .image,
    .section .layout-left .text,
    .section .layout h3,
    .section .layout p{
        display: block;
        flex-wrap: wrap;
    }
 }
 
</style>