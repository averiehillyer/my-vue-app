<script setup>
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
</script>

<template>
  <portfolio-template>
    <img src="../../assets/AboutPageHome.png"/>
    <h1>About</h1>
    <div class="aboutcontent">
      <div class="about-text">
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
      </div>
      <div class="myworkbutton">
    <router-link :to="{name: 'PortfolioWork'}"><img class="img-button" src="../../assets/seemyart.png"/></router-link>
      </div>
    </div>
  </portfolio-template>
    </template>

    <style scoped>
    img{
      height: auto;
      width: 100%;
    }

    h1{
      padding-left: 1rem;
      color: white;
    }

    .aboutcontent{
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }

    p{
      text-align: end;
    }

    a{
      border: black;
    }

    h2{
      text-align: end;
    }

    .myworkbutton{
      display: flex;
      justify-content: center;
      align-content: center;
      width: 100%;
    }

    .myworkbutton img{
      width: 12rem;
    }

    @media screen and (width <= 700px) {
      h1{
        transform: rotate(270deg);
        margin-left: -20px;
        text-align: end;
        width: 100px;
        margin-top: -80px;
        font-size: 3rem;
        color: white;
      }
      img{
        max-width: 100%;
      }

    }


      @media screen and (width >= 701px) {
      p{
        text-align: justify;
      }
      h2{
        text-align: left;
      }
      h1{
        font-size: 5rem;
        transform: rotate(0deg);
        text-align: end;
        width: 100px;
        margin-top: -90px;
      }
      .aboutcontent{
        margin-top: -100px;
      }
    }

    @media screen and (width >= 850px) {
      .aboutcontent{
        display: flex;
        flex-direction: row;
      }
      .myworkbutton{
        display: flex;
        padding: 20px;
        align-items: end;
        justify-content: end;
      }
      h1{
        font-size: 7rem;
        margin-top: -150px;
      }
    }


    </style>