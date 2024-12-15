<script setup>

import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
</script>

<template>
  <portfolio-template>
    <img src="../../assets/Header.jpg"/>
    <h2>Welcome</h2>
    <h1>Hi, I'm Averie.</h1>
    <div class="content">


      <div class="infoside">
        <p>My name is Averie Hillyer and here you will find a website that highlights some of my favorite pieces of work
          that I have created through my studies at the University of Minnesota Twin Cities as a Graphic Designer, in my
          free-time, and even some freelance work as well.</p>
        <p>This site has an extensive bio on myself that discusses my education path, my career interests, as well as
          some of
          my professional experience that I currently have, and some professional endeavors that I would love to
          explore.</p>
      </div>

      <div class="buttonside">
          <router-link :to="{name: 'PortfolioWork'}">
            <img class="img-button" src="../../assets/seetheart.png"/>
          </router-link>

          <router-link :to="{name: 'About'}">
            <img class="img-button" src="../../assets/aboutme.png"/>
          </router-link>
      </div>
    </div>
  </portfolio-template>

</template>

<style scoped>
img {
  //height: 40%;
  width: 100%;
}

h2{
  font-size: 4rem;
  padding: 1rem;
  margin-top: -100px;
  color: white;
  margin-bottom: -10px;
}

h1{
  font-size: 2rem;
  text-align: end;
  padding: 1rem;
  margin-top: -10px;
}

.img-button {
  height: 30%;
  width: 30%;
}

p {
  text-align: justify;
}

a {
  //border: 10px solid black;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (width <= 550px) {
    flex-direction: row;
  }



}
div.buttonside{
  display: flex; /* Enables Flexbox */
  flex-direction: column; /* Stacks the items vertically */
  align-content: center; /* Centers the items horizontally */
  justify-content: center; /* Centers the images vertically */
  align-items: center;
  //border: 10px solid purple;

  a{
    width: 100%;
    //border: 1px solid red;
    text-align: center;

    img{
      max-width: 100%;
      height: 100%;

    }
  }

}

div.content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

div.infoside {
  margin-top: -50px;
}

h2{
  font-size: 6rem;
  padding: 2rem;
  margin-top: -140px;
  color: white;
  margin-bottom: -10px;
}

/*tablet and up*/
@media screen and (width >= 550px) {

  .infoside{
    width: 500px;
  }
  .content{
    display: flex;
    flex-direction: row;
  }
}

@media screen and (width>=700px){
  div.content {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }
  h2{
    text-align: end;
  }
}
@media screen and (width>=900px){
  div.content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  h1{
    text-align: center;
    margin-left: -310px;
  }

  h2{
    text-align: center;
    font-size: 9rem;
    margin-top: -300px;
    padding-bottom: 100px;
  }
}


</style>