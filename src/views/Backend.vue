<template>
  <div class="galeria"> 
        <!---<h1>{{$store.state.title_frontend}}</h1>-->

        <h1>Cursos Backend</h1>
        <div class="linea"></div>
        <div class="contenedor-imagenes">
            <div class="imagen" v-for="curso in cursos_backend" :key="curso.id">
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

import{get_backend} from "@/Api/cursos_category"
import{comentarios_api} from "@/Api/comentarios"

export default {
   name:"frontend",

       setup(){
           
        const Comentarios_curso_all=(id) =>{
        comentarios_api(id)
        }

        let cursos_backend=ref(null);
        onMounted( async ()=>{
            const response =await get_backend();
            cursos_backend.value=response;
        })

        return{
            cursos_backend,
            Comentarios_curso_all,
        }
    }
    
   
}

//import postService from "../service/todoservice.js";
//import {crudItemsMixin} from "../mixins/crudItems.js";

//export default {
 // name: "PostsList",
 // mixins: [crudItemsMixin],
 // created() {
 //   postService.get().then(items => (this.items = items.data));
 // },
//};

</script>

<style scoped>
@import url(../assets/estilos.css);
</style>


