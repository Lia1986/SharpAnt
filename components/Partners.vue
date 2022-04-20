<template>
  <section id="cooperations" class="our-partners">
    <div>
      <h2>We are proud to have collaborated with companies worldwide.</h2>
    </div>
    <div class="map-block">
      <div class="partners">
        <client-only placeholder="Loading...">
          <no-ssr>
            <agile :options="agileOptions">
              <div class="item" v-for="item in cooperations" :key="item.id">
                <img
                  :src="require(`~/assets/images/${item.img}`)"
                  alt="cooperation"
                />
              </div>
            </agile>
          </no-ssr>
        </client-only>
      </div>
      <!-- <div class="mob_partners">
        <div class="item">
          <img src="~/assets/images/mob_client1.png" alt="" />
        </div>
        <div class="item">
          <img src="~/assets/images/mob_client2.png" alt="" />
        </div>
        <div class="item">
          <img src="~/assets/images/mob_client3.png" alt="" />
        </div>
        <div class="item">
          <img src="~/assets/images/mob_client4.png" alt="" />
        </div>
        <div class="item">
          <img src="~/assets/images/mob_client5.png" alt="" />
        </div>
      </div> -->
      <div class="map">
        <!-- <img src="~/assets/images/words-map.png" alt="" /> -->
        <MapSvg />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cooperations: [
        {
          id: 1,
          img: "client1.png",
        },

        {
          id: 5,
          img: "client5.png",
        },
        {
          id: 2,
          img: "client2.png",
        },
        {
          id: 6,
          img: "client6.png",
        },
        {
          id: 3,
          img: "client3.png",
        },
        {
          id: 7,
          img: "client7.png",
        },
        {
          id: 4,
          img: "client4.png",
        },
        {
          id: 8,
          img: "client8.png",
        },

        {
          id: 9,
          img: "client9.png",
        },
      ],
      agileOptions: {
        navButtons: false,
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.our-partners {
  h2 {
    margin: 121px 0 76px 0;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
    text-align: center;
    @media screen and (max-width: $xl) {
      font-size: 26px;
      line-height: 40px;
    }
    @media screen and (max-width: $m) {
      font-size: 21px;
      line-height: 19px;
    }
    @media screen and (max-width: $xs) {
      font-size: 20px;
      line-height: 31px;
      margin: 74px 0 42px 0;
    }
    @media screen and (max-width: $xxs) {
      font-size: 18px;
      line-height: 26px;
    }
  }
  .map-block {
    background: #e2e2e2;
    .map {
      width: 1238px;
      margin: auto;
      padding: 119px 0 69px;
      @media screen and (max-width: $xl) {
        width: 900px;
        padding: 81px 0 69px;
      }
      @media screen and (max-width: $l) {
        width: 741px;
        padding: 40px 0 40px;
      }
      @media screen and (max-width: $m) {
        width: 700px;
      }
      @media screen and (max-width: $xs) {
        display: none;
      }
      img {
        @media screen and (max-width: $xl) {
          width: 894px;
        }
        @media screen and (max-width: $l) {
          width: 767px;
        }
        @media screen and (max-width: $m) {
          width: 700px;
        }
        @media screen and (max-width: $xs) {
          width: 524px;
        }
      }
    }
    .partners {
      // display: flex;
      width: 100%;
      // margin: auto;
      padding-top: 98px;
      // justify-content: space-between;
      // overflow: hidden;
      @media screen and (max-width: $l) {
        width: 91%;
        padding-top: 61px;
      }
      @media screen and (max-width: $l) {
        width: 100%;
      }
      @media screen and (max-width: $xs) {
        display: none;
      }
      .item {
        width: 290px !important;
        height: 100px;
        @media screen and (max-width: $l) {
          width: 147px;
          height: 63px;
        }
        img {
          @media screen and (max-width: $xl) {
            width: 200px;
          }
          @media screen and (max-width: $l) {
            width: 162px;
          }
          @media screen and (max-width: $m) {
            width: 147px;
          }
        }
      }
    }
    .mob_partners {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 90%;
      margin: auto;
      padding-bottom: 30px;
      @media screen and (min-width: $xs) {
        display: none;
      }
      .item {
        margin: 35px 23px 0 23px;
        @media screen and (max-width: 417px) {
          margin: 36px 14px 0 14px;
        }
        @media screen and (max-width: $xxs) {
          margin: 36px 14px 0 14px;
        }
      }
      img {
        @media screen and (max-width: $xxs) {
          width: 100%;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.our-partners {
  .agile--ssr .agile__slides > * {
    overflow: hidden;
    width: 0;
  }

  .agile--ssr .agile__slides > *:first-child {
    width: 100%;
  }
}
</style>
