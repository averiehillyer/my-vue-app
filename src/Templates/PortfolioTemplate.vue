<script setup>

import About from "../components/Portfolio/About.vue";
import Work from "../components/Portfolio/Work.vue";
import ContactMe from "../components/Portfolio/ContactMe.vue";
</script>

<template>
  <section class="portfolio-layout">
    <nav>
      <router-link :to="{name: 'PortfolioHome'}"><img src="/Users/averiehillyer/Desktop/my-vue-app/src/components/svgs/Hilly.svg"/></router-link>
      <div class="hamburger"><img src="/Users/averiehillyer/Desktop/my-vue-app/src/components/svgs/hamburger-menu-svgrepo-com.svg"></div>
      <div class="full-nav">
        <router-link :to="{name: 'About'}">about</router-link>
        <router-link :to="{name: 'PortfolioWork'}">work</router-link>
        <router-link :to="{name: 'CaseStudies'}">case studies</router-link>
        <router-link :to="{name: 'ContactMe'}">contact</router-link>
      </div>
    </nav>
    <section class="contents">
      <slot></slot>
    </section>
  </section>
</template>

<style>
section.portfolio-layout {
  /* Mobile first styles here */
  //max-width: 900px;
  //margin: 0 auto;

  nav {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    margin: 1rem;

    .hamburger{
      display: flex;
      width: 30%;
      justify-content: end;
    }

    img{
      width: 20%;
    }

    a{
      color: black;
      text-decoration: none;
      margin: 1rem;

      &.router-link-active{
        font-weight: bold;
        color: #305fc1;
      }

      &:hover {
        color: #9f9f9f;
      }
    }


    .full-nav {
      display: none;
    }
  }

  /* Tablet and up */
  @media screen and (width >= 714px) {
    nav {
      .full-nav {
        display: block;
      }

      .hamburger {
        display: none;
      }
    }
  }
}
</style>

