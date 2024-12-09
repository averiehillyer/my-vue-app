<script setup>

import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
</script>

<template>
  <portfolio-template>
    <img src="../../assets/Header.jpg"/>
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
        <div class="button-links">
          <router-link :to="{name: 'PortfolioWork'}">
            <img class="img-button" src="../../assets/seetheart.png"/>
          </router-link>

          <router-link :to="{name: 'About'}">
            <img class="img-button" src="../../assets/aboutme.png"/>
          </router-link>
        </div>
      </div>
    </div>
  </portfolio-template>

</template>

<style scoped>
img {
  //height: 40%;
  width: 100%;
}

.img-button {
  height: 30%;
  width: 30%;
}

p {
  text-align: justify;
  max-width: 500px;
}

a {
  border: black;
}

div.button-links {
  display: flex; /* Enables Flexbox */
  flex-direction: column; /* Stacks the items vertically */
  align-items: center; /* Centers the items horizontally */
  justify-content: center; /* Centers the images vertically */
}

div.content {
  display: flex;
  flex-direction: column;
}

div.infoside {
  border: 10px solid red;
  max-width: 500px;
}

div.buttonside {
  border: 10px solid green;
  max-width: 500px;
}

/*tablet and up*/
@media screen and (width >= 550px) {
  .content{
    display: flex;
    flex-direction: row;
  }
}

/*can't figure out how to get buttons to sit on right side of info
- make buttons centered
-over image for desktop? change image?
- text over image*/

</style>