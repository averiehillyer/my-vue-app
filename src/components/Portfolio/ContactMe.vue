<script setup>
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
</script>

<template>
  <portfolio-template>
        <h1>Contact Me</h1>
    <div class="img-div">
      <img src="../../assets/Headshot.jpg"  alt=""/>
    </div>
        <p>I appreciate you taking the time to browse through my creative endeavors. If you have any questions or comments,
          please feel free to reach out to me at any of the following. I am always looking to work on new projects and learn
          new skills.</p>
        <a><strong>Phone Number:</strong>763-242-7356</a>
        <a href="mailto:averiehillyer@gmail.com"><strong>Email:</strong>averiehillyer@gmail.com</a>
        <a><strong>Instagram:</strong> @averiegraycee</a>


  </portfolio-template>

</template>

<style scoped>


img{
  width: 30%;
}

.img-div{
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}

p{
  text-align: center;
}

</style>


