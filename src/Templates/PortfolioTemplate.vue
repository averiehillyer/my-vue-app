<script setup>

import About from "../components/Portfolio/About.vue";
import Work from "../components/Portfolio/Work.vue";
import ContactMe from "../components/Portfolio/ContactMe.vue";
</script>

<template>
  <section class="portfolio-layout">
    <nav>
      <router-link :to="{name: 'PortfolioHome'}">Logo</router-link>
      <div class="hamburger">hamburger</div>
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
  max-width: 900px;
  margin: 0 auto;

  * {
    //border: 1px solid black;
    margin: 1rem;
  }


  nav {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;

    a{
      color: black;
      text-decoration: none;

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
  @media screen and (width >= 700px) {
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