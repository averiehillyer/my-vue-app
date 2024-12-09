<script setup>

import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
import portfolio from "../../Portfolio.js"
</script>

<template>
  <portfolio-template>
    <h1>Work</h1>
    <div class="images">
      <img src="../../assets/portfolio-items/AmIAliveListing.png"/>
      <img src="../../assets/portfolio-items/channel-orange-listing.png"/>
      <img src="../../assets/portfolio-items/Daniel-caesar-listing.png"/>
      <img src="../../assets/portfolio-items/Faiyaz-listing.png"/>
      <img src="../../assets/portfolio-items/Frank-ocean-listing.png"/>
      <img src="../../assets/portfolio-items/Kill-bill-listing.png"/>
      <img src="../../assets/portfolio-items/Nostalgia-ultra-listing.png"/>
      <img src="../../assets/portfolio-items/Orange-SiR.png">
      <img src="../../assets/portfolio-items/SZA-listing.png"/>
      <img src="../../assets/portfolio-items/What-you-heard-listing.png"/>
      <img src="../../assets/portfolio-items/Spread-1.png"/>
      <img src="../../assets/portfolio-items/Spread-2.png"/>
      <img src="../../assets/portfolio-items/Spread-3.png"/>
      <img src="../../assets/portfolio-items/Spread-4.png"/>
      <img src="../../assets/portfolio-items/Spread-5.png"/>
      <img src="../../assets/portfolio-items/Spread-6.png"/>
      <img src="../../assets/portfolio-items/Spread-7.png"/>
      <img src="../../assets/portfolio-items/Spread-8.png"/>
      <img src="../../assets/portfolio-items/Spread-9.png"/>
      <img src="../../assets/portfolio-items/Spread-10.png"/>
    </div>
  </portfolio-template>
</template>

<style scoped>
div.images {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;

  img {
    max-width: 40%;
  }

/*tablet and up*/

  @media screen and (width >= 700px) {
    img {
      max-width: 20%;
    }
  }
}
</style>