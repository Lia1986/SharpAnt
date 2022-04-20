<template>
  <header>
    <div class="header-section" :class="{ 'error-page': error }">
      <div class="logo">
        <NuxtLink to="/"
          ><img src="~/assets/images/logo.svg" alt=""
        /></NuxtLink>
      </div>
      <div class="nav">
        <nav id="nav-header">
          <ul class="ul_list" :class="{ 'not-home': !home }">
            <li class="nav-li">
              <NuxtLink active-class="active" exact to="/">Home</NuxtLink>
            </li>
            <!-- Dropdown -->
            <li class="nav-item dropdown-wrap">
              <a
                @mouseover="dropdown = true"
                class="nav-link cup dropdown-toggle"
              >
                Our services
              </a>
              <transition name="fade">
                <div
                  @mouseleave="dropdown = false"
                  v-if="dropdown"
                  class="dropdown-list-menu"
                >
                  <NuxtLink class="dropdown-list-item" to="/ui-ux-design"
                    >UI/UX Design</NuxtLink
                  >
                  <NuxtLink class="dropdown-list-item" to="/development"
                    >Development
                  </NuxtLink>
                  <NuxtLink class="dropdown-list-item" to="/seo"
                    >SEO Optimization</NuxtLink
                  >
                </div>
              </transition>
            </li>
            <li class="nav-li">
              <NuxtLink to="/portfolioPage" active-class="active"
                >Portfolio</NuxtLink
              >
            </li>
            <li v-if="home" class="nav-li">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li v-if="home" class="nav-li">
              <a href="#cooperations">Cooperations</a>
            </li>
            <li v-if="home" class="nav-li">
              <NuxtLink to="/active-vacancies" active-class="active"
                >Careers</NuxtLink
              >
            </li>
            <li class="nav-li">
              <NuxtLink to="/contacts" active-class="active"
                >Contact us</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header-section-mob">
      <nav id="nav-header" class="navbar-expand-lg navbar-light">
        <div class="navbar-mob" :class="{ 'bg-whith': burger }">
          <div class="logo">
            <NuxtLink to="/"
              ><img src="~assets/images/logo.svg" alt=""
            /></NuxtLink>
          </div>
          <button
            class="burger"
            :class="{ opened: burger }"
            @click="burger = !burger"
            aria-label="Main Menu"
          >
            <svg width="24" height="24" viewBox="0 0 100 100">
              <path
                class="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path class="line line2" d="M 20,50 H 80" />
              <path
                class="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          <div
            class="navbar-collapse"
            :class="{ 'collapse-burger': collapseBurger }"
            id="navbarNav"
            @click="burger = false"
          >
            <ul class="navbar-nav">
              <!-- <li class="nav-li nav-item">
                <NuxtLink class="nav-link" to="/about">About us </NuxtLink>
              </li> -->
              <li class="nav-li nav-item">
                <a class="nav-link" href="#our-services">Our services</a>
              </li>
              <li class="nav-li nav-item">
                <NuxtLink class="nav-link" to="/portfolioPage"
                  >Portfolio</NuxtLink
                >
              </li>
              <li class="nav-li nav-item">
                <NuxtLink class="nav-link" to="/development"
                  >Development</NuxtLink
                >
              </li>
              <li class="nav-li nav-item">
                <NuxtLink class="nav-link" to="/seo">Seo</NuxtLink>
              </li>
              <li class="nav-li nav-item">
                <NuxtLink class="nav-link" to="/ui-ux-design"
                  >UI/UX design</NuxtLink
                >
              </li>
              <li class="nav-li nav-item">
                <NuxtLink class="nav-link" to="/contacts">Contact us</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import vClickOutside from "v-click-outside";
export default {
  props: {
    error: {
      type: Boolean,
      default: () => false,
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      dropdown: false,
      burger: false,
      collapseBurger: false,
    };
  },
  methods: {},
  watch: {
    burger() {
      if (this.burger) {
        this.collapseBurger = true;
        document.body.classList.add("stop-scrolling");
      } else {
        this.collapseBurger = false;
        document.body.classList.remove("stop-scrolling");
      }
    },
  },
  computed: {
    home() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style>
/* // disable scroll of body */

.stop-scrolling {
  height: 100%;
  overflow-y: hidden;
}
</style>

<style scoped lang="scss">
.dropdown-toggle {
  height: 38px;
}
.bg-whith {
  background: white;
}
.error-page {
  margin-top: 0 !important;
  padding-top: 30px;
  background-color: unset !important;
}
.active {
  border-bottom: solid 2px #40916c;
}
.header-section {
  display: flex;
  justify-content: space-between;
  background: white;
  align-items: start;
  width: 87.5%;
  margin: 30px auto 0;
  @media screen and (max-width: $xxl) {
    width: 91.5%;
  }
  @media screen and (max-width: $s) {
    display: none;
  }
  .logo {
    img {
      @media screen and (max-width: $l) {
        width: 169px;
      }
    }
  }
  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    width: 70%;
    justify-content: space-between;
    display: block !important;
    z-index: 999;
  }
  #nav-header {
    .ul_list {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      padding-left: 0;
      li {
        a {
          text-decoration: unset;
          color: #000000;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          @media screen and (max-width: $xl) {
            font-size: 16px;
          }
          @media screen and (max-width: $l) {
            font-size: 14px;
          }
          @media screen and (max-width: $m) {
            font-size: 11px;
          }
          padding: 0 17px 10px;
          @media screen and (max-width: $xxl) {
            padding: 0 5px 10px;
          }
          &:hover {
            border-bottom: solid 2px $dark-green;
          }
        }
        .nav-link {
          padding: unset;
        }
        .dropdown-list-menu {
          width: 250px !important;
          left: -20px;
          top: 35px;
          border: unset;
          padding: unset !important;
          position: absolute;
          background-color: #ffffff;
          filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
          @media screen and (max-width: $xxxl) {
            width: 230px !important;
          }
          @media screen and (max-width: $xxl) {
            width: 200px !important;
          }
          @media screen and (max-width: $xl) {
            width: 172px !important;
          }
          @media screen and (max-width: $d) {
            width: 160px !important;
          }
          @media screen and (max-width: $l) {
            width: 150px !important;
          }
          .dropdown-list-item {
            padding: 24px 0 24px 50px;
            border-bottom: 1px solid #0000001a;
            font-size: 18px;
            display: block;
            &:hover {
              background-color: #f1f1f1;
            }
            @media screen and (max-width: $xxxl) {
              padding: 22px 0 22px 36px;
              font-size: 16px;
            }
            @media screen and (max-width: $xxl) {
              padding: 16px 0 16px 28px;
              font-size: 14px;
            }
            @media screen and (max-width: $xl) {
              padding: 14px 0 14px 24px;
              font-size: 12px;
            }
            @media screen and (max-width: $d) {
              padding: 12px 0 12px 20px;
            }
          }
        }
      }
      .dropdown {
        &:hover {
          border-bottom: unset;
        }
      }
      .dropdown-wrap {
        position: relative;
      }
    }
  }
}

// mobile
.collapse-burger {
  height: 100vh !important;
  // overflow: visible !important;
  opacity: 1 !important;
}
.header-section-mob {
  @media screen and (min-width: $s) {
    display: none;
  }
  nav {
    display: list-item !important;
  }
  .logo {
    // @media screen and (max-width: $xs) {
    //   position: absolute;
    // }
    img {
      width: 134px;
    }
  }
  .navbar-toggler {
    @media screen and (max-width: $xs) {
      float: right;
      margin-right: 27px;
      width: 24px;
      height: 24px;
      border: none;
      padding: 0;
      &:focus {
        border: none;
        box-shadow: unset;
      }
    }
  }
  .navbar-mob {
    display: flex;
    @media screen and (max-width: $s) {
      justify-content: space-between;
      margin: 23px auto;
      width: 91%;
    }
    .navbar-collapse {
      padding: 0;
      position: absolute;
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: all 0.8s ease;
      z-index: 999;
      background: #ffffff !important;
      top: 76px;
      left: 0px;
      box-sizing: border-box;
      filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.1));
    }
    .navbar-nav {
      margin: 0 !important;
    }
    li {
      height: 57px;
    }
    .nav-link {
      border-top: 1px solid #c4c4c4;
      padding: 18px 0 18px 25px;
      color: #000000 !important;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
}

// hamburger
.burger {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  position: relative;
  z-index: 15;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

.not-home {
  justify-content: flex-end !important;
  li {
    margin-left: 20px !important;
  }
}
</style>
