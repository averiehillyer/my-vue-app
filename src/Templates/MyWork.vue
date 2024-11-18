<script setup>
import portfolioPics from '../MOCK_DATA.js'
import Card from "../components/cases/Card.vue"
import PrimaryTemplate from "./wrongtemplate.vue";

</script>

<template>
  <primary-template>
    <h1>My Work</h1>

    <p v-for="(work, index) in portfolioPics.data" :key="index">
      {portfolioPics.project_name}

<!--      <Card :data="project" />-->
    </p>
  </primary-template>

</template>

<style scoped>

</style>