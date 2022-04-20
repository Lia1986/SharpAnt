<template>
  <div>
    <section class="our-works">
      <div v-if="$route.name !== 'portfolioPage'" class="h2">
        <h2>Our Portfolio</h2>
        <img src="~/assets/images/h2-img.png" alt="" />
      </div>
      <div id="" class="works">
        <div class="tab">
          <button
            v-for="link in tabLinks"
            :key="link.id"
            @click="activePortfolios(link.value)"
            class="tablinks"
            :class="{ 'active-button': link.active }"
          >
            {{ link.text }}
          </button>
        </div>
        <transition name="fade">
          <div id="1" class="tabcontent">
            <div class="images">
              <div id="pnav" v-for="item in portfolio" :key="item.id">
                <div
                  :style="{
                    background: `url(${require('~/assets/images/portfolio/' +
                      item.image)})`,
                  }"
                ></div>
                <div class="title">
                  <a
                    v-if="item.link !== '#'"
                    target="_blank"
                    :href="item.link"
                    >{{ item.name }}</a
                  >
                  <template v-else>{{ item.name }}</template>
                </div>
              </div>
            </div>
            <div
              class="see-more"
              v-if="
                portfolios[activeTab].length > 4 &&
                portfolios[activeTab].length !== portfolio.length
              "
            >
              <button @click="seeMore">See More</button>
            </div>
          </div>
        </transition>
      </div>
    </section>
    <section class="our-works-mob">
      <div v-if="$route.name !== 'portfolioPage'" class="h2">
        <h2>Our Portfolio</h2>
        <img src="~/assets/images/h2-img.png" alt="" />
      </div>
      <div class="body">
        <div class="body-filter">
          <div class="body-filter-left">
            {{ activeFilter }}
            <svg
              @click="clearFilter"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="body-filter-right">
            <svg
              @click="mobFilterPopup = !mobFilterPopup"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7064 0H4.29356C1.92609 0 0 1.92609 0 4.29356V19.7065C0 22.0739 1.92609 24 4.29356 24H19.7065C22.0739 24 24 22.0739 24 19.7064V4.29356C24 1.92609 22.0739 0 19.7064 0ZM22.5938 19.7064C22.5938 21.2985 21.2985 22.5938 19.7064 22.5938H4.29356C2.7015 22.5938 1.40625 21.2985 1.40625 19.7064V4.29356C1.40625 2.7015 2.7015 1.40625 4.29356 1.40625H19.7065C21.2985 1.40625 22.5938 2.7015 22.5938 4.29356V19.7064Z"
                fill="black"
              />
              <path
                d="M20.2844 5.27186H9.57525C9.28083 4.39741 8.45372 3.76562 7.48125 3.76562C6.50878 3.76562 5.68167 4.39741 5.38725 5.27186H3.71564C3.32732 5.27186 3.01251 5.58667 3.01251 5.97498C3.01251 6.3633 3.32732 6.67811 3.71564 6.67811H5.38729C5.68172 7.55256 6.50882 8.18434 7.48129 8.18434C8.45376 8.18434 9.28087 7.55256 9.57529 6.67811H20.2844C20.6727 6.67811 20.9875 6.3633 20.9875 5.97498C20.9875 5.58667 20.6727 5.27186 20.2844 5.27186ZM7.48125 6.77809C7.03842 6.77809 6.67814 6.41781 6.67814 5.97498C6.67814 5.53216 7.03842 5.17188 7.48125 5.17188C7.92408 5.17188 8.28436 5.53216 8.28436 5.97498C8.28436 6.41781 7.92408 6.77809 7.48125 6.77809Z"
                fill="black"
              />
              <path
                d="M20.2844 11.2968H18.6127C18.3183 10.4223 17.4911 9.79053 16.5187 9.79053C15.5463 9.79053 14.7192 10.4223 14.4247 11.2968H3.71564C3.32732 11.2968 3.01251 11.6116 3.01251 11.9999C3.01251 12.3882 3.32732 12.703 3.71564 12.703H14.4247C14.7192 13.5775 15.5463 14.2092 16.5187 14.2092C17.4912 14.2092 18.3183 13.5775 18.6127 12.703H20.2844C20.6727 12.703 20.9875 12.3882 20.9875 11.9999C20.9875 11.6116 20.6727 11.2968 20.2844 11.2968ZM16.5187 12.803C16.0759 12.803 15.7156 12.4427 15.7156 11.9999C15.7156 11.5571 16.0759 11.1968 16.5187 11.1968C16.9616 11.1968 17.3219 11.5571 17.3219 11.9999C17.3219 12.4427 16.9616 12.803 16.5187 12.803Z"
                fill="black"
              />
              <path
                d="M20.2844 17.3222H12.5878C12.2933 16.4477 11.4662 15.8159 10.4938 15.8159C9.52129 15.8159 8.69418 16.4477 8.39976 17.3222H3.71564C3.32732 17.3222 3.01251 17.637 3.01251 18.0253C3.01251 18.4136 3.32732 18.7284 3.71564 18.7284H8.39976C8.69418 19.6029 9.52129 20.2346 10.4938 20.2346C11.4662 20.2346 12.2933 19.6029 12.5878 18.7284H20.2844C20.6727 18.7284 20.9875 18.4136 20.9875 18.0253C20.9875 17.637 20.6727 17.3222 20.2844 17.3222ZM10.4938 18.8284C10.0509 18.8284 9.69065 18.4682 9.69065 18.0253C9.69065 17.5825 10.0509 17.2222 10.4938 17.2222C10.9366 17.2222 11.2969 17.5824 11.2969 18.0253C11.2969 18.4681 10.9366 18.8284 10.4938 18.8284Z"
                fill="black"
              />
            </svg>
            <transition name="fade">
              <div
                v-click-outside="toggleMobFilter"
                v-if="mobFilterPopup"
                class="body-filter-right-select"
              >
                <div
                  v-for="item in tabLinks"
                  :key="item.id"
                  @click="activePortfolios(item.value, item.text)"
                  class="item"
                >
                  {{ item.text }}
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="body-carousel">
          <!-- Wrapper for slides -->
          <div class="body-carousel-inner">
            <no-ssr>
              <agile
                :options="agileOptions"
                ref="portCarousel"
                :key="activeTab"
              >
                <div class="slide" v-for="item in portfolio" :key="item.id">
                  <div class="item">
                    <img
                      :src="require(`~/assets/images/portfolio/${item.image}`)"
                      alt=""
                    />
                  </div>
                </div>
              </agile>
            </no-ssr>

            <!-- Left and right controls -->
            <button @click="goToPrev" class="prev">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8417 13.825L9.02502 10L12.8417 6.175L11.6667 5L6.66669 10L11.6667 15L12.8417 13.825Z"
                  fill="black"
                />
              </svg>
            </button>
            <button @click="goToNext" class="next">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.15834 13.825L10.975 10L7.15834 6.175L8.33334 5L13.3333 10L8.33334 15L7.15834 13.825Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
export default {
  data() {
    return {
      tabLinks: [
        {
          id: 1,
          text: "All",
          value: "all",
          active: true,
        },
        {
          id: 2,
          text: "UI/UX Design",
          value: "uiUx",
          active: false,
        },
        {
          id: 3,
          text: "Logo Design",
          value: "logo",
          active: false,
        },
        {
          id: 4,
          text: "Web projects",
          value: "websites",
          active: false,
        },
      ],
      portfolios: {
        all: [],
        uiUx: [
          {
            id: 6,
            image: "file-cover.png",
            name: "Hello Doctor",
            link: "https://www.behance.net/gallery/120710753/Mobile-app-for-medicine",
          },
          {
            id: 2,
            image: "Ava-School_Landing-page.png",
            name: "Ava School",
            link: "https://www.behance.net/gallery/119702783/Website-for-online-school",
          },
          {
            id: 3,
            image: "clothes-shop_landing-page.png",
            name: "Cloth Store",
            link: "https://www.behance.net/gallery/121022237/Website-for-store",
          },
          {
            id: 4,
            image: "Crypto_landing-page.png",
            name: "Crypto Landing Page",
            link: "https://www.behance.net/gallery/121308035/Landing-Page-for-Cryptocurrency",
          },
          {
            id: 5,
            image: "exam-company_landing-page.png",
            name: "Xamlinx",
            link: "https://www.behance.net/gallery/118120149/Website-for-sharing-exams",
          },

          {
            id: 7,
            image: "imgpsh_fullsize_anim.png",
            name: "FDP Media",
            link: "https://www.behance.net/gallery/137449545/Landing-Page-for-Marketing-Compan",
          },
          {
            id: 8,
            image: "Jake-Riley_landing-page.png",
            name: "Jake Riley LTD",
            link: "https://www.behance.net/gallery/131744611/Service-providing-website",
          },
          {
            id: 10,
            image: "Legano_landing-page.png",
            name: "Legano landing page",
            link: "https://www.behance.net/gallery/131270577/E-commerce-website-for-chocolate-company",
          },
          {
            id: 11,
            image: "Low-company.png",
            name: "Copperberg",
            link: "#",
          },
          {
            id: 12,
            image: "Mathema-Foundation.jpg",
            name: "Mathema Foundation",
            link: "https://www.behance.net/gallery/117972745/Math-Games-Website",
          },
          {
            id: 13,
            image: "Sudoku.png",
            name: "Sudoku",
            link: "https://www.behance.net/gallery/121780445/Sudoku-Game",
          },
          {
            id: 1,
            image: "nmg.png",
            name: "NMG",
            link: "#",
          },
        ],
        logo: [
          {
            id: 1,
            image: "AI-Univercity_logo.png",
            name: "AI UNiversity Logo",
            link: "https://www.behance.net/gallery/127361067/University-Logo",
          },
          {
            id: 2,
            image: "Ava-School_logo.png",
            name: "AVA School Logo",
            link: "https://www.behance.net/gallery/114315077/Logo-guidelines-branding",
          },
          {
            id: 3,
            image: "NMG_logo.png",
            name: "NMG Logo",
            link: "#",
          },
        ],
        websites: [
          {
            id: 3,
            image: "gamancorp.png",
            name: "Gaman",
            link: "https://gamancorp.com/",
          },
          {
            id: 8,
            image: "hitchbird.png",
            name: "Hitchbird",
            link: "https://www.hitchbird.com/malaysia",
          },
          {
            id: 1,
            image: "bigshort.png",
            name: "Big Short online cinema",
            link: "https://bigshort.com.ua",
          },
          {
            id: 2,
            image: "dekorplastic.png",
            name: "Декор Пластик",
            link: "https://dekorplastic.com/",
          },

          {
            id: 4,
            image: "mashtab-asfalt.png",
            name: "Асфальтирование - Маштаб Асфальт",
            link: "https://mashtab-asfalt.ru/",
          },
          {
            id: 5,
            image: "meet.png",
            name: "Meeting Pulse",
            link: "https://meet.ps/",
          },
          {
            id: 6,
            image: "homebound.png",
            name: "Home -New",
            link: "https://www.homebound.com/",
          },
          {
            id: 7,
            image: "tradermat.png",
            name: "Trader Maths",
            link: "https://staging.tradermaths.com/",
          },

          {
            id: 9,
            image: "renew-property.png",
            name: "Development & Design of Properties",
            link: "https://renew-property.co.uk/",
          },
          {
            id: 10,
            image: "yerevan-shaurma.png",
            name: "Erevan Shauma",
            link: "https://www.yerevan-shaurma24.ru/",
          },
          {
            id: 11,
            image: "zakazskulptur.png",
            name: "АРТ ПРОЕКТ",
            link: "https://zakazskulptur.ru/",
          },
        ],
      },
      activeTab: "all",
      activeFilter: "All",
      seeMoreCount: 4,
      mobFilterPopup: false,
      agileOptions: {
        navButtons: false,
        autoplay: false,
        dots: false,
        centerMode: true,
        infinite: true,
      },
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    activePortfolios(val, text) {
      this.activeTab = val;
      if (text) {
        this.activeFilter = text;
      }
    },
    goToNext() {
      this.$refs.portCarousel.goToNext();
    },
    goToPrev() {
      this.$refs.portCarousel.goToPrev();
    },
    toggleMobFilter() {
      this.mobFilterPopup = false;
    },
    clearFilter() {
      this.activeTab = "all";
      this.activeFilter = "All";
    },
    seeMore() {
      this.seeMoreCount += 4;
    },
    shuffle() {
      let arr = [
        ...this.portfolios.uiUx,
        ...this.portfolios.logo,
        ...this.portfolios.websites,
      ];
      let j, x, i;
      for (i = arr.length - 1; i > 0; i--) {
        j = Math.round(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
      this.portfolios.all = arr
    },
  },
  computed: {
    hidPortfolio() {
      let routName = ["development", "portfolio"];
      return !routName.includes(this.$route.name);
    },
    portfolio() {
      switch (this.activeTab) {
        case "uiUx":
          return this.portfolios[this.activeTab].slice(0, this.seeMoreCount);
          break;
        case "logo":
          return this.portfolios[this.activeTab].slice(0, this.seeMoreCount);
          break;
        case "websites":
          return this.portfolios[this.activeTab].slice(0, this.seeMoreCount);
          break;
        default:
          return this.portfolios.all.slice(0, this.seeMoreCount);
      }
    },
  },
  watch: {
    activeTab() {
      this.tabLinks.forEach((elem) => {
        elem.active = false;
        if (elem.value === this.activeTab) {
          elem.active = true;
        }
      });
      this.seeMoreCount = 4;
    },
  },
  created() {
    this.shuffle()
    if(this.$route.name === 'development') {
      this.activeTab = 'websites'
    } else if(this.$route.name === 'ui-ux-design') {
      this.activeTab = 'uiUx'
    }
  },
  mounted() {
    // this.shuffle(this.portfolios.all);
  },
};
</script>

<style lang="scss" scoped>
.our-works {
  text-align: center;
  @media screen and (max-width: $xs) {
    display: none;
  }
  .h2 {
    margin: 120px auto 84px;
    @media screen and (max-width: $xl) {
      margin: 122px auto 49px;
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
      margin-top: -103px;
      margin-left: -193px;
      @media screen and (max-width: $xl) {
        margin-top: -76px;
        margin-left: -134px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -78px;
        margin-left: -107px;

        width: 91px;
      }
    }
  }
  .works {
    background: rgba(214, 214, 214, 0.7);
    padding-top: 22px;
    position: relative;
    a {
      color: inherit;
      text-decoration: none;
    }
    .tab {
      button {
        border-top: unset;
        border-left: unset;
        border-right: unset;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        padding: 21px 46px;
        background: unset;
        border-bottom: 4px solid #ffffff;
        margin-left: -2px;
        opacity: 0.8;
        min-width: 234px;
        &:hover {
          border-bottom: 4px solid $dark-green;
        }
        &:focus {
          border-bottom: 4px solid $dark-green;
        }
        &:active {
          border-bottom: 4px solid $dark-green;
        }
        @media screen and (max-width: $xl) {
          font-size: 14px;
          min-width: 186px;
          padding: 17px 26px;
        }
        @media screen and (max-width: $xl) {
          font-size: 10px;
          min-width: 145px;
          padding: 8px 11px;
          width: 145px;
        }
      }
      .active-button {
        border-bottom: 4px solid $dark-green;
      }
    }
    .tabcontent {
      min-height: 920px;
      padding-bottom: 50px;
      @media screen and (max-width: $xl) {
        min-height: 819px;
      }
      @media screen and (max-width: $m) {
        min-height: 648px;
      }
      .see-more {
        button {
          width: 183px;
          background: #40916c;
          box-shadow: 0px 6px 10px rgba(64, 145, 108, 0.15);
          border-radius: 4px;
          border: none;
          color: #ffffff;
          letter-spacing: 0.15em;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          padding: 11px 24px;
        }
      }
      .images {
        display: flex;
        width: 1340px;
        margin: 70px auto 40px;
        flex-wrap: wrap;
        justify-content: space-between;
        @media screen and (max-width: $xl) {
          width: 938px;
        }
        @media screen and (max-width: $xl) {
          width: 938px;
        }
        @media screen and (max-width: $m) {
          width: 735px;
          margin: 62px auto 41px;
        }
        #pnav {
          margin-bottom: 37px;
          box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.05);
          position: relative;
          div {
            background-size: cover !important;
            background-position: 0 0 !important;
            background-repeat: no-repeat !important;
            display: block;
            padding-top: 20px;
            width: 650px;
            height: 712px;
            -webkit-transition: background-position 1s ease-in-out;
            -moz-transition: background-position 1s ease-in-out;
            -ms-transition: background-position 1s ease-in-out;
            -o-transition: background-position 1s ease-in-out;
            transition: background-position 1s ease-in-out;
            @media screen and (max-width: $xl) {
              width: 449px;
              height: 450px;
              background-size: cover;
            }
            @media screen and (max-width: $m) {
              width: 233px;
              height: 240px;
              background-size: cover;
            }
            &:hover {
              background-position: 0px -450px !important;
              @media screen and (max-width: $xl) {
                background-position: 0px -358px !important;
              }
              @media screen and (max-width: $l) {
                background-position: 6px -352px !important;
              }
              @media screen and (max-width: $m) {
                background-position: 8px -179px !important;
              }
            }
          }
          .title {
            width: 100%;
            height: 60px;
            background: rgba($color: #000000, $alpha: 0.6);
            box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
            border-radius: 0px 0px 4px 4px;
            position: absolute;
            bottom: 0;
            left: 0;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.05em;
            color: #ffffff;
          }
        }
      }
    }
    .active-tab {
      display: block;
    }
  }
}

.our-works-mob {
  display: none;
  @media screen and (max-width: $xs) {
    display: block !important;
    .h2 {
      padding: 30px 0;
    }
  }
  .h2 {
    width: 180px;
    margin: 0 auto;
    position: relative;
    h2 {
      color: #000000;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.05em;
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
    }
    img {
      width: 95px;
    }
  }
  .body {
    background: rgba(214, 214, 214, 0.7);
    padding: 35px 27px 25px 27px;
    &-filter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-left {
        background: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 18px 4px 8px;
        letter-spacing: 0.05em;
        font-weight: 500;
        font-size: 14px;
        line-height: 28px;
        color: #40916c;
        svg {
          margin-left: 24px;
        }
      }
      &-right {
        position: relative;
        &-select {
          width: 335px;
          position: absolute;
          z-index: 15;
          background: #ffffff;
          border: 1px solid #c4c4c4;
          border-radius: 4px;
          left: -305px;
          top: 30px;
          .item + .item {
            border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
          }
          .item {
            padding: 15px 50px;
          }
        }
      }
    }
    &-carousel {
      margin-top: 50px;
      &-inner {
        position: relative;
        .item {
          width: 100%;
          height: 356px;
          &:hover {
            img {
              transform: translateY(calc(-100% + 356px));
            }
          }
          img {
            width: 100%;
            transition: all 2s ease;
          }
        }
        .prev,
        .next {
          position: absolute;
          border: none;
          background: transparent;
          top: 50%;
          transform: translateX(-50%);
        }
        .prev {
          left: -13px;
        }
        .next {
          right: -30px;
        }
      }
    }
  }
}
</style>
