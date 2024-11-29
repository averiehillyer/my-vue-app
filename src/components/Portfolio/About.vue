<script setup>

import PrimaryTemplate from "../../Templates/wrongtemplate.vue";
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
</script>

<template>
  <portfolio-template>
    <img src="../../assets/Genesis Curlz-74_websize.jpg"/>
    <h1>About</h1>
        <h2>Hi, I'm Averie Hillyer.</h2>
        <p>I am a current student at the University of Minnesota Twin Cities, studying Graphic Design and Interdisciplinary
          Design which allows me to explore various design mediums. Starting out as a Journalism major, I have always had an
          appreciation for the work that goes into creating mass media whether that be websites, blogs, or even magazines.
          Although the more investigative and technical aspect of journalism excited me, I realized that my true passion
          lies within creating visually interesting designs that convey whatever message you want.
        </p>
        <p>While I continue to pursue my studies in design, I am maintaining my own creative endeavors through designing
          posters, clothing, and social media posts for various clients. When asked what I want to do with a degree in
          Graphic Design, hundreds of possibilities flood my head which excites me. The design industry is such a broad
          spectrum that I have no idea where my journey will take me.
        </p>
        <p>I can say that currently my two artistic passions revolve around the music industry and the beauty industry. I
          love how much music can impact an individual and I also love how much beauty can impact an individual. I want to
          create things that can evoke the same emotions that those do.
        </p>
    <router-link :to="{name: 'PortfolioWork'}"><img class="img-button" src="../../assets/seemyart.png"/></router-link>
  </portfolio-template>
    </template>

    <style scoped>
    img{
      height: 96%;
      width: 96%;
    }

    .img-button{
      height: 20%;
      width: 20%;
    }

    a{
      border: black;
    }

    </style>