<template>
  <section class="advantages-section">
    <div>
      <h2>Advantages working with Us!</h2>
      <hr />
      <div class="advantages">
        <div class="item" v-for="item in advantages" :key="item.id">
          <div>
            <img :src="require(`~/assets/images/${item.image}`)" alt="Best" />
            <h3>{{ item.title }}</h3>
          </div>
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      advantages: [
        {
          id: 1,
          image: "best-dev.svg",
          title: "Best In Development",
          description: `Our priority is to develop products that completely satisfy our
            users. Still, development speed and applied creativity remain
            critical priorities. We are willing to create innovative, engaging
            products for you, in the most flexible way, conforming to the best
            coding standards and practices.`,
        },
        {
          id: 2,
          image: "care-about.svg",
          title: "We care about your product",
          description: `We care deeply about every project we develop. Our approach is to
            develop your product and be proud of its success. We also assist you
            in finding cost effective solutions for maintaining and delivering
            your website or web app to themarket.`,
        },
        {
          id: 3,
          image: "fast-dev.svg",
          title: "Fast Development",
          description: `We understand how crucial it is for startups to deliver products to
            the market on time. Our young team of enthusiasts won’t rest until
            we find the right solution for the problem, ensuring that the
            development will be done as fast as possible.`,
        },
        {
          id: 4,
          image: "support.svg",
          title: "Online Support",
          description: `Our QA team makes sure that your app is always running smoothly.
            SharpAnt offers free one-year support, including bug fixes after
            development. Even modest improvements that help your product succeed
            within the scope of our free online support service.`,
        },
        {
          id: 5,
          image: "design.svg",
          title: "Modern Design",
          description: `The ability to be empathetic allows our UX/UI designers to put
            themselves in the shoes of our clients and customers to create a
            user-centric product. All our designs are crystal clear, sharp,
            modern and sophisticated – in line with our general design
            philosophy.`,
        },
        {
          id: 6,
          image: "24.7.svg",
          title: "24/7 Communication",
          description: `We are extremely customer-focused in assisting our clients 24/7. We
            will be happy to assist you with all types of questions/issues in
            any mode of communication. Kindly contact us via email, telephone or
            online query and we will rich you asap.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.advantages-section {
  background: transparent;
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
  .advantages {
    width: 1450px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    @media screen and (max-width: $xl) {
      width: 1087px;
    }
    @media screen and (max-width: 1024px) {
      width: 937px;
      padding-bottom: 57px;
    }
    @media screen and (max-width: $m) {
      width: 786px;
      padding-bottom: 52px;
    }
    @media screen and (max-width: $s) {
      width: 524px;
      padding-bottom: 52px;
    }
    @media screen and (max-width: $xs) {
      width: 336px;
    }
    .item {
      margin: 0 20px 50px;
      width: 439px;
      height: 280px;
      background-color: #ffffff;
      box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.05);
      transition: all 0.3s;
      &:hover {
        transform: scale(1.08);
      }
      @media screen and (max-width: $xxl) {
        margin: 0 16px 41px;
      }
      @media screen and (max-width: $xl) {
        margin: 0px 10px 18px;
        width: 341px;
        height: 258px;
      }
      @media screen and (max-width: 1024px) {
        margin: 0px 6px 18px;
        width: 300px;
        height: 281px;
      }
      @media screen and (max-width: $m) {
        width: 250px;
        height: 247px;
      }
      @media screen and (max-width: $xs) {
        width: unset;
        margin: 0 0 50px;
        height: 276px;
      }
      div {
        display: flex;
        align-items: center;
        img {
          padding: 26px 0 0 18px;
          width: 52px;
        }
        h3 {
          margin: 34px 0 0 21px;
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 0.05em;
          color: #000000;
          @media screen and (max-width: $xl) {
            font-size: 15px;
            line-height: 22px;
          }
          @media screen and (max-width: $m) {
            font-size: 12px;
            line-height: 18px;
            margin: 26px 0 0 15px;
          }
          @media screen and (max-width: $xs) {
            font-size: 16px;
            line-height: 28px;
          }
        }
      }
      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #000000;
        padding: 9px 22px 30px;
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
          line-height: 22px;
        }
      }
    }
  }
}
</style>
