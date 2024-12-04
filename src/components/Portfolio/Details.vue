<script setup>
import {onMounted} from "vue";
import portfolioData from '../../MOCK_DATA.js'
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
  <pre>{{ item }}</pre>
  <img :src="'../../../src/assets/portfolio-items/' + item.image + '.png'" :alt="item.project_name"/>
</template>

<style scoped>

</style>