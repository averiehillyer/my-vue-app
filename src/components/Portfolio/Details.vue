<script setup>
import {onMounted} from "vue";
import portfolioData from '../../MOCK_DATA.js';
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();
const portfolioItemId = route.params.portfolioItemId;
const item = portfolioData.data.filter(item => item.id === portfolioItemId)[0]

onMounted(() => {
  if (!item) {
    router.push({
      name: 'PortfolioHome'
    })
  }
})
</script>

<template>
  <PortfolioTemplate v-if="item">
    Testing Here
    Testing here
    <p>Testing here</p>
    <h1>{{ item.name }} {{ item.medium }}</h1>
    <p>Class made in: {{ item.class }}</p>
    <p> Year: {{ item.year }} </p>
    <img :src="'../../../src/assets/portfolio-items/' + item.image + '.png'" :alt="item.project_name"/>
  </PortfolioTemplate>
</template>

<style scoped>
img {
  width: 40%;
  height: auto;
}

</style>