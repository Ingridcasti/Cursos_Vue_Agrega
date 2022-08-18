<template>
  <div class="galeria"> 
        <!---<h1>{{$store.state.title_frontend}}</h1>-->

        <h1>Cursos Desing</h1>
        <div class="linea"></div>
        <div class="contenedor-imagenes">
            <div class="imagen" v-for="curso in cursos_desing" :key="curso.id">
                <img :src="curso.url"  alt="">
                <div class="overlay" >
                <router-link to="/comentarios" @click="Comentarios_curso_all(curso.id)">
                <h2>
                    {{curso.nombre_curso}}
                </h2>
                </router-link>
                </div>
            </div>    
        </div>
    </div>
    <div>
        <pie/>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";

import{get_desing} from "@/Api/cursos_category"

export default {
   name:"frontend",

       setup(){
        let cursos_desing=ref(null);
        onMounted( async ()=>{
            const response =await get_desing();
            cursos_desing.value=response;
        })

        return{
            cursos_desing,
        }
    }
    
   
}

</script>

<style scoped>
@import url(../assets/estilos.css);
</style>


