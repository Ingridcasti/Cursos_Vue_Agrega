<template>
  <div class="home">
        <body>
    <div id="main-container">
        <div class="banner">
            <div id="menu">
            </div>

            <main>
                
                    <h3>Cursos</h3><br>
                                   <br>

                    <h3>
                        Conoce la mejor aplicación para poder comentar cursos
                    </h3>
                    
                        <button>Empezar ahora</button>
                    
                

                
            </main>
        </div>
    </div>
</body>
       
  </div>
</template>

<script>
export default {
  name: '',
  components: {
   
  }
}

</script>

<style scoped>
.banner{
    background-image: url(../assets/img_banner/bradcam.png);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    color: white;
    height: 100vh;
}

.banner #menu{
    padding: 50px 0;
}

img{
    width: 350px;
}
p{
	color:white;
	font-family: Lato, sans-serif;
	font-size:30px;
}
h3{
	font-family: 'Lato', sans-serif;
	font-size: 30px;
	line-height: 1.5;
	padding-top:20px; 
	font-weight: normal;
	color:white;
   
}
/***************************/
#main-container .banner main{
    margin: 0 auto;
    width: 1200px;
}
#main-container .banner main div{
    display: inline-block;
    vertical-align: middle;
}

#main-container .banner main  h1{   
    font-size: 80px;

}

#main-container .banner main  p{   
    font-size: 24px;
    padding: 20px 0;
}

button{
    background: #24d9e6;
    border: 0;
    border-radius:  3px;
    color: white;
    cursor: pointer;
    font-size: 24px;
    padding: 20px 25px;
    margin: 40px 0;
}

button:hover{
    background: #14929b;
}

#main-container .banner main .image{   
    text-align: right;
    width: 700px;
}


/******************Responsive********/
@media screen and (max-width:480px){
   #main-container {
        width: 100%;
    } h3{
       width: 100% 
    }button{
        font-size:18px;
        display: block;
        flex-wrap: wrap;

    }
}

@media screen and (max-width:280px){
    #main-container{
        width: 100%;
    }
    h3{
       width: 100% 
    }button{
        font-size:18px;
        display: block;
        flex-wrap: wrap;
    }
}

@media screen and (max-width:700px){
    #main-container{
        width: 90%;
    }
    #main-container .image img,
    h3 {
        width: 40%;
    }button{
        font-size:18px;
        display: block;
        flex-wrap: wrap;
    }
}

@media screen and (max-width:450px){
    h3{
        font-size:22px;
    }
      .image img{
        width: 98%;
    }
      .image img{
        width: 80%;
    }
}


</style>

