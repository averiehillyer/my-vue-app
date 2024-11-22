<script setup>
import portfolioPics from "../../MOCK_DATA.js";
import Card from "../cases/Card.vue";
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
// import MyWork from "../Templates/MyWork.vue";
</script>

<template>
  <portfolio-template>
      <h1>Case Studies</h1>
    <h2>Medium</h2>
    <img src="../../assets/Portfolio Items/Curlz Case Study.png"/>
    <p>this is my process for this project</p>
    <h2>Medium</h2>
    <img src="../../assets/Portfolio Items/MCI Case Study.png"/>
    <p>this is my process for this project</p>
    <h2>Medium</h2>
    <img src="../../assets/Portfolio Items/Saltait Case Study.png" height="1500" width="1500"/>
    <p>this is my process for this project</p>

<!--      <section class="cards">-->
<!--        <card v-for="(work, index) in portfolioPics.data"-->
<!--              :key="index" :work-info="work"/>-->
<!--      </section>-->

  </portfolio-template>
</template>

<style scoped>
img{
  height: 40%;
  width: 40%;
}
</style>