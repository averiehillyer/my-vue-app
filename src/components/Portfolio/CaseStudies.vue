<script setup>
import portfolioPics from "../../MOCK_DATA.js";
import Card from "../cases/Card.vue";
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
// import MyWork from "../Templates/MyWork.vue";
</script>

<template>
  <portfolio-template>
      <h1>Case Studies</h1>

      <section class="cards">
        <card v-for="(work, index) in portfolioPics.data"
              :key="index" :work-info="work"/>
      </section>

  </portfolio-template>
</template>

<style scoped>
section.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
}
</style>