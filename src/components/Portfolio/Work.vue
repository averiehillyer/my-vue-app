<script setup>

import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
import portfolio from "../../Portfolio.js"
</script>

<template>
  <portfolio-template>
    <h1>Work</h1>
    <div class="images">
      <img src="../../assets/Portfolio Items/AmIAliveListing.png"/>
      <img src="../../assets/Portfolio Items/Channel Orange Listing.png"/>
      <img src="../../assets/Portfolio Items/Daniel Caesar Listing.png"/>
      <img src="../../assets/Portfolio Items/Faiyaz Listing.png"/>
      <img src="../../assets/Portfolio Items/Frank Ocean Listing.png"/>
      <img src="../../assets/Portfolio Items/Kill Bill Listing.png"/>
      <img src="../../assets/Portfolio Items/Nostalgia,Ultra.Listing.png"/>
      <img src="../../assets/Portfolio Items/Orange SiR.png">
      <img src="../../assets/Portfolio Items/SZA Listing.png"/>
      <img src="../../assets/Portfolio Items/What You Heard Listing.png"/>
      <img src="../../assets/Portfolio Items/Spread 1.png"/>
      <img src="../../assets/Portfolio Items/Spread 2.png"/>
      <img src="../../assets/Portfolio Items/Spread 3.png"/>
      <img src="../../assets/Portfolio Items/Spread 4.png"/>
      <img src="../../assets/Portfolio Items/Spread 5.png"/>
      <img src="../../assets/Portfolio Items/Spread 6.png"/>
      <img src="../../assets/Portfolio Items/Spread 7.png"/>
      <img src="../../assets/Portfolio Items/Spread 8.png"/>
      <img src="../../assets/Portfolio Items/Spread 9.png"/>
      <img src="../../assets/Portfolio Items/Spread 10.png"/>
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