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
    <h1>Details</h1>
    <div class="detailstemplate">
      <img :src="'../../../src/assets/portfolio-items/' + item.image + '.png'" :alt="item.project_name"/>
      <div class="detailsinfo">
      <h2>{{ item.name }}</h2>
        <h3>{{ item.medium }}</h3>
      <p>Class made in: {{ item.class }}</p>
      <p> Year: {{ item.year }} </p>
        <p>{{ item.description}}</p>
      </div>
    </div>
        <div class="backbutton">
        <router-link :to="{name: 'PortfolioWork'}">Back to Projects</router-link>
        </div>
  </PortfolioTemplate>
</template>

<style scoped>
img {
  width: 60%;
  height: auto;
}

h1{
  font-size: 3rem;
  text-align: end;
  padding-right: 1rem;
  margin-top: 0px;
}

.detailstemplate{
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2{
  font-weight: bold;
}

h2, h3, p{
  text-align: center;
  margin: 6px;
}

  a {
    font-weight: bold;
    text-decoration: none;
    margin: 1.4rem;
    color: #9f9f9f;

    &:hover {
      color: black;
    }
  }

  .backbutton{
    display: flex;
    justify-content: center;
  }

@media screen and (width >= 714px) {
  h1{
    font-size: 4rem;
  }
  .detailstemplate{
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
    margin-top: -40px;
    align-items: self-start;

    img{
      max-width: 500px;
    }

    h2{
      font-size: 1.2rem;
    }

    p{
      font-size: .9rem;
    }

    h2, h3, p{
      text-align: left;
      padding-left: 1rem;
    }

    .detailsinfo{
      display: flex;
      flex-direction: column;
      justify-content: left;
    }
  }
  .backbutton{
    justify-content: end;
    margin-top: -40px;
  }
}

</style>