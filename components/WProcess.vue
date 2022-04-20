<template>
  <section class="working-process">
    <div>
      <h2>See how the Working Process is done!</h2>
      <div class="items">
        <div v-for="item in wProcess" :key="item.id" class="item">
          <img
            :src="require(`~/assets/images/${item.image}`)"
            :alt="item.title"
          />

          <span></span>
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.description }}
          </p>
        </div>
        <div class="line-mobile">
          <div class="line-mobile-1 inner"></div>
          <div class="line-mobile-2 inner"></div>
          <div class="line-mobile-3 inner"></div>
        </div>
        <div class="line"></div>
        <div class="line-tablet">
          <span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      wProcess: [
        {
          id: 1,
          image: "lightbulb.svg",
          title: "Idea",
          description: `You share your business specifications and requirements with us and
            we generate idea how to bring it to life.`,
        },
        {
          image: "stats.svg",
          id: 2,
          title: "Strategy",
          description: `Discussion of the goal, choosing the right technologies, estimating
            the deadlines and assigning tasks.`,
        },
        {
          image: "wp-design.svg",
          id: 3,
          title: "Design",
          description: `Creating wireframes, making Prototypes, discussing design patterns
            and creating final design.`,
        },
        {
          id: 4,
          image: "development.svg",
          title: "Development",
          description: `Conversion of design into codes, building responsive pages, giving
            logical solutions.`,
        },
        {
          id: 5,
          image: "products.svg",
          title: "Product",
          description: `Setting on the Server, Running and testing of the product, Congrets!
            Your product is ready.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.line-tablet {
  width: 714px;
  max-width: 100%;
  height: 568px;
  border: 1px solid #ffffff;
  position: absolute;
  top: 125px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 715px) {
    display: none;
  }
  span {
    width: 100%;
    height: 1px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    transform: translateY(-50%);
  }
}
.line-mobile {
  display: none;
  position: absolute;
  left: 0;
  top: 117px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  height: 1026px;
  width: 50%;
  @media screen and (max-width: 715px) {
    display: block;
  }
  @media screen and (max-width: $xs) {
    height: 916px !important;
    &-1 {
      top: 229px !important;
    }
    &-2 {
      top: 457px !important;
    }
    &-3 {
      bottom: 228px !important;
    }
  }
  @media screen and (max-width: $xxs) {
    height: 1026px !important;
    &-1 {
      top: 273px !important;
    }
    &-2 {
      top: 524px !important;
    }
    &-3 {
      bottom: 250px !important;
    }
  }
  @media screen and (max-width: 374px) {
    display: none;
  }
  .inner {
    width: 100%;
    height: 1px;
    background: #fff;
  }
  &-1 {
    position: absolute;
    top: 273px;
  }
  &-2 {
    position: absolute;
    top: 524px;
  }
  &-3 {
    position: absolute;
    bottom: 250px;
  }
}
.working-process {
  text-align: center;
  color: #ffffff;
  background: $green-gradient-bg;
  h2 {
    padding-top: 57px;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.15em;
    margin: 0;
    @media screen and (max-width: $xl) {
      font-size: 26px;
      line-height: 40px;
    }
    @media screen and (max-width: $m) {
      font-size: 21px;
      line-height: 37px;
    }
    @media screen and (max-width: $xs) {
      display: none;
    }
  }
  .items {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 65px 53px 39px;
    @media screen and (max-width: $l) {
      padding: 49px 23px 2px;
    }
    @media screen and (max-width: $s) {
      display: flex;
      flex-wrap: wrap;
      margin: 0 24px 0;
      justify-content: center;
      padding: 49px 0px 2px;
    }
    @media screen and (max-width: $s) {
      width: unset;
    }
    .line {
      width: 77%;
      border-top: 1px solid #ffffff;
      position: absolute;
      top: 183px;
      left: 216px;
      @media screen and (max-width: $xxl) {
        width: 77%;
        left: 190px;
        top: 183px;
      }
      @media screen and (max-width: 1536px) {
        width: 76%;
        left: 180px;
        top: 183px;
      }
      @media screen and (max-width: $xl) {
        width: 77%;
        left: 155px;
        top: 151px;
      }
      @media screen and (max-width: $l) {
        width: 78%;
        left: 114px;
        top: 134px;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
      @media screen and (max-width: $m) {
        width: 75%;
        left: 97px;
        top: 114px;
      }
    }
    .item {
      height: 341px;
      width: 341px;
      @media screen and (max-width: $xxl) {
        width: 263px;
      }
      @media screen and (max-width: $xl) {
        width: 201px;
      }
      @media screen and (max-width: $l) {
        width: 181px;
      }
      @media screen and (max-width: $m) {
        width: 147px;
      }
      // @media screen and (max-width: 768px) {
      //   display: none;
      // }
      @media screen and (max-width: $s) {
        width: 41%;
        margin: 0 30px 64px;
        height: unset;
      }

      @media screen and (max-width: $xs) {
        width: unset;
        height: unset;
        margin-bottom: 42px;
      }

      img {
        height: 92px;
        @media screen and (max-width: $xl) {
          height: 60px;
          width: 61px;
        }
        @media screen and (max-width: $m) {
          height: 39px;
          width: 39px;
        }
        @media screen and (max-width: $s) {
          height: 52px;
          width: 50px;
        }
        @media screen and (max-width: $xs) {
          height: 45px;
          width: 41px;
        }
      }
      h3 {
        margin-top: 12.5px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.05em;
        @media screen and (max-width: $m) {
          font-size: 13px;
        }
        @media screen and (max-width: $xs) {
          font-size: 16px;
          line-height: 20px;
        }
      }
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        margin-top: 19px;
        letter-spacing: 0.05em;
        width: 300px;
        max-width: 100%;
        @media screen and (max-width: $xl) {
          font-size: 14px;
          line-height: 22px;
        }
        @media screen and (max-width: $m) {
          font-size: 11px;
        }
        @media screen and (max-width: $xs) {
          font-size: 14px;
          line-height: 22px;
        }
      }
      span {
        display: block;
        width: 14px;
        height: 14px;
        margin: 20px auto 0;
        background: #ffffff;
        border-radius: 15px;
        @media screen and (max-width: $xl) {
          width: 10px;
          height: 10px;
        }
        @media screen and (max-width: 715px) {
          .mobile-line {
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .mobile {
    display: block !important;
  }
}
</style>
