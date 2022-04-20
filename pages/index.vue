<template>
  <div>
    <section class="idea-section">
      <div class="text">
        <div class="header-content">
          <h1>We convert your ideas into live successful projects!</h1>
          <p>
            Every step done by our team has the ability to shape a new tomorrow!
            We believe that trust should be the foundation of every cooperation.
            We believe in creating something today have a lasting impact on the
            future.
          </p>
          <a href="#our-services"><button>Check Our Services</button></a>
        </div>
      </div>
      <div
        class="img-head"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="2000"
      >
        <img src="~/assets/images/head.svg" alt="" />
      </div>
    </section>
    <WProcess />
    <client-only>
      <no-ssr>
        <Particles v-if="particles"><Advantages /></Particles>
      </no-ssr>
    </client-only>
    <Services />
    <Portfolio />
    <Partners />
    <Testimonials />
    <Team />
    <ContactUs />
  </div>
</template>

<script>
import WProcess from "~/components/WProcess.vue";
import Particles from "~/components/Particles.vue";
import Advantages from "~/components/Advantages.vue";
import Services from "~/components/Services.vue";
import Portfolio from "~/components/Portfolio.vue";
import Partners from "~/components/Partners.vue";
import Testimonials from "~/components/Testimonials.vue";
import Team from "~/components/Team.vue";
import ContactUs from "~/components/ContactUs.vue";
import aosMixin from "~/mixin/aosMixin";
export default {
  components: {
    WProcess,
    Particles,
    Advantages,
    Services,
    Portfolio,
    Partners,
    Testimonials,
    Team,
    ContactUs,
  },
  mixins: [aosMixin],
  data() {
    return {
      particles: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.particles = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.idea-section {
  display: flex;
  @media screen and (max-width: $xs) {
    display: block;
  }
  .text {
    width: 50%;
    display: flex;
    @media screen and (max-width: $xs) {
      width: 100%;
    }
    .header-content {
      width: 75.3%;
      margin: auto;
      @media screen and (max-width: $xl) {
        width: 80%;
      }
      @media screen and (max-width: $xs) {
        width: 77%;
        margin-top: 42px;
      }
    }
    h1 {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 0.07em;
      @media screen and (max-width: $xxl) {
        font-size: 32px;
      }
      @media screen and (max-width: $xl) {
        font-size: 25px;
        line-height: 38px;
        letter-spacing: 0.03em;
      }
      @media screen and (max-width: $l) {
        font-size: 23px;
        line-height: 28px;
      }
      @media screen and (max-width: $m) {
        font-size: 21px;
        line-height: 30px;
      }
      @media screen and (max-width: $xs) {
        font-size: 18px;
        line-height: 28px;
        text-align: center;
      }
    }
    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      margin: 16px 0 32px;
      letter-spacing: 0.15em;
      @media screen and (max-width: $xl) {
        font-size: 16px;
        letter-spacing: 0.12em;
      }
      @media screen and (max-width: $l) {
        font-size: 14px;
        line-height: 25px;
      }
      @media screen and (max-width: $m) {
        font-size: 10px;
        letter-spacing: 0.11em;
        line-height: 19px;
      }
      @media screen and (max-width: $xs) {
        font-size: 14px;
        line-height: 22px;
      }
    }
    button {
      padding: 16px 24px;
      box-shadow: 0px 6px 10px rgba(64, 145, 108, 0.15);
      border-radius: 4px;
      align-items: center;
      text-align: center;
      color: #ffffff;
      border: unset;
      font-size: 18px;
      background: linear-gradient(274.64deg, $dark-green 0%, #52b788 100%);
      &:hover {
        background: #52b788;
      }
      @media screen and (max-width: $xl) {
        font-size: 16px;
        padding: 8px 13px;
      }
      @media screen and (max-width: $l) {
        font-size: 14px;
        padding: 3px 7px;
      }
      @media screen and (max-width: $l) {
        font-size: 11px;
        padding: 3px 7px;
      }
      @media screen and (max-width: $xs) {
        font-size: 16px;
        padding: 14px 11px;
        margin: auto;
        display: block;
      }
    }
  }
  .img-head {
    margin-top: -60px;
    width: 50%;
    @media screen and (max-width: $xs) {
      width: 100%;
      margin-top: 0;
    }
    img {
      width: 100%;
    }
  }
}
</style>
