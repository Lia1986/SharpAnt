<template>
  <section class="contact-us">
    <div class="h2">
      <h2>Contact Us</h2>
      <img src="~/assets/images/h2-img.png" alt="" />
    </div>
    <div class="gray-bg">
      <div class="contact-block">
        <div class="contacts">
          <div class="form">
            <h3>Leave us a message</h3>
            <form action="">
              <input
                class="name"
                :class="{ 'form-group--error': $v.form.name.$error }"
                placeholder="Full Name"
                v-model.trim="$v.form.name.$model"
                type="text"
              />
              <p class="error" v-if="$v.form.name.$error">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_3020_92"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="14"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 1.70508C4.31999 1.70508 1.33333 4.69174 1.33333 8.37175C1.33333 12.0517 4.31999 15.0384 8 15.0384C11.68 15.0384 14.6667 12.0517 14.6667 8.37175C14.6667 4.69174 11.68 1.70508 8 1.70508ZM8 9.03841C7.63333 9.03841 7.33333 8.73841 7.33333 8.37175V5.70508C7.33333 5.33841 7.63333 5.03841 8 5.03841C8.36666 5.03841 8.66666 5.33841 8.66666 5.70508V8.37175C8.66666 8.73841 8.36666 9.03841 8 9.03841ZM7.33333 10.3717V11.7051H8.66666V10.3717H7.33333Z"
                      fill="black"
                    />
                  </mask>
                  <g mask="url(#mask0_3020_92)">
                    <rect y="0.37207" width="16" height="16" fill="#DA1414" />
                  </g>
                </svg>
                This field is required
              </p>
              <input
                class="mail"
                :class="{ 'form-group--error': $v.form.email.$error }"
                v-model.trim="$v.form.email.$model"
                placeholder="Email Address"
                type="text"
              />
              <p class="error" v-if="$v.form.email.$error">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_3020_92"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="14"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 1.70508C4.31999 1.70508 1.33333 4.69174 1.33333 8.37175C1.33333 12.0517 4.31999 15.0384 8 15.0384C11.68 15.0384 14.6667 12.0517 14.6667 8.37175C14.6667 4.69174 11.68 1.70508 8 1.70508ZM8 9.03841C7.63333 9.03841 7.33333 8.73841 7.33333 8.37175V5.70508C7.33333 5.33841 7.63333 5.03841 8 5.03841C8.36666 5.03841 8.66666 5.33841 8.66666 5.70508V8.37175C8.66666 8.73841 8.36666 9.03841 8 9.03841ZM7.33333 10.3717V11.7051H8.66666V10.3717H7.33333Z"
                      fill="black"
                    />
                  </mask>
                  <g mask="url(#mask0_3020_92)">
                    <rect y="0.37207" width="16" height="16" fill="#DA1414" />
                  </g>
                </svg>
                Please enter a valid email address
              </p>
              <textarea
                class="text"
                :class="{ 'form-group--error': $v.form.text.$error }"
                v-model.trim="$v.form.text.$model"
                placeholder="Your Message"
                type="text"
              />
              <p class="error mt-6" v-if="$v.form.text.$error">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_3020_92"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="14"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 1.70508C4.31999 1.70508 1.33333 4.69174 1.33333 8.37175C1.33333 12.0517 4.31999 15.0384 8 15.0384C11.68 15.0384 14.6667 12.0517 14.6667 8.37175C14.6667 4.69174 11.68 1.70508 8 1.70508ZM8 9.03841C7.63333 9.03841 7.33333 8.73841 7.33333 8.37175V5.70508C7.33333 5.33841 7.63333 5.03841 8 5.03841C8.36666 5.03841 8.66666 5.33841 8.66666 5.70508V8.37175C8.66666 8.73841 8.36666 9.03841 8 9.03841ZM7.33333 10.3717V11.7051H8.66666V10.3717H7.33333Z"
                      fill="black"
                    />
                  </mask>
                  <g mask="url(#mask0_3020_92)">
                    <rect y="0.37207" width="16" height="16" fill="#DA1414" />
                  </g>
                </svg>
                This field is required
              </p>
              <button class="button" @click.prevent="submit">Send</button>
            </form>
          </div>
          <div class="contact">
            <div class="line">
              <div><img src="~/assets/images/map.png" alt="" /></div>
              <div>
                IT Business Center<br />
                6/1 Abelyanst. 0038, Yerevan, Armenia
              </div>
            </div>
            <div class="line">
              <div><img src="~/assets/images/tel.png" alt="" /></div>
              <div>+374 94 21 30 55</div>
            </div>
            <div class="line">
              <div><img src="~/assets/images/email.png" alt="" /></div>
              <div>sharpant@gmail.com</div>
            </div>
            <div class="map__wrapper" :class="{ 'full-map': fullMap }">
              <iframe
                src="https://yandex.com/map-widget/v1/?um=constructor%3A81ca07a43cd4cdc6d1404b8a9dfedefe85f891331417598fe20f747825832bed&amp;source=constructor"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
              <div class="fullScreen" @click="fullMap = !fullMap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 384.97 384.97"
                  style="enable-background: new 0 0 384.97 384.97"
                  xml:space="preserve"
                >
                  <g>
                    <g id="Fullscreen">
                      <path
                        d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223    c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03    l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"
                      />
                      <path
                        d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03    L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242    c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"
                      />
                      <path
                        d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092    c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092    c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"
                      />
                      <path
                        d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03    s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012    c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <img src="~/assets/images/big-map.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
export default {
  head: {
    title: "Contact Us",
  },
  data() {
    return {
      fullMap: false,
      form: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      text: {
        required,
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$toast.error("Please fix the errors");
      } else {
        // do your submit logic here
        setTimeout(() => {
          this.$toast.success("Your message is sent");
          Object.keys(this.form).forEach((elem) => {
            this.form[elem] = "";
          });
        }, 500);
      }
    },
  },
  created() {},
};
</script>

<style lang="scss">
p.error {
  color: #da1414;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  margin-top: -18px;
  margin-bottom: 10px;
  text-align: left;
}
.form-group--error {
  border: 1.2px solid #da1414 !important;
}
</style>

<style lang="scss" scoped>
.full-map {
  width: 100%;
  height: 100% !important;
  position: fixed !important;
  margin-top: 0 !important;
  left: 0;
  top: 0;
  z-index: 1000;
}
.mt-6 {
  margin-top: 6px;
}
.contact-us {
  margin-top: 120px !important;
  text-align: center;

  @media screen and (max-width: $xl) {
    margin-top: 67px !important;
  }
  .h2 {
    margin: 0 auto 58px;
    text-align: center;
    @media screen and (max-width: $m) {
      margin: 0 auto 21px;
    }
    @media screen and (max-width: $xs) {
      margin: 0 auto;
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
      margin-left: -153px;
      @media screen and (max-width: $xl) {
        margin-top: -91px;
        margin-left: -115px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -98px;
        margin-left: -101px;
        width: 91px;
      }
      @media screen and (max-width: $xs) {
        margin-top: -73px;
        margin-left: -88px;
      }
    }
  }
}
.gray-bg {
  display: flex;
  background: #d6d6d6;
  margin-bottom: 150px;
  @media screen and (max-width: $l) {
    margin-bottom: 93px;
  }
  @media screen and (max-width: $xs) {
    display: block;
    margin-bottom: 100px;
  }
  .contact-block {
    width: 54.66%;
    display: flex;
    margin: 73px 0 83px 100px;
    @media screen and (max-width: $xl) {
      margin: 63px 0 64px 45px;
    }
    @media screen and (max-width: $xl) {
      margin: 54px 0 54px 39px;
      width: 57.66%;
    }
    @media screen and (max-width: $m) {
      width: 50%;
    }
    @media screen and (max-width: $xs) {
      width: 100%;
      padding: unset;
      margin: auto;
    }
    .contacts {
      display: flex;
      padding: 60px;
      width: 950px;
      justify-content: space-around;
      background-color: #ffffff;
      font-size: 16px;
      @media screen and (max-width: $xxxl) {
        padding: 42px;
        width: 875px;
      }
      @media screen and (max-width: $xl) {
        padding: 42px 39px;
        width: 725px;
        font-size: 14px;
      }
      @media screen and (max-width: $xl) {
        padding: 42px 21px;
        width: 667px;
        font-size: 12px;
      }
      @media screen and (max-width: $m) {
        padding: 30px 19px;
        width: 412px;
        font-size: 8px;
      }
      @media screen and (max-width: $xs) {
        width: 100%;
        flex-direction: column-reverse;
        padding: 0px 19px;
      }
    }
    h3 {
      font-size: 20px;
      line-height: 24px;
      color: $dark-green;
      margin-top: 0;
      margin-bottom: 32px;
      @media screen and (max-width: $m) {
        font-size: 16px;
        margin-bottom: 11px;
      }
      @media screen and (max-width: $xs) {
        font-size: 16px;
        text-align: left;
        width: 335px;
        margin: 30px auto 23px;
      }
    }
    .contact {
      text-align: left;
      padding-left: 60px;
      padding-top: 25px;
      @media screen and (max-width: $xxl) {
        padding-left: 19px;
      }
      @media screen and (max-width: $xl) {
        padding-left: 31px;
        padding-top: 45px;
      }
      @media screen and (max-width: $m) {
        padding-top: 25px;
      }
      @media screen and (max-width: $xs) {
        padding-top: unset;
        padding-left: unset;
        width: 335px;
        margin: 0 auto;
      }
      .img {
        @media screen and (max-width: $xxl) {
          width: 300px;
        }
        @media screen and (max-width: $xl) {
          width: 255px;
        }
        @media screen and (max-width: $m) {
          width: 150px;
        }
        @media screen and (max-width: $xs) {
          width: 335px;
          height: 149.23px;
        }
      }
      .line {
        display: flex;
        div {
          padding-top: 30px;
          @media screen and (max-width: $xl) {
            padding-top: 12px;
          }
          @media screen and (max-width: $xs) {
            font-size: 14px;
            line-height: 22px;
          }
        }
        img {
          padding-right: 19px;
          @media screen and (max-width: $l) {
            padding-right: 10px;
            width: 23px;
          }
        }
      }
      // .social {
      //   margin: 30px 0;
      //   width: 110px;
      //   // justify-content: space-between;
      //   display: flex;
      //   @media screen and (max-width: $xl) {
      //     margin: 23px 0;
      //     width: 106px;
      //   }
      //   img {
      //     @media screen and (max-width: $m) {
      //       height: 11px;
      //     }
      //     @media screen and (max-width: $m) {
      //       height: 14px;
      //     }
      //   }
      //   span + span {
      //     margin-left: 10px;
      //   }
      // }
      .map__wrapper {
        position: relative;
        margin-top: 26px;
        height: 170px;
        .fullScreen {
          svg {
            width: 16px;
            height: 16px;
          }
          cursor: pointer;
          position: absolute;
          left: 10px;
          top: 0;
        }
      }
      p {
        font-size: 16px;
        line-height: 12px;
        color: #0f001a;
        padding-top: 30px;
        margin: 0;
        span {
          padding-left: 10px;
        }
      }
    }
    input {
      display: block;
      width: 422px;
      height: 50px;
      margin-bottom: 24px;
      border: 1.2px solid #b4bec8;
      box-sizing: border-box;
      border-radius: 4px;
      padding-left: 14px;
      &:focus-within {
        outline: none;
      }
      @media screen and (max-width: $xxxl) {
        width: 394px;
      }
      @media screen and (max-width: $xxl) {
        width: 372px;
      }
      @media screen and (max-width: $xl) {
        width: 300px;
        margin-bottom: 13px;
        height: 37px;
      }
      @media screen and (max-width: $l) {
        width: 250px;
        margin-bottom: 13px;
        height: 35px;
      }
      @media screen and (max-width: $m) {
        width: 168px;
        margin-bottom: 13px;
        height: 24px;
      }
      @media screen and (max-width: $xs) {
        width: 335px;
        height: 39px;
        margin: 0 auto 13px;
      }
    }
    input::placeholder {
      font-size: 14px;
      @media screen and (max-width: $l) {
        font-size: 10px;
        padding-left: 10px;
      }
      @media screen and (max-width: $l) {
        font-size: 8px;
      }
      @media screen and (max-width: $xs) {
        font-size: 12px;
        line-height: 15px;
      }
    }
    .text {
      width: 372px;
      height: 113px;
      max-width: 100%;
      align-items: start;
      margin-bottom: 0;
      border: 1.2px solid #b4bec8;
      border-radius: 4px;
      padding-left: 12px;
      display: block;
      padding-top: 15px;
      &:focus-within {
        outline: none;
      }
      &::placeholder {
        font-size: 14px;
        @media screen and (max-width: $l) {
          font-size: 10px;
          padding-left: 10px;
        }
        @media screen and (max-width: $l) {
          font-size: 8px;
        }
        @media screen and (max-width: $xs) {
          font-size: 12px;
          line-height: 15px;
        }
      }
      @media screen and (max-width: $xl) {
        height: 114px;
      }
      @media screen and (max-width: $m) {
        height: 76px;
      }
      @media screen and (max-width: $xs) {
        height: 108px;
      }
    }
    .button {
      font-size: 18px;
      line-height: 22px;
      background: $dark-green;
      border-radius: 4px;
      border: none;
      color: #ffffff;
      margin-bottom: 0;
      margin-top: 40px;
      width: 422px;
      height: 50px;
      @media screen and (max-width: $xxxl) {
        width: 394px;
      }
      @media screen and (max-width: $xxl) {
        width: 372px;
      }
      @media screen and (max-width: $xl) {
        width: 300px;
        height: 36px;
        margin-top: 25px;
      }
      @media screen and (max-width: $l) {
        width: 250px;
        height: 33px;
      }
      @media screen and (max-width: $m) {
        width: 168px;
        height: 24px;
        font-size: 13px;
      }
      @media screen and (max-width: $xs) {
        width: 335px;
        height: 39.77px;
      }
      @media screen and (max-width: $xxs) {
        font-size: 16px;
      }
    }
  }
  .map {
    width: 45.34%;
    margin-top: 110px;
    @media screen and (max-width: $m) {
      width: 50%;
    }
    @media screen and (max-width: $xs) {
      display: none;
    }
    img {
      width: 100%;
      @media screen and (max-width: $xl) {
        width: 91%;
      }
      @media screen and (max-width: $m) {
        width: 93%;
      }
    }
  }
}
</style>
