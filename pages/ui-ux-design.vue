<template>
  <div>
    <section class="design-section">
      <div class="text">
        <div class="header-content">
          <h1>We convert your ideas into live successful projects!</h1>
          <p>
            Have an idea in your mind of your future web product? Want to build
            your product with a team that offers a clear design process, always
            meets deadlines? Our experienced UI and UX designers can turn your
            most complex project ideas into nice, user-friendly design with
            their high sense of design and help you build an engaging product
            easily and quickly. Our team is committed to provide you with
            quality work by making a design that is highly creative and accurate
            as per your business needs. Having years of expertise in diverse
            sectors, enables us to offer unique designs for any sphere that your
            business might need. Our UI/UX designers actually produce the
            outputs of a UX design process during its various stages. It starts
            from learning about the audience, identifying the users’ needs,
            generating ideas for design,turning ideas into concrete examples and
            evaluating the design.
          </p>
          <button @click="$router.push('/contacts')">
            Consult With Our Experts
          </button>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="2000"
        class="img-head"
      >
        <img src="~/assets/images/computer.png" alt="computer" />
        <!-- <img
          src="~/assets/images/svg/Brush.svg"
          alt="Brush"
          class="brush"
          :class="{ 'active-svg': activeSvg }"
        /> -->
      </div>
    </section>
    <client-only>
      <no-ssr>
        <Particles v-if="particles">
          <section class="design-services">
            <div>
              <h2>UI/UX Design Services</h2>
              <hr />
              <div class="services">
                <div v-for="item in designServices" :key="item.id" class="item">
                  <div class="image">
                    <img
                      :src="require(`~/assets/images/${item.image}`)"
                      alt="Best"
                    />
                  </div>
                  <div class="title">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.pos }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Particles>
      </no-ssr>
    </client-only>

    <section class="design-methodology">
      <div class="h2">
        <h2>Our Design Methodology</h2>
        <img src="~/assets/images/h2-img.png" alt="" />
      </div>
      <div class="design-process">
        <img src="~/assets/images/design-methodology.png" alt="" />
      </div>
    </section>
    <Portfolio />
    <section class="tools-section">
      <div class="h2">
        <h2>Tools We Use for UI/UX Design</h2>
        <img src="~/assets/images/h2-img.png" alt="" />
      </div>
      <div class="green-bg">
        <div class="tools">
          <div v-for="tool in tools" :key="tool.id" class="tool">
            <div class="icon">
              <img
                :src="require(`~/assets/images/${tool.image}`)"
                :alt="tool.name"
              />
            </div>
            <div class="info">
              <p>{{ tool.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Questions :questions="questions" />
    <Services />
  </div>
</template>

<script>
import Portfolio from "~/components/Portfolio.vue";
import Services from "~/components/Services.vue";
import Questions from "~/components/Questions.vue";
import UiUx from "~/components/svg-animation/ui-ux.vue";
import aosMixin from "~/mixin/aosMixin";
import Particles from "~/components/Particles.vue";

export default {
  head: { title: "UI-UX-Design" },
  components: { Portfolio, Services, Questions, UiUx, Particles },
  mixins: [aosMixin],
  data() {
    return {
      designServices: [
        {
          id: 1,
          image: "website.png",
          title: "Website UI/UX",
          pos: "Design",
        },
        {
          id: 2,
          image: "wireframe.png",
          title: "UI/UX Design",
          pos: "Wireframe",
        },
        {
          id: 3,
          image: "mail.png",
          title: "Website UI/UX",
          pos: "Design",
        },
        {
          id: 4,
          image: "logo-design.png",
          title: "Logo",
          pos: "Design",
        },
        {
          id: 5,
          image: "web-app.png",
          title: "Web app",
          pos: "UI/UX Design",
        },
        {
          id: 6,
          image: "prototyping.png",
          title: "App UI/UX Design",
          pos: "Prototype",
        },
      ],
      tools: [
        {
          id: 1,
          image: "xd.png",
          name: `Adobe XD`,
        },
        {
          id: 2,
          image: "adobe-illustrator.png",
          name: `Adobe
           Illustrator`,
        },
        {
          id: 3,
          image: "adobe-photoshop.png",
          name: `Adobe 
          Photoshop`,
        },
        {
          id: 4,
          image: "figma.png",
          name: "Figma",
        },
      ],
      questions: [
        {
          id: 1,
          title: `What kind of apps or websites have you designed before?`,
          description: `We have designed numerous apps and websites of a wide variety
                including dating apps, apps for the healthcare industry, food
                delivery apps, booking apps and others. You can check out our
                portfolio here.`,
          collapse: false,
        },
        {
          id: 2,
          title: `Do designers make the design on their own or do you ask me for
                  what I have in mind?`,
          description: `Our team of UI/UX designers are experts in their field and will
                suggest you the best type of themes and designs suitable for
                your project. If you have imagined your app or site in a
                particular way, feel free to inform that to our team.`,
          collapse: false,
        },
        {
          id: 3,
          title: `What if I want to make changes in the app design after the
                  development process has begun?`,
          description: `Since we will begin the development process only after getting
                confirmation from you about the app design, this doesn’t usually
                happen. However, if you do wish to make changes, we will review
                the changes that you want to make and then assist you further
                with the process.`,
          collapse: false,
        },
        {
          id: 4,
          title: `Will my app idea be protected?`,
          description: `Yes, of course! We sign an NDA with all our clients in order to
                ensure that your idea remains yours and we have no rights over
                it. We won’t be using your app or site idea for gains of any
                sort or sharing any confidential data with others.`,
          collapse: false,
        },
      ],
      activeSvg: false,
      particles: false,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.particles = true;
    });
    setTimeout(() => {
      this.activeSvg = true;
    }, 500);

    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500);
    // });
  },
};
</script>

<style lang="scss" scoped>
.active-svg {
  // top:  !important;
  right: 118px !important;
}
.design-section {
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
      width: 86%;
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
    button {
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
        margin: auto;
        display: block;
      }
    }
  }
  .img-head {
    width: 33.7%;
    max-width: 100%;
    text-align: right;
    position: relative;

    @media screen and (max-width: $xs) {
      width: 100%;
      margin-top: 58px;
    }
    img {
      // width: 100%;
      transition: all 0.5s;
      max-width: 100%;
    }
    .brush {
      // width: calc(100% - 206px);
      width: 30%;
      // height: 320px;
      position: absolute;
      transition: all 0.5s;
      top: -70px;
      right: -400px;
    }
  }
}
.design-methodology {
  text-align: center;
  .h2 {
    margin: 120px auto 84px;
    @media screen and (max-width: $xl) {
      margin: 82px auto 60px;
    }
    @media screen and (max-width: $m) {
      margin: 69px auto 27px;
    }
    h2 {
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: 0.05em;
      @media screen and (max-width: $xl) {
        font-size: 26px;
        line-height: 40px;
      }
      @media screen and (max-width: $m) {
        font-size: 21px;
        line-height: 40px;
      }
    }
    img {
      margin-top: -109px;
      margin-left: -434px;
      @media screen and (max-width: $xl) {
        margin-top: -77px;
        margin-left: -302px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -75px;
        margin-left: -249px;
        width: 96px;
      }
      @media screen and (max-width: $xs) {
        margin-top: -75px;
        margin-left: -253px;
      }
    }
  }
  .design-process {
    padding: 74px 0;
    background: $green-gradient-bg;
    img {
      width: 100%;
    }
  }
}
.design-services {
  background: transparent;
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  position: relative;
  z-index: 10;
  @media screen and (max-width: $xs) {
    margin-top: 0;
  }
  h2 {
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.05em;
    color: #000000;
    text-align: center;
    padding: 106px 0 60px;
    margin: 0 0;
    @media screen and (max-width: $xl) {
      font-size: 26px;
      line-height: 40px;
    }
    @media screen and (max-width: $m) {
      font-size: 21px;
      line-height: 16px;
      padding: 69px 0 52px;
    }
    @media screen and (max-width: $xs) {
      font-size: 21px;
      line-height: 24px;
    }
  }
  hr {
    width: 970px;
    height: 4px;
    background: $dark-green;
    opacity: 0.8;
    margin: 0 auto 90px;
    @media screen and (max-width: $m) {
      margin: 0 auto 47px;
      width: 570px;
    }
    @media screen and (max-width: $s) {
      width: 416px;
    }
    @media screen and (max-width: $xs) {
      width: 336px;
    }
  }
  .services {
    width: 1172px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    justify-content: space-between;
    @media screen and (max-width: $xl) {
      width: 1110px;
    }
    @media screen and (max-width: 1024px) {
      width: 937px;
      padding-bottom: 57px;
    }
    @media screen and (max-width: $m) {
      width: 824px;
      padding-bottom: 52px;
    }
    @media screen and (max-width: $s) {
      width: 549px;
    }
    @media screen and (max-width: $xs) {
      width: 336px;
    }
    .item {
      margin: 0 20px 50px;
      width: 350px;
      height: 170px;
      background-color: #ffffff;
      box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.05);
      display: flex;
      padding: 50px 34px;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.08);
      }
      @media screen and (max-width: $xxl) {
        margin: 0 16px 41px;
      }
      @media screen and (max-width: $xl) {
        margin: 0px 10px 18px;
        width: 350px;
        height: 170px;
      }
      @media screen and (max-width: 1024px) {
        margin: 0px 6px 18px;
        width: 295px;
        height: 167px;
      }
      @media screen and (max-width: $m) {
        width: 262px;
        height: 139px;
      }
      @media screen and (max-width: $s) {
        padding: 39px 25px;
      }
      @media screen and (max-width: $xs) {
        width: 159px;
        height: 136px;
        margin: 0 0 17px;
        display: block;
        padding: 15px 0;
      }
      .image {
        @media screen and (max-width: $xs) {
          max-width: 38px;
          margin: auto;
        }
        img {
          width: 58px;
          @media screen and (max-width: $s) {
            width: 50px;
          }
          @media screen and (max-width: $xs) {
            height: 42px;
            width: auto;
          }
        }
      }
      .title {
        margin-left: 21px;
        @media screen and (max-width: $xs) {
          margin: 19px 0 0 0;
          text-align: center;
        }
        h3 {
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 0.05em;
          color: #40916c;
          @media screen and (max-width: $xl) {
            font-size: 15px;
            line-height: 22px;
          }
          @media screen and (max-width: $m) {
            font-size: 12px;
            line-height: 18px;
          }
          @media screen and (max-width: $xs) {
            font-size: 14px;
            line-height: 22px;
          }
        }
        p {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.05em;
          color: #000000;
          margin-bottom: 0;
          @media screen and (max-width: $xl) {
            font-size: 11px;
            line-height: 22px;
          }
          @media screen and (max-width: $m) {
            font-size: 10px;
            line-height: 18px;
          }
          @media screen and (max-width: $xs) {
            font-size: 14px;
          }
        }
      }
    }
  }
}
.tools-section {
  text-align: center;
  .h2 {
    margin: 120px auto 84px;
    @media screen and (max-width: $xl) {
      margin: 82px auto 60px;
    }
    @media screen and (max-width: $m) {
      margin: 69px auto 27px;
    }
    h2 {
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: 0.05em;
      @media screen and (max-width: $xl) {
        font-size: 26px;
        line-height: 40px;
      }
      @media screen and (max-width: $m) {
        font-size: 21px;
        line-height: 40px;
      }
    }
    img {
      margin-top: -109px;
      margin-left: -551px;
      @media screen and (max-width: $xl) {
        margin-top: -78px;
        margin-left: -381px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -77px;
        margin-left: -310px;
        width: 96px;
      }
      @media screen and (max-width: $xs) {
        margin-top: -77px;
        margin-left: -311px;
      }
    }
  }
  .green-bg {
    background: $green-gradient-bg;
    .tools {
      display: flex;
      flex-wrap: wrap;
      height: 528px;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      margin: auto;
      @media screen and (max-width: $xxxl) {
        width: 90%;
      }
      @media screen and (max-width: $xxl) {
        width: 97%;
        height: 476px;
      }
      @media screen and (max-width: $xl) {
        width: 93%;
      }
      @media screen and (max-width: $d) {
        height: 414px;
      }
      @media screen and (max-width: $l) {
        height: 337px;
      }
      @media screen and (max-width: $m) {
        width: 79%;
        height: 343px;
        padding: 18px 0;
      }
      @media screen and (max-width: $s) {
        width: 71%;
      }
      @media screen and (max-width: $xs) {
        width: 86%;
        height: 350px;
      }
      @media screen and (max-width: $xxs) {
        width: 90%;
        height: 350px;
      }
      .tool {
        width: 350px;
        height: 170px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        @media screen and (max-width: $xxl) {
          width: 326px;
          height: 155px;
        }
        @media screen and (max-width: $xl) {
          width: 292px;
          height: 133px;
        }
        @media screen and (max-width: $d) {
          width: 277px;
          height: 121px;
        }
        @media screen and (max-width: $l) {
          width: 225px;
          height: 108px;
        }
        @media screen and (max-width: $m) {
          width: 284px;
          height: 122px;
        }
        @media screen and (max-width: $s) {
          width: 229px;
          height: 108px;
        }
        @media screen and (max-width: $xs) {
          width: 159px;
          height: 123px;
          display: block;
          padding-top: 15px;
          .info {
            width: unset !important;
          }
        }
        .icon {
          margin: 0 36px 0 64px;
          @media screen and (max-width: $xl) {
            margin: 0 38px 0 39px;
          }
          @media screen and (max-width: $d) {
            margin: 0 18px 0 37px;
          }
          @media screen and (max-width: $l) {
            margin: 0 18px 0 16px;
          }
          @media screen and (max-width: $m) {
            margin: 0 31px 0 46px;
          }
          @media screen and (max-width: $s) {
            margin: 0 27px 0 20px;
          }
          @media screen and (max-width: $xs) {
            margin: 0 auto 15px;
          }
          .figma {
            @media screen and (max-width: $xs) {
              width: 37px;
              height: 57px;
            }
          }
          img {
            width: 44px;
            height: auto;
            @media screen and (max-width: $s) {
              width: 33px;
            }
            @media screen and (max-width: $xs) {
              width: 50px;
            }
          }
        }
        .info {
          width: 100px;
          text-align: center;
        }
        p {
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          color: #000000;
          margin-bottom: 0;
          @media screen and (max-width: $l) {
            font-size: 17px;
            line-height: 24px;
          }
          @media screen and (max-width: $xs) {
            font-size: 16px;
            line-height: 16px;
          }
        }
      }
    }
  }
}
</style>
