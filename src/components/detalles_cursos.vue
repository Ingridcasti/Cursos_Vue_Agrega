<template>
  <div class="section" id="features" >
  <curso/>
  <div class="comentario">
  <input  class="comentario_text" type="text" placeholder="añade un comentario" v-model="comentario" >
  <input type="button" value="Agregar Comentario" @click="add_comentario" />
  <div>
  <h2>Comentarios Anteriores</h2>
  </div>
  <br>
  <br>
  <div class="com_anteriores" v-for="comen in comentarios" :key="comen.id">
  <h3>{{comen.comentario}}</h3>
  </div>
  {{Cursos}}
  </div>
  </div>
</template>

<script>
import{get_comentarios_api,create_comentario} from "@/Api/comentarios"
import {onMounted, ref} from "vue";
import curso from "@/components/curso";


export default {

    components:{
       curso,
    },

       setup(){
        let comentarios=ref(null);
        let comentario=ref(null);
    
        onMounted( async ()=>{
            const response =await get_comentarios_api();
            comentarios.value=response;

        });

        const add_comentario= () =>{
           if (!comentario.value) return;
           create_comentario(comentario.value);
           comentario.value="";
        };

        return{
            comentarios,
            add_comentario,
            comentario
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