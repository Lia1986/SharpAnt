<template>
  <div class="notFound">
    <div class="left">
      <img src="~/assets/images/error1.svg" alt="cabel" />
    </div>
    <div class="right">
      <img src="~/assets/images/error2.svg" alt="monitor" />
      <div class="right__body">
        <h2>{{ error.statusCode }}</h2>
        <p>{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.notFound {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: $xxl) {
    .right {
      margin-right: 80px !important;
      max-width: 100% !important;
      width: 540px;
    }
    .left {
      width: 850px;
      max-width: 100%;
    }
  }
  img {
    max-width: 100%;
  }
  .right {
    position: relative;
    margin-right: 120px;
    &__body {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      margin-top: 70px;
      h2 {
        color: #40916c;
        font-weight: 500;
        font-size: 144px;
        line-height: 176px;
        margin-bottom: 0;
      }
      p {
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        color: #000000;
        margin-bottom: 0;
      }
    }
  }
}
</style>
