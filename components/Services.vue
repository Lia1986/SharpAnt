<template>
  <section class="our-services" id="our-services">
    <div class="h2">
      <h2>Our Services</h2>
      <img src="~/assets/images/h2-img.png" alt="" />
    </div>
    <div class="services">
      <NuxtLink
        :to="service.to"
        v-for="service in services"
        :key="service.id"
      >
        <div class="item">
          <img :src="require(`~/assets/images/${service.image}`)" alt="" />
          <h3>{{ service.title }}</h3>
          <ul>
            <li v-for="item in service.list" :key="item.id">
              <div></div>
              {{ item.text }}
            </li>
          </ul>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          image: "UIUXDesign.png",
          title: "UI/UX Design",
          to: "/ui-ux-design",
          list: [
            {
              id: 1,
              text: "Website UI/UX design",
            },
            {
              id: 2,
              text: "UI/UX Design Wireframe",
            },
            {
              id: 3,
              text: "Logo Design",
            },
            {
              id: 4,
              text: "Email-Templates Design",
            },
            {
              id: 5,
              text: "Web-App UI/UX design",
            },
            {
              id: 6,
              text: "App UI/UX Design Prototype",
            },
          ],
        },
        {
          id: 2,
          image: "develop.png",
          title: "Development",
          to: "/development",
          list: [
            {
              id: 1,
              text: "Custom Website Development",
            },
            {
              id: 2,
              text: "e-Commerce Development",
            },
            {
              id: 3,
              text: "Email-Templates Development",
            },
            {
              id: 4,
              text: "CMS Development",
            },
            {
              id: 5,
              text: "Website App Development",
            },
            {
              id: 6,
              text: "SaaS based app Development",
            },
          ],
        },
        {
          id: 3,
          image: "seo.png",
          title: "SEO Optimization",
          to: "/seo",
          list: [
            {
              id: 1,
              text: "Keyword Research & Strategy",
            },
            {
              id: 2,
              text: "Link Building",
            },
            {
              id: 3,
              text: "Technical SEO",
            },
            {
              id: 4,
              text: "Local SEO",
            },
            {
              id: 5,
              text: "On-page SEO",
            },
            {
              id: 6,
              text: "Off-page SEO",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.our-services {
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
      margin-top: -103px;
      margin-left: -193px;
      @media screen and (max-width: $xl) {
        margin-top: -78px;
        margin-left: -137px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -75px;
        margin-left: -106px;

        width: 96px;
      }
      @media screen and (max-width: $xs) {
        margin-top: -77px;
        margin-left: -106px;
      }
    }
  }
  .services {
    display: flex;
    width: 1236px;
    margin: 0 auto 205px;
    justify-content: space-between;
    @media screen and (max-width: $xl) {
      width: 947px;
      margin: 0 auto 106px;
    }
    @media screen and (max-width: $l) {
      width: 849px;
    }
    @media screen and (max-width: $m) {
      width: 736px;
    }
    @media screen and (max-width: $s) {
      width: 676px;
    }
    @media screen and (max-width: $xs) {
      display: block;
      width: unset;
    }
    a {
      color: unset;
      &:hover {
        color: unset;
        text-decoration: unset;
      }
      .item {
        width: 389px;
        height: 427px;
        padding: 40px 32px 20px;
        box-shadow: 0px 16px 40px rgba(11, 18, 15, 0.1);
        background: #ffffff;
        border-radius: 4px;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.08);
        }
        @media screen and (max-width: $xl) {
          width: 303px;
          height: 313px;
          padding: 25px 29px 20px;
        }
        @media screen and (max-width: $l) {
          width: 269px;
          height: 316px;
          padding: 19px 27px 20px;
        }
        @media screen and (max-width: $m) {
          width: 236px;
          height: 243px;
          padding: 14px 20px 12px;
        }
        @media screen and (max-width: $s) {
          width: 217px;
          height: 247px;
        }
        @media screen and (max-width: $xs) {
          width: 336px;
          height: 346px;
          padding: 20px 15px 14px;
          margin: 0 auto 30px;
        }
        img {
          width: 80px;
          @media screen and (max-width: $m) {
            width: 37px;
          }
          @media screen and (max-width: $xs) {
            width: 60px;
          }
        }
        h3 {
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.05em;
          margin: 20px 0 23px 0;
          @media screen and (max-width: $xl) {
            font-size: 17px;
            line-height: 22px;
          }
          @media screen and (max-width: $m) {
            font-size: 14px;
            line-height: 10px;
            margin: 18px 0 15px 0;
          }
          @media screen and (max-width: $xs) {
            margin: 20px 0 20px 0;
            font-size: 18px;
            line-height: 22px;
          }
        }
        ul {
          text-align: left;
          font-size: 18px;
          line-height: 26px;
          letter-spacing: 0.05em;
          color: #000000;
          list-style: none;
          padding-left: 0;
          @media screen and (max-width: $xl) {
            font-size: 12px;
            line-height: 22px;
          }
          @media screen and (max-width: $m) {
            font-size: 10px;
            line-height: 19px;
          }
          @media screen and (max-width: $xs) {
            font-size: 16px;
            line-height: 24px;
          }
          li {
            display: flex;
            align-items: center;
            div {
              width: 4px;
              height: 4px;
              background: #4d4a4a;
              border-radius: 50%;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
