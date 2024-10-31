<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import Card from "./cases/Card.vue";
</script>

<template>
  <primary-template>
  <h1>Welcome to my site!</h1>

    <p>Here's some of my work:</p>

    <div class="cards">
      <Card
        last-name="Genius"
        first-name="Averie"
        highest-edu-attained="Phd"
        nationality="gb"
        />
      <Card
        last-name="Hillyer"
        first-name="Elyse"
        dob="June 2 2003"
        />
    </div>
  </primary-template>

</template>

<style scoped>
div.cards {
  display: flex;
  gap: 1rem;
}

</style>