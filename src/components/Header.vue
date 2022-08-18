<template>
    
    <div>
         <header>
        <div class="l-container">
            <logo/>
            <div id="header_nav" >
                <ul class="nav">
                    <li><router-link to="/">Categorias</router-link>
                        <ul>
                            <li v-for="cate in category" :key="cate.id"><router-link :to="cate.name">{{cate.name}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
</header>
    </div>
</template>

<script>
import logo from '@/components/logo'
//import {ref, onMounted} from "vue";
//import{getcategoriesApi} from "@/Api/category"
import { API_URL } from "@/utils/consts";
import axios from 'axios'

export default {
    components:{
        logo
    },

    data(){

        return{
            category:[]
        }
    },

    methods: {
        async getcategory () {
            const response= await axios.get(`${API_URL}/api/category/`);
            this.category=response.data.data;
        }
    },
    created(){
        this.getcategory();
    }

    //setup(){
        //let category=ref(null);
        //onMounted( async ()=>{
           // const response =await getcategoriesApi();
           // category.value=response;
        //})

       // return{
        //    category,
       // }
    //}

}


</script>

<style scoped>
*{
    padding: 0px;
    margin:0px;
}

#header_nav{
    margin :auto;
    width: 500px;
    font-family:Arial, Helvetica, sans-serif ;
}
ul, ol{
    list-style: none;
}

.nav li a{
    background-color: #fff;
    color: black;
    text-decoration: none;
    padding: 10px 15px;
    display: flex;
}

.nav li a:hover {
    background-color: #f8f4f4;
    color: blue;
   
}

.nav > li{
    float: right;
}

.nav li ul{
    display:none;
    position: absolute;
    min-width: 140px;
    border: 1px solid #f8f4f4;
   
}

.nav li:hover> ul {
    display: block;  
}

.nav li ul li{
    position: relative;
}
.nav li ul li ul{
    right: -140px;
    top: 0px;
}

img{
  max-width: 100%;
}

.l-container{
  max-width: 1200px ;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border: 1px solid #f8f4f4;
  
}
.main-titulo{
  display: flex;
}
.main-header{
  height: 4rem;
  border-bottom: 1px solid var(--color_border);

}
.main-logo{
  height: 2rem;
  margin-top: 1rem;
}

</style>