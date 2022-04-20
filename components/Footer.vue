<template>
  <section class="footer">
    <div class="footer-logo">
      <img src="~/assets/images/footer-logo.svg" alt="" />
    </div>
    <hr />
    <div class="cols">
      <div>
        <h5>Services</h5>
        <ul>
          <li><Nuxt-link to="/ui-ux-design">UI/UX Design</Nuxt-link></li>
          <li>
            <Nuxt-link to="/development">Front-End Development</Nuxt-link>
          </li>
          <li><Nuxt-link to="/development">Back-End Development</Nuxt-link></li>
          <li><Nuxt-link to="/seo">SEO Optimization</Nuxt-link></li>
        </ul>
      </div>
      <div>
        <h5>About us</h5>
        <ul>
          <li><Nuxt-link to="/portfolioPage">Portfolio</Nuxt-link></li>
          <li><Nuxt-link to="/#testimonials">Testimonials</Nuxt-link></li>
          <li><Nuxt-link to="/#cooperations">Cooperations</Nuxt-link></li>
          <li><Nuxt-link to="/active-vacancies">Careers</Nuxt-link></li>
        </ul>
      </div>
      <div>
        <h5>Help</h5>
        <ul>
          <li><Nuxt-link to="/">Terms & Conditions</Nuxt-link></li>
          <li><Nuxt-link to="/">Privacy Policy</Nuxt-link></li>
        </ul>
      </div>
      <div class="touch">
        <h4>Get In Touch</h4>
        <ul>
          <li>
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4.69531C6.95833 4.69531 6.07292 5.0599 5.34375 5.78906C4.61458 6.51823 4.25 7.40365 4.25 8.44531C4.25 9.48698 4.61458 10.3724 5.34375 11.1016C6.07292 11.8307 6.95833 12.1953 8 12.1953C9.04167 12.1953 9.92708 11.8307 10.6562 11.1016C11.3854 10.3724 11.75 9.48698 11.75 8.44531C11.75 7.40365 11.3854 6.51823 10.6562 5.78906C9.92708 5.0599 9.04167 4.69531 8 4.69531ZM8 10.9453C7.32292 10.9453 6.73698 10.6979 6.24219 10.2031C5.7474 9.70833 5.5 9.1224 5.5 8.44531C5.5 7.76823 5.7474 7.18229 6.24219 6.6875C6.73698 6.19271 7.32292 5.94531 8 5.94531C8.67708 5.94531 9.26302 6.19271 9.75781 6.6875C10.2526 7.18229 10.5 7.76823 10.5 8.44531C10.5 9.1224 10.2526 9.70833 9.75781 10.2031C9.26302 10.6979 8.67708 10.9453 8 10.9453ZM8 0.945312C6.64583 0.945312 5.39583 1.28385 4.25 1.96094C3.10417 2.63802 2.19271 3.54948 1.51562 4.69531C0.838542 5.84115 0.5 7.09115 0.5 8.44531C0.5 9.27865 0.604167 10.0208 0.8125 10.6719C1.02083 11.2969 1.42448 12.0781 2.02344 13.0156C2.4401 13.6667 3.29948 14.9297 4.60156 16.8047L7.21875 20.5547C7.40104 20.8151 7.66146 20.9453 8 20.9453C8.33854 20.9453 8.59896 20.8151 8.78125 20.5547L11.3984 16.8047C12.7005 14.9297 13.5599 13.6667 13.9766 13.0156C14.5755 12.0781 14.9792 11.2969 15.1875 10.6719C15.3958 10.0208 15.5 9.27865 15.5 8.44531C15.5 7.09115 15.1615 5.84115 14.4844 4.69531C13.8073 3.54948 12.8958 2.63802 11.75 1.96094C10.6042 1.28385 9.35417 0.945312 8 0.945312ZM8 19.4609C7.375 18.5495 6.56771 17.3906 5.57812 15.9844C4.32812 14.1875 3.50781 13.0026 3.11719 12.4297C2.57031 11.5443 2.20573 10.8411 2.02344 10.3203C1.84115 9.77344 1.75 9.14844 1.75 8.44531C1.75 7.61198 1.90625 6.81771 2.21875 6.0625C2.53125 5.30729 2.98698 4.63021 3.58594 4.03125C4.1849 3.43229 4.86198 2.97656 5.61719 2.66406C6.3724 2.35156 7.16667 2.19531 8 2.19531C8.83333 2.19531 9.6276 2.35156 10.3828 2.66406C11.138 2.97656 11.8151 3.43229 12.4141 4.03125C13.013 4.63021 13.4688 5.30729 13.7812 6.0625C14.0938 6.81771 14.25 7.61198 14.25 8.44531C14.25 9.14844 14.1589 9.77344 13.9766 10.3203C13.7943 10.8411 13.4297 11.5443 12.8828 12.4297C12.4922 13.0026 11.6719 14.1875 10.4219 15.9844L8 19.4609Z"
                fill="white"
              />
            </svg>
            <p>IT Business Center 6/1 Abelyan st. 0038, Yerevan, Armenia</p>
          </li>
          <li>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5625 19.125L20.4609 15.1797C20.5391 14.8932 20.5 14.6198 20.3438 14.3594C20.2135 14.099 20.0182 13.9036 19.7578 13.7734L15.5391 11.9766C15.2786 11.8724 15.0182 11.8464 14.7578 11.8984C14.4974 11.9766 14.276 12.1198 14.0938 12.3281L12.375 14.4375C11.0208 13.7604 9.8099 12.888 8.74219 11.8203C7.67448 10.7526 6.80208 9.54167 6.125 8.1875L8.23438 6.46875C8.44271 6.28646 8.57292 6.0651 8.625 5.80469C8.70312 5.54427 8.6901 5.28385 8.58594 5.02344L6.78906 0.804687C6.65885 0.544271 6.46354 0.335937 6.20312 0.179687C5.94271 0.0494792 5.66927 0.0234375 5.38281 0.101562L1.4375 1C1.17708 1.07812 0.955729 1.22135 0.773438 1.42969C0.591146 1.66406 0.5 1.92448 0.5 2.21094C0.5 5.4401 1.30729 8.4349 2.92188 11.1953C4.51042 13.9036 6.64583 16.0391 9.32812 17.6016C12.1146 19.2422 15.1354 20.0625 18.3906 20.0625C18.651 20.0625 18.8854 19.9714 19.0938 19.7891C19.3281 19.6068 19.4844 19.3854 19.5625 19.125ZM1.75 2.21094L5.65625 1.3125L7.45312 5.53125L4.60156 7.83594C5.53906 9.86719 6.61979 11.4948 7.84375 12.7187C9.06771 13.9427 10.6953 15.0234 12.7266 15.9609L15.0312 13.1094L19.25 14.9062L18.3516 18.8125C15.3568 18.8125 12.5703 18.0573 9.99219 16.5469C7.46615 15.0625 5.47396 13.0703 4.01562 10.5703C2.50521 7.99219 1.75 5.20573 1.75 2.21094Z"
                fill="white"
              />
            </svg>
            <p>+374 94 21 30 55</p>
          </li>
          <li>
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.625 0.00390625L2.375 0.00390625C1.85417 0.00390625 1.41146 0.186198 1.04688 0.550781C0.682292 0.915365 0.5 1.35807 0.5 1.87891L0.5 13.1289C0.5 13.6497 0.682292 14.0924 1.04688 14.457C1.41146 14.8216 1.85417 15.0039 2.375 15.0039L18.625 15.0039C19.1458 15.0039 19.5885 14.8216 19.9531 14.457C20.3177 14.0924 20.5 13.6497 20.5 13.1289V1.87891C20.5 1.35807 20.3177 0.915365 19.9531 0.550781C19.5885 0.186198 19.1458 0.00390625 18.625 0.00390625ZM2.375 1.25391L18.625 1.25391C18.8073 1.25391 18.9505 1.31901 19.0547 1.44922C19.1849 1.55339 19.25 1.69661 19.25 1.87891V3.48047C18.3385 4.26172 16.3724 5.85026 13.3516 8.24609L12.9609 8.55859C12.4401 9.0013 12.0365 9.3138 11.75 9.49609C11.2552 9.83464 10.8385 10.0039 10.5 10.0039C10.1615 10.0039 9.74479 9.83464 9.25 9.49609C8.9375 9.3138 8.52083 9.0013 8 8.55859L7.64844 8.24609C4.6276 5.85026 2.66146 4.26172 1.75 3.48047V1.87891C1.75 1.69661 1.80208 1.55339 1.90625 1.44922C2.03646 1.31901 2.19271 1.25391 2.375 1.25391ZM18.625 13.7539L2.375 13.7539C2.19271 13.7539 2.03646 13.7018 1.90625 13.5977C1.80208 13.4674 1.75 13.3112 1.75 13.1289L1.75 5.12109C2.66146 5.85026 4.36719 7.21745 6.86719 9.22266L7.25781 9.53516C7.85677 10.056 8.35156 10.4336 8.74219 10.668C9.39323 11.0586 9.97917 11.2539 10.5 11.2539C11.0208 11.2539 11.6068 11.0586 12.2578 10.668C12.6224 10.4336 13.1172 10.056 13.7422 9.53516L14.1328 9.22266C16.6328 7.21745 18.3385 5.85026 19.25 5.12109V13.1289C19.25 13.3112 19.1849 13.4674 19.0547 13.5977C18.9505 13.7018 18.8073 13.7539 18.625 13.7539Z"
                fill="white"
              />
            </svg>
            <p class="mail">sharpant.llc@gmail.com</p>
          </li>
        </ul>
      </div>
      <div class="social-footer">
        <h5>Social Media</h5>
        <ul>
          <li>
            <a href="https://www.facebook.com/SharpAnt-100929048460345" target="_blank">
              <svg
                width="13"
                height="24"
                viewBox="0 0 13 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3092 3.985H12.5V0.169C12.122 0.117 10.8221 0 9.30827 0C6.14953 0 3.98571 1.987 3.98571 5.639V9H0.5V13.266H3.98571V24H8.25935V13.267H11.6041L12.135 9.001H8.25835V6.062C8.25935 4.829 8.59133 3.985 10.3092 3.985Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/80318202/admin/" target="_blank">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_460_6)">
                  <path
                    d="M24.494 23.9992V23.9982H24.5V15.1962C24.5 10.8902 23.573 7.57324 18.539 7.57324C16.119 7.57324 14.495 8.90124 13.832 10.1602H13.762V7.97524H8.98901V23.9982H13.959V16.0642C13.959 13.9752 14.355 11.9552 16.942 11.9552C19.491 11.9552 19.529 14.3392 19.529 16.1982V23.9992H24.494Z"
                    fill="white"
                  />
                  <path
                    d="M0.895996 7.97656H5.872V23.9996H0.895996V7.97656Z"
                    fill="white"
                  />
                  <path
                    d="M3.382 0C1.791 0 0.5 1.291 0.5 2.882C0.5 4.473 1.791 5.791 3.382 5.791C4.973 5.791 6.264 4.473 6.264 2.882C6.263 1.291 4.972 0 3.382 0V0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_460_6">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="copyright">
        <p>Copyright © 2022. All rights reserved.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.touch {
  ul {
    li {
      display: flex;
      align-items: center;
      width: 339px;
      max-width: 100%;
    }
    p {
      margin-bottom: 0;
      margin-left: 10px;
    }
  }
  .mail {
    text-decoration: underline;
  }
}
a {
  color: inherit;
}
.footer {
  background-color: $dark-green;
  padding-bottom: 46px;
  .footer-logo {
    padding-top: 63px;
    width: 74.2%;
    margin: 0 auto 83px;
    padding-left: 100px;
    @media screen and (max-width: $xl) {
      width: 82%;
      margin: 0 auto 58px;
    }
    @media screen and (max-width: $l) {
      padding-left: 0px;
      width: 78%;
      margin: 0 auto 28px;
    }
    @media screen and (max-width: $d) {
      padding-left: 28px;
    }
    @media screen and (max-width: $m) {
      margin: 0px auto 27px;
      width: 92%;
    }
    @media screen and (max-width: $xs) {
      padding-left: 20px;
      padding-top: 30px;
      margin: 0px auto 11px;
      width: 100%;
    }
    img {
      @media screen and (max-width: $xl) {
        width: 189px;
      }
      @media screen and (max-width: $l) {
        width: 189px;
      }
      @media screen and (max-width: $m) {
        width: 154px;
      }
      @media screen and (max-width: $xs) {
        width: 134px;
      }
    }
  }
  hr:not([size]) {
    height: unset;
  }
  hr {
    width: 74.2%;
    margin: auto;
    mix-blend-mode: normal;
    color: #ffffff;
    @media screen and (max-width: $xl) {
      width: 82%;
    }
    @media screen and (max-width: $m) {
      width: 92%;
    }
  }
  .cols {
    display: flex;
    color: #ffffff;
    width: 74.2%;
    margin: auto;
    justify-content: space-between;
    padding-left: 100px;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.1);
    padding-bottom: 38px;
    @media screen and (max-width: $xl) {
      width: 82%;
    }
    @media screen and (max-width: $l) {
      width: 80%;
      padding-left: 22px;
    }
    @media screen and (max-width: $d) {
      padding-left: 28px;
    }
    @media screen and (max-width: $m) {
      width: 94%;
    }
    @media screen and (max-width: $xs) {
      padding-left: 0px;
      flex-wrap: wrap;
      width: 90%;
    }
    h4 {
      padding-top: 30px;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: -0.3px;
      @media screen and (max-width: $m) {
        font-size: 19px;
      }
      @media screen and (max-width: $xs) {
        font-size: 16px;
      }
    }
    h5 {
      padding-top: 30px;
      font-weight: 500;
      font-size: 17px;
      line-height: 21px;
      letter-spacing: -0.231818px;
    }
    ul {
      padding-left: 0;
      li {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.204545px;
        list-style: none;
        padding-top: 21px;
        @media screen and (max-width: $xl) {
          font-size: 13px;
          padding-top: 11px;
        }
        @media screen and (max-width: $xl) {
          font-size: 16px;
          line-height: 36px;
        }
        @media screen and (max-width: $xl) {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
    form {
      margin-top: 58px;
      @media screen and (max-width: $xs) {
        margin-top: 32px;
      }
      .input {
        width: 319px;
        height: 66px;
        background-color: $dark-green;
        border: none;
        border-bottom: solid #ffffff42 0.5px;
        color: #ffffff;
        outline: unset;
        @media screen and (max-width: $xl) {
          height: 37px;
        }
        @media screen and (max-width: $l) {
          width: 246px;
        }
        @media screen and (max-width: $d) {
          height: 33px;
          width: 195px;
        }
        @media screen and (max-width: $m) {
          width: 170px;
          height: 26px;
        }
        @media screen and (max-width: $m) {
          width: 150px;
          height: 22px;
        }
      }
      ::placeholder {
        color: #ffffff;
        opacity: 0.8;
      }
      .button {
        width: 66px;
        height: 66px;
        border: none;
        border-radius: 8px 8px 0px 0px;
        @media screen and (max-width: $xl) {
          width: 42px;
          height: 39px;
        }
        @media screen and (max-width: $l) {
          width: 29px;
          height: 26px;
          border-radius: 4px 4px 0px 0px;
        }
        @media screen and (max-width: $d) {
          width: 39px;
          height: 34px;
        }
        @media screen and (max-width: $m) {
          width: 28px;
          height: 25px;
        }
        @media screen and (max-width: $xs) {
          width: 25.95px;
          height: 25.97px;
        }
        svg {
          width: 6px;
        }
      }
    }
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    width: 74.2%;
    margin: 27px auto 0;
    padding-left: 100px;
    @media screen and (max-width: $xl) {
      width: 82%;
    }
    @media screen and (max-width: $l) {
      width: 80%;
      padding-left: 22px;
    }
    @media screen and (max-width: $d) {
      padding-left: 28px;
    }
    @media screen and (max-width: $m) {
      width: 94%;
    }
    @media screen and (max-width: $xs) {
      display: flex;
      flex-direction: column-reverse;
      padding-left: unset;
    }
    .copyright {
      width: 100%;
      @media screen and (max-width: $xs) {
        text-align: center;
      }
      p {
        font-weight: 500;
        text-align: center;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.231818px;
        color: #ffffff;
        @media screen and (max-width: $d) {
          font-size: 10px;
        }
        @media screen and (max-width: $xs) {
          font-size: 12px;
          line-height: 15px;
          margin-top: 27px;
        }
      }
    }
  }
  .social-footer {
    ul {
      display: flex;
      justify-content: center;
      li + li {
        margin-left: 24px;
      }
    }
  }
}
</style>
