<template>
  <section class="questions">
    <div class="h2">
      <h2>Frequently asked questions</h2>
      <img src="~/assets/images/h2-img.png" alt="" />
    </div>

    <div class="container demo">
      <div class="panel-group">
        <div
          v-for="item in questions"
          :key="item.id"
          class="panel panel-default"
        >
          <div
            @click="item.collapse = !item.collapse"
            class="panel-heading cup"
          >
            <div class="collapse__buttons">
              <svg
                v-if="!item.collapse"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.376 8H8.37598V14H6.37598V8H0.375977V6H6.37598V0H8.37598V6H14.376V8Z"
                  fill="black"
                />
              </svg>
              <svg
                v-if="item.collapse"
                width="14"
                height="2"
                viewBox="0 0 14 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 2H0V0H14V2Z" fill="black" />
              </svg>
            </div>
            <h4 class="panel-title">
              {{ item.title }}
            </h4>
          </div>
          <transition name="slide">
            <div v-if="item.collapse" class="panel-collapse">
              <div class="panel-body">
                {{ item.description }}
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!-- panel-group -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.questions {
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
      margin-left: -485px;
      @media screen and (max-width: $xl) {
        margin-top: -76px;
        margin-left: -341px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -78px;
        margin-left: -283px;
        width: 96px;
      }
    }
  }
  .container {
    background-color: #f3f3f3;
    max-width: 78.76%;
    padding: 0px 30px;
    @media screen and (max-width: $m) {
      max-width: 93.76%;
      padding: 0px 30px;
    }
    @media screen and (max-width: $xs) {
      max-width: 100%;
      padding: 0px 20px;
    }
    .panel-group {
      text-align: left;
      margin-bottom: 26px;
      .panel {
        border-radius: 0;
        box-shadow: none;
        border: none;
        border-bottom: 0.25px solid #000000;
      }
      .panel-default > .panel-heading {
        padding: 26px 127px 20px 127px;
        border-radius: 0;
        color: #212121;
        background-color: #f3f3f3;
        border: unset;
        position: relative;
        @media screen and (max-width: $m) {
          padding: 31px 26px 20px 26px;
        }
        @media screen and (max-width: $s) {
          padding: 10px 21px 7px 11px;
        }
        @media screen and (max-width: $xs) {
          padding: 0;
          .collapse__buttons {
            right: 3px !important;
          }
        }
        .collapse__buttons {
          position: absolute;
          right: 15px;
          z-index: 15;
        }
      }
      .panel-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.05em;
        color: #000000 !important;
        @media screen and (max-width: $s) {
          font-size: 14px;
          margin-right: 15px;
        }
        @media screen and (max-width: $xs) {
          font-size: 10px;
          line-height: 18px;
          margin-right: 25px;
        }
      }

      .panel-title > h4 {
        display: block;
        padding: 15px;
        text-decoration: none;
      }

      .more-less {
        float: right;
        color: #212121;
      }
      .panel-default > .panel-heading + .panel-collapse > .panel-body {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #000000;
        background-color: #f3f3f3;
        padding: 0 141px 15px 141px;
        border-top: unset;
        @media screen and (max-width: $m) {
          padding: 0 115px 15px 39px;
        }
        @media screen and (max-width: $s) {
          padding: 0 61px 15px 24px;
          font-size: 14px;
        }
        @media screen and (max-width: $xs) {
          padding: 0 16px;
          font-size: 10px;
          line-height: 18px;
        }
      }
      .panel.panel-default {
        margin-top: 0 !important;
      }
    }
  }
}
</style>
