<script setup>
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
</script>

<template>
  <portfolio-template>
    <h1>Contact Me</h1>
    <div class="contactpage">
      <div class="img-div">
        <img src="../../assets/Headshot.jpg"/>
      </div>
    <div class="contact-text">
      <p><strong>Phone Number:</strong> 763-242-7356</p>
      <p><strong>Email:</strong> averiehillyer@gmail.com</p>
      <p><strong>Instagram:</strong> @averiegraycee</p>
      <p>I appreciate you taking the time to browse through my creative endeavors. If you have any questions or comments,
      please feel free to reach out to me at any of the following. I am always looking to work on new projects and learn
      new skills.</p>
    </div>
    </div>


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

.contact-text{
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

h1{
  text-align: center;
  font-size: 4rem;
  margin-top: -20px;
}

p{
  text-align: center;
  max-width: 700px;
}

.contactpage{
  display: flex;
  flex-direction: column;
  margin-top: -30px;
}

/*tablet and up*/
@media screen and (width >= 714px) {
  p {
    text-align: left;
  }

  h1{
    font-size: 5rem;
  }

  .contactpage{
    display: flex;
    flex-direction: row;
  }

  img{
    width: 80%;
    max-width: 500px;
  }
}

/*- make text stay centered on mobile
- move to right after mobile
- left align text after mobile
- why is contact info indented
 */

</style>


