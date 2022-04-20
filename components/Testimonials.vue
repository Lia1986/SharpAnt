<template>
  <section id="testimonials" class="testimonials">
    <div class="h2">
      <h2>Testimonials</h2>
      <img src="~/assets/images/h2-img.png" alt="" />
    </div>
    <div>
      <div id="particles-js" class="green-bg">
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <no-ssr>
            <agile :options="agileOptions" ref="carousel">
              <div
                class="slide"
                v-for="testimon in testimonials"
                :key="testimon.id"
              >
                <div class="item">
                  <div class="item__head">
                    <img
                      :src="require(`~/assets/images/${testimon.head}`)"
                      alt="head"
                    />
                  </div>
                  <div class="slide-agile">
                    <h3>{{ testimon.name }}</h3>
                    <span class="location">{{ testimon.location }}</span>
                    <p>
                      <img
                        :src="require(`~/assets/images/${testimon.testimon1}`)"
                        alt=""
                      />
                      {{ testimon.description }}
                      <img
                        :src="require(`~/assets/images/${testimon.testimon2}`)"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
            </agile>
          </no-ssr>

          <!-- Left and right controls -->
          <button @click="goToPrev" class="prev">
            <img src="~/assets/images/prev.png" alt="" />
          </button>
          <button @click="goToNext" class="next">
            <img src="~/assets/images/next.png" alt="" />
          </button>
        </div>
      </div>
      <!-- mobile slider ???  -->
      <div v-if="false" class="green-bg mob-green-bg">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <div class="slide">
                <h3>Fernando Felix</h3>
                <span class="location">Portugal</span>
                <p>
                  <img src="~/assets/images/testimon.svg" alt="" />Their team
                  showed a very high standard of work in a much faster time,
                  than I expected. Quick response, easy communication, and high
                  level of professionalism. Very fast delivery. Very
                  professional work. All PERFECT. Very satisfied with your work.
                  I will definitely work with you in the future. Thank you.
                  <img src="~/assets/images/testimon2.svg" alt="" />
                </p>
              </div>
            </div>

            <div class="item">
              <div class="slide">
                <h3>Fernando Felix</h3>
                <span class="location">Portugal</span>
                <p>
                  <img src="~/assets/images/testimon.svg" alt="" />Their team
                  showed a very high standard of work in a much faster time,
                  than I expected. Quick response, easy communication, and high
                  level of professionalism. Very fast delivery. Very
                  professional work. All PERFECT. Very satisfied with your work.
                  I will definitely work with you in the future. Thank you.
                  <img src="~/assets/images/testimon2.svg" alt="" />
                </p>
              </div>
            </div>

            <div class="item">
              <div class="slide">
                <h3>Fernando Felix</h3>
                <span class="location">Portugal</span>
                <p>
                  <img src="~/assets/images/testimon.svg" alt="" />Their team
                  showed a very high standard of work in a much faster time,
                  than I expected. Quick response, easy communication, and high
                  level of professionalism. Very fast delivery. Very
                  professional work. All PERFECT. Very satisfied with your work.
                  I will definitely work with you in the future. Thank you.
                  <img src="~/assets/images/testimon2.svg" alt="" />
                </p>
              </div>
            </div>
          </div>
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon"
              ><img src="~/assets/images/prev.png" alt=""
            /></span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon"
              ><img src="~/assets/images/next.png" alt=""
            /></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    loader: true,
  },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Fernando Felix",
          location: "Portugal",
          description: `Their team showed a
                  very high standard of work in a much faster time, than I
                  expected. Quick response, easy communication, and high level
                  of professionalism. Very fast delivery. Very professional
                  work. All PERFECT. Very satisfied with your work. I will
                  definitely work with you in the future. Thank you.`,
          testimon1: "testimon.svg",
          testimon2: "testimon2.svg",
          head: "person3.png",
        },
        {
          id: 2,
          name: "BERYL MATHIOT",
          location: "Hong Kong",
          description: `Excellent cooperation! You were flexible and delivered the project in good time. 
          Very responsive, exactly the same with our design. 
          The quality of your work was amazing. Highly recommend.`,
          testimon1: "testimon.svg",
          testimon2: "testimon2.svg",
          head: "person2.png",
        },
        {
          id: 3,
          name: "Jasper Frumau",
          location: "Thailand, Bangkok",
          description: `The team did a great job adding an additional internal link feature to our Laravel VueJS SaaS application.
           Will be happy to hire them again in the future.`,
          testimon1: "testimon.svg",
          testimon2: "testimon2.svg",
          head: "person4.png",
        },
        {
          id: 4,
          name: "Khrystyna Lavna",
          location: "Ukraine, Lviv",
          description: `Our team got great experience working with You and we are absolutely ready to hire you in future`,
          testimon1: "testimon.svg",
          testimon2: "testimon2.svg",
          head: "person5.png",
        },
        {
          id: 5,
          name: "Collins Kipkemboi",
          location: "Kenya, Nairobi",
          description: `Great job, dear team. I enjoyed working with you. You were flexible and delivered the project in good time. 
          The quality of your work was amazing, and I'm glad about the end result. Thank you!`,
          testimon1: "testimon.svg",
          testimon2: "testimon2.svg",
          head: "person1.png",
        },
      ],
      agileOptions: {
        navButtons: false,
        autoplay: false,
        dots: true,
        centerMode: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              dots: false,
            },
          },
        ],
      },
    };
  },
  methods: {
    goToNext() {
      this.$refs.carousel.goToNext();
    },
    goToPrev() {
      this.$refs.carousel.goToPrev();
    },
  },
};
</script>

<style lang="scss" scoped>
.testimonials {
  .h2 {
    margin: 120px auto 84px;
    text-align: center;
    @media screen and (max-width: $xl) {
      margin: 75px auto 44px;
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
      @media screen and (max-width: $xs) {
        font-size: 20px;
        line-height: 24px;
      }
    }
    img {
      margin-top: -103px;
      margin-left: -193px;
      @media screen and (max-width: $xl) {
        margin-top: -91px;
        margin-left: -145px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -98px;
        margin-left: -127px;
        width: 91px;
      }
      @media screen and (max-width: $xs) {
        margin-top: -61px;
        margin-left: -93px;
      }
    }
  }
  .green-bg {
    background: $green-gradient-bg;
    padding: 110px 0 80px 0;
    position: relative;
    @media screen and (max-width: $xs) {
      padding: 29px 0 29px 0;
    }
    .carousel-inner {
      margin: auto;
      width: 970px;
      border-radius: 4px;
      overflow: visible;
      @media screen and (max-width: $xl) {
        width: 829px;
      }
      @media screen and (max-width: $l) {
        width: 691px;
      }
      @media screen and (max-width: $m) {
        width: 571px;
      }
      @media screen and (max-width: $xs) {
        width: 445px;
      }
      @media screen and (max-width: $xxs) {
        width: 335px;
      }

      & .item {
        position: relative;
        box-shadow: 0px 16px 40px rgba(11, 18, 15, 0.1);
        &__head {
          position: absolute;
          left: 50%;
          top: -65px;
          background: #fff;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          padding: 15px;
          transform: translateX(-50%);
          @media screen and (max-width: $xl) {
            width: 110px;
            height: 110px;
          }
          @media screen and (max-width: $s) {
            width: 100px;
            height: 100px;
            top: -55px;
          }
          img {
            border-radius: 50%;
            max-width: 100%;
            width: 100px;
            height: 100px;
            object-fit: cover;
          }
        }
      }

      .slide-agile {
        text-align: center;
        background: #ffffff;
        border-radius: 4px;
        padding: 82px 72px;
        min-height: 358px;
        @media screen and (max-width: $xl) {
          padding: 45px 44px;
        }

        h3 {
          font-weight: 600;
          font-size: 18px;
          text-align: center;
          letter-spacing: 0.05em;
          margin-top: 0;
          margin-bottom: 6px;
          color: #000000;
        }
        .location {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.05em;
          color: $dark-green;
        }
        p {
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;
          text-align: center;
          letter-spacing: 0.05em;
          color: #000000;
          margin-bottom: 0;
          margin-top: 39px;
          @media screen and (max-width: $xl) {
            font-size: 13px;
            line-height: 22px;
            margin-top: 15px;
          }
          @media screen and (max-width: $m) {
            font-size: 11px;
          }
          img {
            width: 30px;
          }
        }
        .carousel-control {
          background-image: none;
          background-color: #41946e;
        }
      }
      @media screen and (max-width: $xs) {
        .prev,
        .next {
          display: none;
        }
      }
      .prev,
      .next {
        position: absolute;
        top: 50%;
        border: none;
        background-color: transparent;
      }

      .prev {
        left: -15%;
      }
      .next {
        right: -15%;
      }
    }
    .carousel-control.left {
      background-image: none !important;
      left: 9%;
      opacity: unset;
      @media screen and (max-width: $xxxl) {
        left: 6%;
      }
      @media screen and (max-width: $xxxl) {
        left: 2%;
      }
      @media screen and (max-width: $xl) {
        top: -38px;
      }
      @media screen and (max-width: $xs) {
        display: none;
      }
    }
    .carousel-control.right {
      background-image: none !important;
      right: 10%;
      opacity: unset;
      @media screen and (max-width: $xxxl) {
        right: 7%;
      }
      @media screen and (max-width: $xxl) {
        right: 3%;
      }
      @media screen and (max-width: $xl) {
        top: -44px;
      }
      @media screen and (max-width: $xs) {
        display: none;
      }
    }
    .glyphicon {
      position: absolute;
      top: 0px !important;
    }
  }
  .mob-green-bg {
    @media screen and (min-width: $xs) {
      display: none;
    }
  }
}
</style>

<style lang="scss">
/* agile carousel dots style */

.testimonials {
  .agile__dots {
    position: absolute;
    bottom: -40px;
    .agile__dot {
      margin: 0 5px;
      button {
        background: #ffffff;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
      }
    }
    .agile__dot--current {
      button {
        background: #40916c;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
      }
    }
  }
  // agile track
  .agile__track {
    margin-top: 65px;
  }
}
</style>
