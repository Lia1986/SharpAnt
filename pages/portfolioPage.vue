<template>
  <div>
    <section class="seo-section">
      <div class="text">
        <div class="header-content">
          <h1>Portfolio</h1>
          <p>
            It is our pleasure to serve our worldwide clients to produce high
            quality websites and web apps. We have acquired clients across the
            globe of our reputation by providing best web development. Our
            websites are fast, secure and scalable. We are grateful for the
            faith and support of our clients in our services. SharpAnt LLC
            values all clients and takes pride in providing high quality
            services.
          </p>
          <p>
            We value our clients, understand their business, and pledge our
            commitment to contribute to their success and satisfaction.
          </p>
          <p>
            Below are the references of some of our work, which makes you
            understand our capabilities and delivery process. Contact our team
            for advanced technology and crafted strategies to create conversion
            friendly business solutions for your business needs and to create an
            impactful digital presence.
          </p>
          <p>
            We analyze and deliver each project with technical finesse,
            innovative, creative, and precise execution tailored to the specific
            needs of your business.
          </p>

          <button @click="$router.push('/contacts')">
            Consult With Our Expert
          </button>
        </div>
      </div>
      <div
        class="img-head"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="2000"
      >
        <img src="~/assets/images/portfolio-header.png" alt="" />
      </div>
    </section>
    <Portfolio />
  </div>
</template>

<script>
import Portfolio from "~/components/Portfolio.vue";
export default {
  head: {
    title: "Portfolio",
  },
  components: { Portfolio },
};
</script>

<style lang="scss" scoped>
.seo-section {
  display: flex;
  padding: 98px 0 147px 0;
  width: 87%;
  margin: auto;
  overflow: hidden;
  @media screen and (max-width: $s) {
    padding: 23px 0 52px 0;
  }
  @media screen and (max-width: $xs) {
    display: block;
  }
  .text {
    width: 66.3%;
    display: flex;
    @media screen and (max-width: $xs) {
      width: 100%;
    }
    .header-content {
      width: 93.1%;
      @media screen and (max-width: $xl) {
        width: 80%;
      }
      @media screen and (max-width: $m) {
        width: 90%;
      }
      @media screen and (max-width: $xs) {
        width: 100%;
        margin-top: 42px;
      }
    }
    h1 {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 0.07em;
      margin-bottom: 16px;
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
    p,
    ul {
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.15em;
      @media screen and (max-width: $xxl) {
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
    ul {
      padding-left: 17px;
      li {
        list-style-type: disc;
      }
    }
    button {
      margin-top: 32px;
      padding: 16px 24px;
      box-shadow: 0px 6px 10px rgba(64, 145, 108, 0.15);
      border-radius: 4px;
      align-items: center;
      text-align: center;
      color: #ffffff;
      border: unset;
      font-size: 18px;
      width: 329px;
      height: 54px;
      background: linear-gradient(274.64deg, $dark-green 0%, #52b788 100%);
      @media screen and (max-width: $xl) {
        font-size: 16px;
        width: 245px;
        height: 43px;
        padding: 8px 13px;
      }
      @media screen and (max-width: $l) {
        font-size: 14px;
        width: 216px;
        height: 39px;
        padding: 3px 7px;
      }
      @media screen and (max-width: $m) {
        font-size: 11px;
        width: 162px;
        height: 28px;
        padding: 3px 7px;
      }
      @media screen and (max-width: $xs) {
        font-size: 16px;
        width: 329px;
        height: 54px;
        padding: 16px 16px;
        margin: 16px auto;
        display: block;
      }
    }
  }
  .img-head {
    width: 41.9%;
    text-align: right;
    @media screen and (max-width: $xs) {
      width: 100%;
      margin-top: 8px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
