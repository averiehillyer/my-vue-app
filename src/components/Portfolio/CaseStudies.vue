<script setup>
import portfolioPics from "../../MOCK_DATA.js";
import Card from "../cases/Card.vue";
import PortfolioTemplate from "../../Templates/PortfolioTemplate.vue";
// import MyWork from "../Templates/MyWork.vue";
</script>

<template>
  <portfolio-template>
    <h1>Case Studies</h1>
    <div class="genesis">
    <h3>Social Media</h3>
    <a href="https://www.instagram.com/genesiscurlz/"><img src="../../assets/portfolio-items/Curlz-case-study.png"/></a>
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
    <a href="https://saltair.com/"><img src="../../assets/portfolio-items/Saltair-case-study.png"/></a>
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

    <div class="genesislarge">
      <h3>Social Media</h3>
      <div class="genesislargerow">
      <a href="https://www.instagram.com/genesiscurlz/"><img src="../../assets/portfolio-items/Curlz-case-study.png"/></a>
        <div class="infoside">
      <h2>Genesis Curlz Social Media</h2>
      <p>One of my creative passions surrounds beauty. Since 2022, I have been working under a Curl Specialist named Jesse
        Sadergaski with Genesis Curlz. Along with some hands on experience in the salon, I have served Genesis Curlz
        mainly digitally as the Director of Visual Communications. Under this title I have assisted in a variety of ways
        in order to attract her target market. I worked closely with the CEO to develop a brand identity and make curated
        Instagram posts pictured here that convey the intended message.</p>
        </div>
      </div>
    </div>
    <div class="mcilarge">
      <h3>Web Design</h3>
      <div class="mcilargerow">
        <div class="infoside">
          <h2>MCI Site Development</h2>
          <p>MCI - formerly known as Midwest Consolidators International - approached me inquiring about designing their
            website. I was given the opportunity to work with the team to identify what they wanted to be included on their
            website, and how they wanted their business to be represented. I used an existing brand identity and applied it to
            the site in new and innovative ways.</p>
        </div>
        <a href="https://www.shipmci.com/"><img src="../../assets/portfolio-items/MCI-case-study.png"/></a>
      </div>
    </div>

    <div class="saltairlarge">
      <h3>Virtual Mock-up</h3>
      <div class="saltairlargerow">
        <a href="https://saltair.com/"><img src="../../assets/portfolio-items/Saltair-case-study.png"/></a>
        <div class="infoside">
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
      </div>
    </div>

  </portfolio-template>
</template>

<style scoped>
img{
  height: 40%;
  width: 40%;
  padding: 1rem;
}

h1{
  font-size: 3rem;
  text-align: center;
}

h2{
  padding-left: 1rem;
  padding-right: 1rem;
}

h3 {
  font-size: 24px;
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
}

p{
  max-width: 100%;
  text-align: left;
  padding: 1rem;
}

.genesis{
  display: flex;
  align-content: end;
  flex-direction: column;

  p, h2, h3, a{
    text-align: end;
    margin-top: -5px
  }
  h3 {
    transform: rotate(270deg);
    text-align: left;
    margin-right: -30px;
  }
  p{
    margin-top: -20px;
  }
  margin-top: -80px;
}

.mci{
  display: flex;
  align-content: flex-start;
  flex-direction: column;

  p, h2, h3, a{
    text-align: left;
    //margin-top: -5px
  }
  h3 {
    transform: rotate(90deg);
    text-align: right;
    margin-left: -20px;
  }
  p{
    margin-top: -20px;
  }

  h2, h3{
    margin-top: -5px;
  }
  margin-top: -30px;
}

.saltair{
  display: flex;
  align-content: end;
  flex-direction: column;

  p, h2, h3, a{
    text-align: end;
    margin-top: -5px;
  }
  h3 {
    transform: rotate(270deg);
    text-align: left;
    margin-right: -20px;
  }
  p{
    margin-top: -20px;
  }
  margin-top: -30px;
}
.genesislarge, .mcilarge, .saltairlarge {
  display: none;
}

/*tablet and up*/
@media (min-width: 714px) {
  .genesis, .mci, .saltair {
    display: none;
  }
  .genesislarge, .mcilarge, .saltairlarge {
    display: block;
  }
  .genesislargerow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -20px;

    a img{
      width: 100%;
      height: auto;
      max-width: 400px;
    }

    .infoside{
      max-width: 500px;

      p{
        margin-top: -20px;
      }
    }
  }
  .saltairlargerow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -20px;

    a img{
      width: 95%;
      height: auto;
      max-width: 400px;
    }

    .infoside{
      max-width: 500px;

      p{
        margin-top: -20px;
      }
    }
  }

  .mcilarge{
    h3{
      text-align: end;
    }
  }

  .mcilargerow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -20px;

    a img{
      width: 90%;
      height: auto;
      max-width: 400px;
    }

    .infoside{
      max-width: 500px;

      h2{
        text-align: end;
      }

      p{
        margin-top: -20px;
        text-align: end;
      }
    }
  }
}

@media (min-width: 900px){
  .genesislargerow{
    a img{
      max-width: 1000px;
      height: auto;
      padding: 0px;
    }
    p{
      font-size: 1.25rem;
    }
  }
  .mcilargerow{
    margin-right: -20px;
    a img{
      max-width: 1000px;
      height: auto;
    }
    p{
      font-size: 1.25rem;
    }
  }
  .saltairlargerow{
    a img{
      max-width: 1000px;
      height: auto;
      padding: 0px;
    }
    p{
      font-size: 1.25rem;
    }
  }

}


</style>