<template>
  <div>
    <section class="development-section">
    <div class="text">
        <div class="header-content">
            <h1>Web Development</h1>
            <p>We are living in digital marketing epoch and having a unique website for your organizations,
                businesses or services is a must as it is an important component of your business'
                marketing campaigns. Websites play an essential role to help build a brand for your
                business in your specific industry. Our top-notch specialists with excellence in Web
                Design & Web Development services are willing to help you building websites for almost
                all business industries, such as:
               <ul>
                <li>Construction</li>
                <li>Travel & Hospitality</li>
                <li>Retail & E-Commerce</li>
                <li>Sports & Teams</li>
                <li>Musicians & Bands</li>
                <li>Healthcare</li>
                <div class="more">
                    <div><li> FinTech</li></div>
                    <div class="container demo">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <div class="more" @click="collapseMore = !collapseMore">
                                            <span v-if="!collapseMore" class="more-less">More</span>
                                            <span v-if="collapseMore" class="more-less">Less</span>
                                        </div>
                                    </h4>
                                </div>
                                <transition name="fade">
                                    <div id="collapseOne" class="panel-collapse" v-if="collapseMore">
                                      <div class="panel-body">
                                          <p>Developing a website is not enough for your business' success. We also
                                          make sure that internet marketing aspects like content, search engine
                                          marketing (SEM), search engine optimization (SEO), email marketing,
                                          content marketing are just up to date. For all these, you need experts who
                                          are aware of content strategy and digital marketing tips and can offer solutions
                                          to generate website traffic.
                                          </p>
                                          <p>
                                          We highly appreciate the importance and results of having aptly
                                          developed websites which are user friendly and have great design. We offer web
                                          development that is optimized for social media and digital marketing, for search engines to get more website traffic.
                                          </p>
                                          <p>
                                          We select the right technology to follow the right action plan for the perfect web experience and assign the right
                                          website design for your project type. Our company takes care of everything. With perfect brand research, planning, strategy, search engine optimization (SEO) plan, we are proud to say we miss nothing.
                                          </p>
                                    </div>
                                  </div>
                                </transition>
                                
                            </div>
                        </div><!-- panel-group -->
                    </div><!-- container -->
                </div>
            </ul>
            </p>
            <button @click="$router.push('/contacts')">Consult With Our Experts</button>
        </div>
    </div>
    <div class="img-head" data-aos="fade-left" data-aos-delay="500" data-aos-duration="2000">
        <img src="~/assets/images/development-screen.png" alt="">
    </div>
    </section>
    <client-only>
      <no-ssr>
        <Particles v-if="particles">
           <section  class="development-services">
            <div>
                <h2>Web Development Services</h2>
                <hr>
                <div class="advantages">
                    <div v-for="item in advantages" :key="item.id" class="item">
                        <div class="title-section">
                            <img :src="require(`~/assets/images/${item.image}`)" :alt="item.title">
                            <div class="title">
                                <h3>{{ item.title }}</h3>
                                <h4>{{ item.position }}</h4>
                            </div>
                        </div>
                        <p>
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
            </section>
        </Particles>
      </no-ssr>
    </client-only>
   
    <section class="about-development">
    <div class="frontEnd">
        <div class="text">
            <h2>Front-End Development</h2>
            <p>Our Front-End development team focuses on your business objectives to meet your business needs and offers only the best front-end development technologies and practices. We are keen to engage your customers and deliver great user experience.</p>
            <p>Using HTML, we markup the web pages and create hyperlinks that can turn letters into lists, tables images and other representations.
                We create unique look for your websites using CSS style sheets, effects and animations. And with JavaScript we transform an HTML page
                into a dynamic and interactive webpage, giving a possibility to add rich functionality and interactive elements. And in order to speed up front-end development we use JavaScript frameworks to provide a ready-made structure.</p>
            <p>Our specialized developers also take into account the fact that users can rich the webpages from all kind of devices, thus all our websites’ layouts are adapted to any screen size.</p>
            <p>We implement various types of testing to test individual parts of code, performance testing, UI testing to ensure that a website behaves as it should.</p>
        </div>
        <div class="image">
            <img src="~/assets/images/frontEnd.png" alt="">
        </div>
    </div>
    <div class="backEnd">
        <div class="image">
            <img src="~/assets/images/backEnd.png" alt="">
        </div>
        <div class="text">
            <h2>Back-End Development</h2>
                <p>Back-end is surely the most important part of any website and software
                    development. It is true that it is hidden and away from user eyes,
                    but it is the very thing that makes the software to work and serves
                    as a foundation for solid user experience. Without back-end, software
                    will not be able to function in the way user expects it to.
                    The back-end and front-end are bind in a way to create the full
                    user experience. Data generated in the back-end is passed to the
                    front-end and then it is presented to the user.
                    </p>
                <p>We provide custom back-end development services for various web,
                    and cloud-based apps across multiple domains. No matter what
                    requirements your business has, our back-end development team
                    will provide you with a customized solution that will help you
                    achieve your business goals.</p>
                    <p>Our core back-end development tech-stack is PHP and its frameworks,
                    and for Data Management we offer MySQL. PHP allows
                    developers to significantly speed up the wireframing stage due to
                    the lesser amount of interdependencies while retaining the same functionality
                    and productivity levels. PHP has many advantages as it provides with Simplicity,
                    Platform diversity, Flexibility, Scalability, High safety and Open-source.
                  </p>
        </div>
    </div>
    </section>
    <Portfolio1 />
    <section class="technologies-section">
    <div class="h2">
        <h2>Tech Stack</h2>
        <img src="~/assets/images/h2-img.png" alt="">
    </div>
    <div class="tab">
        <button class="tabLinks " :class="{'active-button': front}" @click="changeTech('front')">Front-End Technologies</button>
        <button class="tabLinks" :class="{'active-button': back}" @click="changeTech('back')">Back-End Technologies</button>
    </div>
    <div class="green-bg">
      <transition name="fade">
          <div v-show="front" class="tabContent">
            <div class="technologies">
              <div v-for="item in frontEndTech" :key="item.id" class="technology">
                  <div class="icon">
                      <img :src="require(`~/assets/images/${item.image}`)" :alt="item.name">
                  </div>
                  <div>
                      <p>{{ item.name }}</p>
                  </div>
              </div>
            </div>
          </div>
      </transition>
      <transition name="fade">
          <div v-show="back" class="tabContent">
            <div class="technologies">
                <div v-for="item in backEndTech" :key="item.id" class="technology">
                    <div class="icon">
                        <img :src="require(`~/assets/images/${item.image}`)" :alt="item.name">
                    </div>
                    <div>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
          </div>
      </transition>
    
 </div>
    </section>
    <Questions :questions="questions"/>
    <Services />
  </div>
</template>

<script>
import Portfolio1 from "~/components/Portfolio.vue";
import Services from "~/components/Services.vue";
import Questions from "~/components/Questions.vue";
import Particles from "~/components/Particles.vue";
export default {
  head: {
    title: "Development",
  },
  components: { Portfolio1, Services, Questions, Particles },
  data() {
    return {
      front: true,
      back: false,
      collapseMore: false,
      advantages: [
        {
          id: 1,
          image: "custom-website.png",
          title: "Custom Website",
          position: "Development",
          description: `We strive to build responsive customized websites, 
            and not cookie-cutter projects. We offer truly unique website, 
            tailored to users’ needs. Our custom web developers do not rely on templates, 
            or plugins. We provide our clients with a user-friendly, custom-built, reliable, 
            and stable website.`,
        },
        {
          id: 2,
          image: "e-commerce.png",
          title: "e-Commerce",
          position: "Development",
          description: `There is a growing tendency of running an eCommerce store and we 
            strive to create unique ecommerce solutions. 
            Boosting sales is the goal of our ecommerce development services. 
            We offer online shops of any complexity, 
            ultimate simplicity to both the users and website administrator.`,
        },
        {
          id: 3,
          image: "email-templates.png",
          title: "Email-Templates",
          position: "Development",
          description: `We develop responsive Email templates that are 
            tailored and adapted for a certain purpose and occasion and have 
            a certain marketing strategy. We offer personalized custom 
            coded email templates to ensure your business is delivering 
            the right content for your audience to consume it easily.`,
        },
        {
          id: 4,
          image: "cms-sites.png",
          title: "CMS",
          position: "Development",
          description: `Our CMS experienced developers are ready to build 
            and customize CMS solutions for all types of industries. 
            No matter what type of CMS platform you prefer, 
            our talented CMS developers can help you rich your goals. 
            We offer wide range of responsive templates, plugin integrations and much more.`,
        },
        {
          id: 5,
          image: "aplications.png",
          title: "Website application",
          position: "Development",
          description: `We have two approaches for web app development: 
            single page apps and progressive web apps. 
            We are specialized in designing and developing interactive SPAs. 
            We ensure responsiveness and cross-browser compatibility. 
            We offer SaaS/Xaas Products, web portals, ecommerce app types.`,
        },
        {
          id: 6,
          image: "cloud-service.png",
          title: "SAAS based apps",
          position: "Development",
          description: `Our experts are proficient in the technologies needed to 
            build a SaaS based solutions for your business. We use all 
            components required for a successful SaaS solution: web apps, 
            APIs, efficient data storage, and cloud hosting that is configurable 
            and easily accessible from anywhere.`,
        },
      ],
      frontEndTech: [
        {
          id: 1,
          image: "html-5.png",
          name: "HTML",
        },
        {
          id: 2,
          image: "css.png",
          name: "CSS",
        },
        {
          id: 3,
          image: "javascript.png",
          name: "Javascript",
        },
        {
          id: 4,
          image: "vue.png",
          name: "Vue.js",
        },
        {
          id: 5,
          image: "jquery.png",
          name: "jQuery",
        },
        {
          id: 6,
          image: "bootstrap.png",
          name: "Bootstrap",
        },
        {
          id: 7,
          image: "nuxt.png",
          name: "Nuxt.js",
        },
        {
          id: 8,
          image: "react.png",
          name: "React.js",
        },
      ],
      backEndTech: [
        {
          id: 1,
          image: "php.png",
          name: "PHP",
        },
        {
          id: 2,
          image: "laravel.png",
          name: "Laravel",
        },
        {
          id: 3,
          image: "mysql.png",
          name: "MySQL",
        },
        {
          id: 4,
          image: "symfony.png",
          name: "Symfony",
        },
      ],
      questions: [
        {
          id: 1,
          title: `Do you redesign existing websites?`,
          description: `Yes. We can redesign existing sites and retain your organization's
                        style or give you a completely new look.`,
          collapse: false,
        },
        {
          id: 2,
          title: `How many pages can I have on my website?`,
          description: `You can have as many pages as you'd like. In fact, the more the
                        better from a search engine's point of view!`,
          collapse: false,
        },
        {
          id: 3,
          title: `Will everyone see my website the same way?`,
          description: `Your visitors will see some things differently depending on their browser, screen
                        resolution settings and their computers.
                        We design sites with that in mind and preview them
                        in several browsers and resolution settings before publishing`,
          collapse: false,
        },
        {
          id: 4,
          title: `What kind of apps or websites have you designed before?`,
          description: `We have designed numerous apps and websites of a wide variety.
                        These include dating apps, apps for the healthcare industry, enterprise solutions,
                        food delivery apps, taxi booking apps and others. You can check out our portfolio.`,
          collapse: false,
        },
        {
          id: 5,
          title: `How long will it take to develop my website including all things?`,
          description: `Mainly, it depends upon the type and size of your website that you want to develop.
                        However, to know the exact timeline to develop your website, get in touch with our team, who will
                        comprehend and analyze your requirements and provide an exact timeline for your project.`,
          collapse: false,
        },
        {
          id: 6,
          title: `How much does it cost to develop a website? What if I provide the web design?`,
          description: `Well, the exact cost of developing your website depends upon the type and size of your website.
                        The cost varies according to the features and functionalities that you want to include. To get the exact cost,
                        just contact us and share your requirements. We will get back to you and provide an exact cost.`,
          collapse: false,
        },
        {
          id: 7,
          title: `What are the benefits of hiring a web developer from SharpAnt?`,
          description: `Our web developers have hands-on experience in designing and developing websites,
                        considering modern web development trends and technologies.
                        So, hiring a web developer from us ensures you advanced quality work to serve your business purpose.`,
          collapse: false,
        },
      ],
      particles: false,
    };
  },
  methods: {
    changeTech(name) {
      console.log(name);
      if (name === "front") {
        this.front = true;
        this.back = false;
      } else if (name === "back") {
        this.back = true;
        this.front = false;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.particles = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.development-section {
  display: flex;
  padding: 98px 0 147px 0;
  width: 87%;
  overflow: hidden;
  margin: auto;
  @media screen and (max-width: $s) {
    padding: 23px 0 52px 0;
  }
  @media screen and (max-width: $xs) {
    display: block;
  }
  .text {
    width: 66.3%;
    display: flex;
    @media screen and (max-width: $xs) {
      width: 100%;
    }
    .header-content {
      width: 86%;
      @media screen and (max-width: $xl) {
        width: 80%;
      }
      @media screen and (max-width: $m) {
        width: 90%;
      }
      @media screen and (max-width: $xs) {
        width: 100%;
        margin-top: 42px;
      }
    }
    h1 {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 0.07em;
      @media screen and (max-width: $xxl) {
        font-size: 32px;
      }
      @media screen and (max-width: $xl) {
        font-size: 25px;
        line-height: 38px;
        letter-spacing: 0.03em;
      }
      @media screen and (max-width: $l) {
        font-size: 23px;
        line-height: 28px;
      }
      @media screen and (max-width: $m) {
        font-size: 21px;
        line-height: 30px;
      }
      @media screen and (max-width: $xs) {
        font-size: 18px;
        line-height: 28px;
        text-align: center;
      }
    }
    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      margin: 16px 0 0;
      letter-spacing: 0.15em;
      padding-left: 5px;
      @media screen and (max-width: $xxl) {
        font-size: 16px;
        letter-spacing: 0.12em;
      }
      @media screen and (max-width: $l) {
        font-size: 14px;
        line-height: 25px;
      }
      @media screen and (max-width: $m) {
        font-size: 10px;
        letter-spacing: 0.11em;
        line-height: 19px;
      }
      @media screen and (max-width: $xs) {
        font-size: 14px;
        line-height: 22px;
      }
    }
    ul {
      padding-left: 9px;
      margin: 0 0 30px;
      li {
        font-size: 18px;
        line-height: 24px;
        color: #000000;
        letter-spacing: 0.15em;
        list-style-type: "-";
        @media screen and (max-width: $xxl) {
          font-size: 16px;
          letter-spacing: 0.12em;
        }
        @media screen and (max-width: $l) {
          font-size: 14px;
          line-height: 25px;
        }
        @media screen and (max-width: $m) {
          font-size: 10px;
          letter-spacing: 0.11em;
          line-height: 19px;
        }
        @media screen and (max-width: $xs) {
          font-size: 14px;
          line-height: 22px;
        }
      }
      .more {
        display: flex;
        .container.demo {
          margin-left: -122px;
          .panel-group {
            margin-bottom: 0;
            .panel-default {
              box-shadow: unset;
              border: unset;
              background-color: unset;
              .panel-heading {
                background-color: unset;
                border: unset;
                padding: 0;
                .panel-title {
                  padding-left: 131px;
                  color: #40916c;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: 0.15em;
                  .more {
                    text-decoration: underline;
                    cursor: pointer;
                    &:hover {
                      color: #40916c !important;
                    }
                    @media screen and (max-width: $xs) {
                      font-weight: 500;
                      font-size: 16px;
                      line-height: 24px;
                    }
                  }
                }
              }
              .panel-collapse {
                width: 175%;
                @media screen and (max-width: $xxl) {
                  margin-left: 23px;
                }
                @media screen and (max-width: $m) {
                  margin-left: 53px;
                }
                @media screen and (max-width: $xs) {
                  margin-left: 38px;
                  width: 110%;
                }
                .panel-body {
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: 0.15em;
                  border-top-color: transparent;
                  padding: 13px 0;
                }
              }
            }
          }
        }
      }
    }
    button {
      padding: 16px 24px;
      box-shadow: 0px 6px 10px rgba(64, 145, 108, 0.15);
      border-radius: 4px;
      align-items: center;
      text-align: center;
      color: #ffffff;
      border: unset;
      font-size: 18px;
      width: 329px;
      height: 54px;
      background: linear-gradient(274.64deg, $dark-green 0%, #52b788 100%);
      @media screen and (max-width: $xl) {
        font-size: 16px;
        width: 245px;
        height: 43px;
        padding: 8px 13px;
      }
      @media screen and (max-width: $l) {
        font-size: 14px;
        width: 216px;
        height: 39px;
        padding: 3px 7px;
      }
      @media screen and (max-width: $m) {
        font-size: 11px;
        width: 162px;
        height: 28px;
        padding: 3px 7px;
      }
      @media screen and (max-width: $xs) {
        font-size: 16px;
        width: 329px;
        height: 54px;
        padding: 16px 16px;
        margin: auto;
        display: block;
      }
    }
  }
  .img-head {
    width: 33.7%;
    text-align: right;
    @media screen and (max-width: $xs) {
      width: 100%;
      margin-top: 58px;
    }
    img {
      width: 100%;
    }
  }
}
.development-services {
  //   -moz-background-size: 100%;
  //   -webkit-background-size: 100%;
  //   -o-background-size: 100%;
  position: relative;
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
    @media screen and (max-width: $d) {
      width: 1097px;
      padding-bottom: 57px;
    }
    @media screen and (max-width: $l) {
      width: 939px;
      padding-bottom: 57px;
    }
    @media screen and (max-width: $m) {
      width: 886px;
      padding-bottom: 52px;
    }
    @media screen and (max-width: $s) {
      width: 720px;
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
        height: 280px;
      }
      @media screen and (max-width: 1024px) {
        margin: 0px 6px 18px;
        width: 300px;
        height: 313px;
      }
      @media screen and (max-width: $m) {
        width: 283px;
        height: 259px;
      }
      @media screen and (max-width: $s) {
        width: 228px;
        height: 210px;
      }
      @media screen and (max-width: $xs) {
        width: 335px;
        margin: 0 0 50px;
        height: 289px;
      }
      .title-section {
        display: flex;
        align-items: center;
        margin-left: 26px;
        margin-top: 28px;
        @media screen and (max-width: $m) {
          margin-left: 20px;
          margin-top: 21px;
        }
        @media screen and (max-width: $s) {
          margin-left: 13px;
          margin-top: 16px;
        }
        img {
          width: 48px;
          @media screen and (max-width: $s) {
            width: 35px;
          }
          @media screen and (max-width: $xs) {
            width: 46px;
          }
        }
        .title {
          margin: 0 0 0 21px;
          @media screen and (max-width: $m) {
            margin: 0 0 0 15px;
          }
          h3 {
            font-weight: 600;
            font-size: 20px;
            letter-spacing: 0.05em;
            color: #40916c;
            @media screen and (max-width: $xl) {
              font-size: 15px;
              line-height: 22px;
            }
            @media screen and (max-width: $m) {
              font-size: 12px;
              line-height: 18px;
            }
            @media screen and (max-width: $s) {
              margin-bottom: 0;
            }
            @media screen and (max-width: $xs) {
              font-size: 16px;
              line-height: 23px;
            }
          }
          h4 {
            font-weight: 500;
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
            }
            @media screen and (max-width: $xs) {
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
      p {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.05em;
        color: #000000;
        padding: 25px 22px 27px;
        margin-bottom: 0;
        @media screen and (max-width: $xl) {
          font-size: 11px;
          line-height: 22px;
        }
        @media screen and (max-width: $m) {
          font-size: 10px;
          line-height: 18px;
        }
        @media screen and (max-width: $s) {
          font-size: 9px;
          line-height: 16px;
          padding: 10px 12px 15px;
        }
        @media screen and (max-width: $xs) {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
}
.about-development {
  background: $green-gradient-bg;
  .frontEnd {
    display: flex;
    @media screen and (max-width: $s) {
      display: block;
    }
    .text {
      width: 66%;
      padding: 88px 89px 74px 120px;
      @media screen and (max-width: $xxl) {
        padding: 90px 61px 74px 71px;
      }
      @media screen and (max-width: $xl) {
        padding: 89px 19px 74px 45px;
      }
      @media screen and (max-width: $s) {
        width: 90%;
        margin: auto;
        padding: 25px 0 40px 0;
      }
      h2 {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 0.07em;
        color: #ffffff;
        margin-bottom: 32px;
        @media screen and (max-width: $xl) {
          font-size: 26px;
          margin-bottom: 26px;
        }
        @media screen and (max-width: $s) {
          font-size: 20px;
        }
      }
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.15em;
        color: #ffffff;
        @media screen and (max-width: $xl) {
          font-size: 14px;
          line-height: 18px;
        }
        @media screen and (max-width: $l) {
          font-size: 11px;
          line-height: 15px;
        }
        @media screen and (max-width: $s) {
          font-size: 15px;
          line-height: 24px;
        }
      }
    }
    .image {
      width: 44%;
      padding: 84px 120px 74px 89px;
      @media screen and (max-width: $xxl) {
        padding: 90px 59px 74px 56px;
      }
      @media screen and (max-width: $l) {
        padding: 90px 26px 74px 24px;
      }
      @media screen and (max-width: $s) {
        padding: 8px 26px 74px 24px;
        width: 79%;
        margin: auto;
      }
      @media screen and (max-width: $xs) {
        padding: 8px 0 0px 0;
        width: 87%;
      }
      img {
        @media screen and (max-width: $xxl) {
          width: 492px;
        }
        @media screen and (max-width: $xl) {
          width: 385px;
        }
        @media screen and (max-width: $l) {
          width: 335px;
        }
        @media screen and (max-width: $m) {
          width: 300px;
        }
        @media screen and (max-width: $s) {
          width: 100%;
        }
      }
    }
  }
  .backEnd {
    display: flex;
    @media screen and (max-width: $s) {
      display: flex;
      flex-direction: column-reverse;
    }
    .text {
      width: 66%;
      padding: 90px 120px 74px 74px;
      @media screen and (max-width: $xxl) {
        padding: 52px 44px 74px 49px;
      }
      @media screen and (max-width: $xl) {
        padding: 0 44px 74px 49px;
      }
      @media screen and (max-width: $s) {
        width: 90%;
        margin: auto;
        padding: 50px 0 34px 0;
      }
      h2 {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 0.07em;
        color: #ffffff;
        margin-bottom: 32px;
        @media screen and (max-width: $xl) {
          font-size: 26px;
          margin-bottom: 26px;
        }
        @media screen and (max-width: $s) {
          font-size: 20px;
        }
      }
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.15em;
        color: #ffffff;
        @media screen and (max-width: $l) {
          font-size: 11px;
          line-height: 15px;
        }
        @media screen and (max-width: $s) {
          font-size: 15px;
          line-height: 24px;
        }
      }
    }
    .image {
      width: 44%;
      padding: 106px 0 86px 120px;
      @media screen and (max-width: $xxl) {
        padding: 107px 0 86px 70px;
      }
      @media screen and (max-width: $xl) {
        padding: 11px 0 86px 45px;
      }
      @media screen and (max-width: $s) {
        padding: 8px 26px 74px 24px;
        width: 79%;
        margin: auto;
      }
      @media screen and (max-width: $xs) {
        padding: 8px 0 23px 0;
        width: 87%;
      }
      img {
        @media screen and (max-width: $xxl) {
          width: 492px;
        }
        @media screen and (max-width: $xl) {
          width: 409px;
        }
        @media screen and (max-width: $l) {
          width: 380px;
        }
        @media screen and (max-width: $m) {
          width: 320px;
        }
        @media screen and (max-width: $s) {
          width: 100%;
        }
      }
    }
  }
}
.technologies-section {
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
      margin-left: -155px;
      @media screen and (max-width: $xl) {
        margin-top: -75px;
        margin-left: -100px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -72px;
        margin-left: -80px;
        width: 96px;
      }
      @media screen and (max-width: $xs) {
        margin-top: -74px;
        margin-left: -78px;
      }
    }
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
      min-width: 230px;
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
  .green-bg {
    background: $green-gradient-bg;
    margin-top: 47px;
    overflow: hidden;
    @media screen and (max-width: $l) {
      height: 337px !important;
    }

    @media screen and (max-width: $s) {
      height: 393px !important;
    }
    @media screen and (max-width: $xs) {
      height: 603px !important;
    }
    .tabContent {
      .technologies {
        display: flex;
        flex-wrap: wrap;
        height: 528px;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        margin: auto;
        @media screen and (max-width: $xxxl) {
          width: 90%;
        }
        @media screen and (max-width: $xxl) {
          width: 97%;
          height: 476px;
        }
        @media screen and (max-width: $xl) {
          width: 93%;
        }
        @media screen and (max-width: $d) {
          height: 414px;
        }
        @media screen and (max-width: $l) {
          height: 337px;
        }
        @media screen and (max-width: $m) {
          width: 86%;
          height: 343px;
          padding: 18px 0;
        }
        @media screen and (max-width: $s) {
          width: 95%;
          height: 393px;
        }
        @media screen and (max-width: $xs) {
          width: 81%;
          height: 603px;
        }
        @media screen and (max-width: $xxs) {
          width: 90%;
          height: 603px;
        }
        .technology {
          width: 350px;
          height: 170px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          @media screen and (max-width: $xxl) {
            width: 326px;
            height: 155px;
          }
          @media screen and (max-width: $xl) {
            width: 292px;
            height: 133px;
          }
          @media screen and (max-width: $d) {
            width: 277px;
            height: 121px;
          }
          @media screen and (max-width: $l) {
            width: 225px;
            height: 108px;
          }
          @media screen and (max-width: $m) {
            width: 171px;
            height: 88px;
          }
          @media screen and (max-width: $s) {
            width: 189px;
            height: 95px;
          }
          @media screen and (max-width: $xs) {
            width: 159px;
            height: 123px;
            display: block;
            padding-top: 15px;
          }
          .icon {
            margin: 0 36px 0 64px;
            @media screen and (max-width: $xl) {
              margin: 0 38px 0 39px;
            }
            @media screen and (max-width: $d) {
              margin: 0 18px 0 37px;
            }
            @media screen and (max-width: $l) {
              margin: 0 18px 0 16px;
            }
            @media screen and (max-width: $m) {
              margin: 0 13px 0 18px;
            }
            @media screen and (max-width: $s) {
              margin: 0 11px 0 16px;
            }
            @media screen and (max-width: $xs) {
              margin: 0 auto 15px;
            }
            .figma {
              @media screen and (max-width: $xs) {
                width: 37px;
                height: 57px;
              }
            }
            img {
              width: 44px;
              height: auto;
              @media screen and (max-width: $s) {
                width: 33px;
              }
              @media screen and (max-width: $xs) {
                width: 50px;
              }
            }
          }
          p {
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
            color: #000000;
            margin-bottom: 0;
            @media screen and (max-width: $l) {
              font-size: 17px;
              line-height: 24px;
            }
            @media screen and (max-width: $xs) {
              font-size: 16px;
              line-height: 16px;
            }
          }
        }
      }
    }
    .active-tab {
      display: block;
    }
  }
}
</style>