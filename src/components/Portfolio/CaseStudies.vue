<script setup>
import portfolioPics from "../../MOCK_DATA.js";
import Card from "../cases/Card.vue";
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
// import MyWork from "../Templates/MyWork.vue";
</script>

<template>
  <portfolio-template>
    <div class="genesis">
    <h1>Case Studies</h1>
    <h3>Social Media</h3>
    <a href="../../assets/portfolio-items/Curlz-case-study.png"><img src="../../assets/portfolio-items/Curlz-case-study.png"/></a>
    <h2>Genesis Curlz Social Media</h2>
    <p>One of my creative passions surrounds beauty. Since 2022, I have been working under a Curl Specialist named Jesse
      Sadergaski with Genesis Curlz. Along with some hands on experience in the salon, I have served Genesis Curlz
      mainly digitally as the Director of Visual Communications. Under this title I have assisted in a variety of ways
      in order to attract her target market. I worked closely with the CEO to develop a brand identity and make curated
      Instagram posts pictured here that convey the intended message.</p>
    </div>

    <div class="mci">
    <h3>Website</h3>
    <a href="https://www.shipmci.com/"><img src="../../assets/portfolio-items/MCI-case-study.png"/></a>
    <h2>MCI Site Development</h2>
    <p>MCI - formerly known as Midwest Consolidators International - approached me inquiring about designing their
      website. I was given the opportunity to work with the team to identify what they wanted to be included on their
      website, and how they wanted their business to be represented. I used an existing brand identity and applied it to
      the site in new and innovative ways.</p>
    </div>

    <div class="saltair">
    <h3>Virtual Mock-up</h3>
    <a href="../../assets/portfolio-items/Saltair-case-study.png"><img src="../../assets/portfolio-items/Saltair-case-study.png"/></a>
    <h2>Saltair Redesign</h2>
    <p>Saltair is a beauty company that specializes in body wash, shampoo, conditioner, and other body care items. For a
      class project, I was assigned with redesigning existing packaging that I was able to find in the store. Instead of
      redesigning already weak packaging, I wanted to challenge myself by redesigning the packaging of something that I
      already enjoy. While I kept similar aesthetics in my new design, I decided to make the new version a bit more fun
      and eye-catching. The bright blue bottle is already fairly eye catching, but along with their other products the
      bottle tends to blend into the crowd. I wanted to create a fun mascot that targeted one of the leading ingredients
      in the product to plainly show consumers what they are purchasing. I took a similar approach on the back,
      highlighting key ingredients so that it is more easily digestible. </p>
    </div>

  </portfolio-template>
</template>

<style scoped>
img{
  height: 40%;
  width: 40%;
  //margin-left: -6px;
}

h1{
  font-size: 80px;
  text-align: center;
}

a{
  border: #305fc1;
}
h2{
  //margin-top: -20px;
}
/* Default styles */
h3 {
  font-size: 24px;
  text-align: left;
}

p{
  max-width: 500px;
  text-align: justify;
}

/*tablet and up*/
@media (min-width: 700px) {
  h3 {
    transform: rotate(90deg);
    text-align: right;
    white-space: nowrap;       /* Prevent text from wrapping */
    font-size: 20px;           /* Adjust size for readability */
  }
  h2{
    font-size: 20px;
  }
  .genesis{
    flex-wrap: wrap;

  }

  h1{
    text-align: end;
  }
}


</style>