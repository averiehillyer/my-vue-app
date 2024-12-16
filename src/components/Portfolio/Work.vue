<script setup>

import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
import portfolio from "../../MOCK_DATA.js"
</script>

<template>
  <portfolio-template>
    <h1>Work</h1>
    <div class="images">
      <div v-for="(project, index) in portfolio.data" class="project">

        <router-link :to="{name: 'PortfolioDetails', params: { portfolioItemId: project.id }}">
          <img :src="'/src/assets/portfolio-items/' + project.image + '.png'"/>
        </router-link>

        <p>{{ project.name }}</p>

      </div>
    </div>

    <div class="arrow_button">
      <a href="">
        <img src="../svgs/arrow-up-lg-svgrepo-com.svg" alt=""/>
      </a>
    </div>
  </portfolio-template>
</template>

<style scoped>
h1 {
  padding: 1rem;
  font-size: 3rem;
  margin-bottom: -10px;
  text-align: end;
}

div.images {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  align-content: center;
  justify-content: center;


  .project {
    width: 100%;

    img {
      width: 100%;
    }
  }

  /*tablet and up*/
  @media screen and (width >= 680px) {
    flex-direction: row;
    flex-wrap: wrap;
    .project {
      width: 30%;
    }
  }
}

.arrow_button {
  display: flex;
  justify-content: end;
}

.arrow_button img {
  display: flex;
  width: 50px;
  margin: 15px;
}

div.images {
  @media screen and (width >= 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    .project {
      width: 20%;
    }
  }
}


</style>