<script setup>

import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
import portfolio from "../../Portfolio.js"
</script>

<template>
  <portfolio-template>
    <h1>Work</h1>
    <div class="images">
      <img v-for="(item, index) in portfolio.items" :key="index"
           :src="item.image" alt=""/>
    </div>
  </portfolio-template>
</template>

<style scoped>
div.images {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;

  img {
    max-width: 20%;
  }
}
</style>