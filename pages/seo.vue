<template>
  <div>
    <section class="seo-section">
      <div class="text">
        <div class="header-content">
          <h1>SEO Optimization</h1>
          <p>
            Search engine optimization (SEO) is the process where a number of
            activities are performed to help your customers connect with your
            business online. Our experienced SEO specialists offer modern SEO
            services, like on-page SEO, off-page SEO, technical and Local SEO.
            It takes us a while to review your website, analyze, strategies and
            determine what type of SEO optimization needs to be performed, how
            to increase your traffic & rankings, how to drive business to your
            site.
          </p>
          <p>
            We are willing to assist you if you encountered with the following
          </p>
          <ul>
            <li>Your website isn't being found online.</li>
            <li>
              Your website traffic has decreased recently and you don’t know
              why.
            </li>
            <li>
              Your volume of incoming calls and leads has started to decline.
            </li>
            <li>
              Your volume of incoming calls and leads has started to decline.
            </li>
            <li>
              You’re starting a new business and want to generate sales quickly.
            </li>
          </ul>
          <p>
            We offer SEO solutions to solve your problems whatever type of
            optimization it requires. Check out our SEO services and get in
            touch with one of our experts!
          </p>

          <button @click="$router.push('/contacts')">
            Consult With Our Experts
          </button>
        </div>
      </div>
      <div
        class="img-head"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="2000"
      >
        <img src="~/assets/images/seo_desctop.png" alt="" />
      </div>
    </section>
    <client-only>
      <no-ssr>
        <Particles v-if="particles">
          <section class="seo-optimization-services">
            <div>
              <h2>SEO Optimization Services</h2>
              <hr />
              <div class="cards">
                <div v-for="item in services" :key="item.id" class="item">
                  <div class="title-section">
                    <img
                      :src="require(`~/assets/images/${item.image}`)"
                      :alt="item.title"
                    />
                    <div class="title">
                      <h3>{{ item.title }}</h3>
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

    <section class="online_tool">
      <div class="tool_header">
        <h2>Check your website performance with this online tool.</h2>
        <p>Then, get tips to improve your user experience.</p>
      </div>
      <div class="tool-section">
        <form action="">
          <input
            class="text"
            type="text"
            v-model="pageUrl"
            placeholder="Enter a web page URL"
          />
          <input
            @click.prevent="toSpeedPage"
            class="button"
            type="submit"
            value="Run Audit"
          />
        </form>
        <!-- <div class="results">
          <div class="result">
            <div>Performance</div>
            <div><img src="~/assets/images/null.png" alt="" /></div>
          </div>
          <div class="result">
            <div>Accessibility</div>
            <div><img src="~/assets/images/null.png" alt="" /></div>
          </div>
          <div class="result">
            <div>Best Practices</div>
            <div><img src="~/assets/images/null.png" alt="" /></div>
          </div>
          <div class="result">
            <div>SEO</div>
            <div><img src="~/assets/images/null.png" alt="" /></div>
          </div>
        </div>
        <div class="lights">
          <span class="span_t">Score Sale:</span>
          <span><img src="~/assets/images/green.png" alt="" /></span
          ><span>0-49</span>
          <span><img src="~/assets/images/orange.png" alt="" /></span
          ><span>50-89</span>
          <span><img src="~/assets/images/red.png" alt="" /></span
          ><span>90-100</span>
        </div> -->
      </div>
    </section>
    <section class="steps_section">
      <h3>10 Steps to SEO Success</h3>
      <transition name="fade">
        <div :key="checkedStep.id" class="step">
          <h4>{{ checkedStep.id }}. {{ checkedStep.title }}</h4>
          <p>
            {{ checkedStep.description }}
          </p>
        </div>
      </transition>

      <div
        class="green-lines d-flex align-items-end justify-content-center tab"
      >
        <div
          v-for="item in steps"
          :key="item.id"
          class="line-group"
          :class="{ 'active-tab': currentStep === item.id }"
          @mouseover="currentStep = item.id"
        >
          <button class="tablinks">
            <img
              :src="require(`~/assets/images/${item.image}`)"
              :alt="item.class"
            />
          </button>
          <div class="line" :class="item.class">
            <p>{{ item.number }}</p>
          </div>
        </div>
      </div>
    </section>
    <Questions :questions="questions" />
    <Services />
  </div>
</template>

<script>
import Questions from "~/components/Questions.vue";
import Services from "~/components/Services.vue";
import Particles from "~/components/Particles.vue";
import { mapActions } from "vuex";
export default {
  head: {
    title: "Seo",
  },
  components: { Questions, Services, Particles },
  data() {
    return {
      services: [
        {
          id: 1,
          image: "keyword.png",
          title: "Keyword Research",
          description: `Writing the right keywords to target your business 
          goals is the heart of SEO effectiveness. Keywords are direct 
          linkages between a searcher's query and your website. 
          Our SEO specialist will review your website's keywords, 
          conduct additional keyword research to build a list of keywords 
          that makes the most sense for your website.`,
        },
        {
          id: 2,
          image: "link.png",
          title: "Link Building",
          description: `Backlinks serve a critical role for users, search engines, 
          and businesses. Backlinks are an essential component in order to have 
          higher ranking in search results. We offer you a dedicated link building 
          so enabling search engines recognize when one website links to another 
          and in the result website becomes more worthy of appearing within your search results.`,
        },
        {
          id: 3,
          image: "technical.png",
          title: "Technical SEO",
          description: `Technical SEO is a very important step in the whole SEO process. 
          Our SEO experts will use SSL, ensure your site is mobile-friendly, 
          speed your site up, thus create an XML sitemap and enable AMP. 
          There are a number of other features too we carry out like: optimizing Robots.txt, 
          specifying a Preferred Domain, adding the structured data markup etc.`,
        },
        {
          id: 4,
          image: "search.png",
          title: "On-page SEO",
          description: `The goal of on-page SEO is to help search engines, like Google, 
          recognize your website for the words you want to rank for. Thus, 
          we offer a number of On-Page SEO Services like: on-page website auditing, 
          internal linking structure analysis, web analytics auditing, 
          META tag optimization and UI/UX redesign suggestions.`,
        },
        {
          id: 5,
          image: "local.png",
          title: "Local SEO",
          description: `We ensure to increase Leads from Local Customers with our Local SEO Services. 
          If your business and sales are geographically-related, 
          our experts will optimize your website to increase its local online visibility, 
          generate more organic traffic to your website, outrank its local competitors thus 
          increase leads and sales from within a specific service area.`,
        },
        {
          id: 6,
          image: "off_page.png",
          title: "Off-page SEO",
          description: `Off-page SEO helps search engines, like Google understand what 
          others think about your product, services, or website. 
          We perform a number of off-page SEO activities like: content marketing, 
          broken link building, commenting, social networking, forums, social bookmarking, 
          newsletters to ensure the best results.`,
        },
      ],
      questions: [
        {
          id: 1,
          title: `Can you perform an SEO audit on my website?`,
          description: `Sure, we can! We offer multiple levels of audits. 
          Our basic SEO audit offers insights into your optimization and 
          website performance to determine which type of SEO optimization is needed for your case.`,
          collapse: false,
        },
        {
          id: 2,
          title: `Does your SEO work for all major search engines?`,
          description: `Yes! Our SEO experts focuses on optimizing your website for all major search engines. 
          Some of the most popular search engines include: Google, Bing, Yahoo, Baidu, Yandex and Ask.`,
          collapse: false,
        },
        {
          id: 3,
          title: `How do you start to rank my website?`,
          description: `We start by evaluating your keywords, your competition, 
          your website structure and content. 
          We do our own keyword research to see exactly what keywords people are 
          using when searching for your type of product and or service. 
          Together we develop a strategy to get your website top rankings on major search engines.`,
          collapse: false,
        },
        {
          id: 4,
          title: `Can you provide me a link to where I can see the links you have created to my website?`,
          description: `To check on the links we’ve created to your website, 
          sign in at Google Search Console, click on “Traffic” in the sidebar, 
          and select “Links to your site”. From there you can download a list of recent links.`,
          collapse: false,
        },
        {
          id: 5,
          title: `How long does it take to rank on google?`,
          description: `A good answer is somewhere between six months and one year, 
          but this is very much based on the level of resources allocated to your strategy, 
          the level of competition, and what others who compete for the same queries are doing.`,
          collapse: false,
        },
        {
          id: 6,
          title: `What PageSpeed Score should I aim for?`,
          description: `If your PageSpeed score is 85/100, it may be difficult, 
          or time-consuming to get to even 90/100. If your competitors are all below 80/100, 
          there are probably more pressing priorities to focus on.`,
          collapse: false,
        },
        {
          id: 7,
          title: `Which SEO techniques are popular?`,
          description: `Where to begin? Link building. Keyword research. Site audits. On-page SEO. Updating pages for relevancy. All are important.`,
          collapse: false,
        },
      ],
      stepsContent: [
        {
          id: 1,
          title: `Your Goals`,
          description: `We perform a marketing consultation with you 
          to define your digital marketing goals and choose the right 
          SEO objectives for your business. Your goals must tie into 
          your company goals, your marketing goals and provide specific, 
          measurable metrics. We create an initial scheme to strategize 
          your SEO requirements and target your goals.`,
        },
        {
          id: 2,
          title: `Website Audit`,
          description: `We take a number of actionable steps to give you 
          a full analysis of everything related to your website’s level 
          of search visibility. We provide a comprehensive audit service 
          to give you feedback on everything from your technical issues 
          to your content.`,
        },
        {
          id: 3,
          title: `Website Audit`,
          description: `We are performing a powerful research strategy 
          to distinguish a competitive analysis for your website SEO. 
          This helps to find who are your actual SEO competitors, 
          find competitors’ weaknesses, and capitalize on them, 
          find competitors’ strengths, and replicate them, get all 
          everything to beat the competition.`,
        },
        {
          id: 4,
          title: `Keyword Research`,
          description: `The power of keyword research is in better 
          understanding your target market and how users are searching 
          for your content, services, or products. Our specialists 
          determine which strategic keywords you need and specify 
          list of keywords that are most valuable for your business' growth.`,
        },
        {
          id: 5,
          title: `Mapping Optimization`,
          description: `Our SEO team focuses on specific keywords and maps 
          keywords to assign them to specific pages. We strategically match 
          keywords to particular topics which gives a clear structure for 
          your content. This crucial step helps users find you when 
          searching for terms relevant to your business, products or services.`,
        },
        {
          id: 6,
          title: `Implementation`,
          description: `SEO implementation is the actual SEO process by which 
          our SEO experts will improve your entire website and make it more 
          user friendly, search engine friendly increasing the usability of 
          your website, improving the navigation structure. Off-page SEO is 
          also a part of our SEO implementation which helps drive targeted 
          traffic to your website.`,
        },
        {
          id: 7,
          title: `Monitor Traffic and Ranking`,
          description: `To monitor your site performance, we analyze metrics 
          received via Google Analytics and Search Console. 
          They provide with tools of data tracking and reports. 
          We provide you with automated tool that keeps track of 
          your SEO progress in saved reports, so you can compare 
          your rankings over time.`,
        },
        {
          id: 8,
          title: `Refine SEO Plan `,
          description: `Our SEO specialists will analyze the received 
          data and metrics and modify the SEO plan. We refine your 
          SEO plan by continuing to improve your search engine optimization. 
          Our goal is to provide you with best services and convert your 
          every visitor into a potential customer.`,
        },
        {
          id: 9,
          title: `Content Marketing`,
          description: `Our specialized SEO team will use a special 
          marketing technique to create and distribute valuable, 
          relevant and consistent content and to attract and acquire a 
          clearly defined audience. Our content marketing service 
          provides your website with the objective of driving profitable customer action.`,
        },
        {
          id: 10,
          title: `Reporting & Refinement`,
          description: `We analyze the results of the services initially 
          provided to make sure they are working. We review the 
          activities and then use them to provide continuous 
          SEO improvement. Our focus is typically on domain metrics, 
          organic traffic, and rankings which allow to stay on top of 
          your site’s positioning in the marketplace.`,
        },
      ],
      steps: [
        {
          id: 1,
          image: "one.png",
          number: "01",
          class: "one",
        },
        {
          id: 2,
          image: "two.png",
          number: "02",
          class: "two",
        },
        {
          id: 3,
          image: "three.png",
          number: "03",
          class: "three",
        },
        {
          id: 4,
          image: "four.png",
          number: "04",
          class: "four",
        },
        {
          id: 5,
          image: "five.png",
          number: "05",
          class: "five",
        },
        {
          id: 6,
          image: "six.png",
          number: "06",
          class: "six",
        },
        {
          id: 7,
          image: "seven.png",
          number: "07",
          class: "seven",
        },
        {
          id: 8,
          image: "eight.png",
          number: "08",
          class: "eight",
        },
        {
          id: 9,
          image: "nine.png",
          number: "09",
          class: "nine",
        },
        {
          id: 10,
          image: "ten.png",
          number: "10",
          class: "ten",
        },
      ],
      currentStep: 1,
      pageUrl: "",
      pageSpeedData: {},
      particles: false,
    };
  },
  methods: {
    ...mapActions({
      getPageSpeedData: "modules/seo/getPageSpeedData",
    }),
    // getSpeedPage() {
    //   this.getPageSpeedData(this.pageUrl)
    //     .then((response) => (this.pageSpeedData = response))
    //     .catch((error) => console.log(error));
    // },
    toSpeedPage() {
      window.open(`https://pagespeed.web.dev/report?url=${this.pageUrl}`);
    },
  },
  computed: {
    checkedStep() {
      return this.stepsContent.filter(
        (elem) => elem.id === this.currentStep
      )[0];
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
.seo-section {
  display: flex;
  padding: 98px 0 147px 0;
  width: 87%;
  margin: auto;
  overflow: hidden;
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
      width: 93.1%;
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
      margin-bottom: 16px;
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
    p,
    ul {
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.15em;
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
      padding-left: 17px;
      li {
        list-style-type: disc;
      }
    }
    button {
      margin-top: 32px;
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
        margin: 16px auto;
        display: block;
      }
    }
  }
  .img-head {
    width: 41.9%;
    text-align: right;
    @media screen and (max-width: $xs) {
      width: 100%;
      margin-top: 8px;
    }
    img {
      width: 100%;
    }
  }
}
.seo-optimization-services {
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
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
  .cards {
    width: 1450px;
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    @media screen and (max-width: $xl) {
      width: 1087px;
    }
    @media screen and (max-width: $d) {
      width: 937px;
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
      height: 304px;
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
      }
      @media screen and (max-width: 1024px) {
        margin: 0px 6px 18px;
        width: 300px;
        height: 281px;
      }
      @media screen and (max-width: $m) {
        width: 283px;
      }
      @media screen and (max-width: $s) {
        width: 228px;
        height: 228px;
      }
      @media screen and (max-width: $xs) {
        width: 335px;
        margin: 0 0 50px;
        height: 309px;
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
.online_tool {
  .tool_header {
    text-align: center;
    padding: 120px 0 79px;
    h2 {
      margin-bottom: 32px;
      font-size: 30px;
      line-height: 37px;
      letter-spacing: 0.05em;
      color: #222222;
    }
    p {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #222222;
    }
  }
  .tool-section {
    background: $green-gradient-bg;
    padding: 60px 0 106px;
    form {
      display: flex;
      justify-content: center;
      padding: 0 15px;
      input {
        &:focus-within {
          outline: none;
        }
      }
      input[type="submit"] {
        transition: all 0.3s;
        border: none;
        &:hover {
          background: linear-gradient(274.64deg, #40916c 0%, #52b788 100%);
          color: #fff;
        }
      }
      @media screen and (max-width: $xs) {
        flex-direction: column;
        align-items: center;
        .button {
          margin-left: 0 !important;
          margin-top: 25px;
        }
      }
      .text {
        width: 900px;
        max-width: 100%;
        height: 56px;
        border: 1px solid #ced4da;
        box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        padding: 16px;
      }
      ::placeholder {
        font-size: 16px;
        line-height: 24px;
      }
      .button {
        width: 200px;
        height: 56px;
        border: 1px solid #ced4da;
        box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #40916c;
        background-color: #ffffff;
        margin-left: 69px;
      }
    }
    .results {
      display: flex;
      justify-content: center;
      margin-top: 28px;
      .result {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: inherit;
        width: 293px;
        height: 86px;
        background-color: #ffffff;
        font-size: 20px;
        line-height: 24px;
        padding: 31px 16px;
      }
    }
    .lights {
      width: 1171px;
      margin: 20px auto 0;
      text-align: right;
      .span_t {
        font-size: 18px;
      }
      span {
        margin-left: 10px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #ffffff;
      }
    }
  }
}
.steps_section {
  padding: 120px 0 90px;
  position: relative;
  text-align: center;
  background: $gray-bg;
  @media screen and (max-width: $m) {
    padding: 70px 0 !important;
  }
  @media screen and (max-width: $s) {
    padding: 50px 0 40px !important;
  }
  @media screen and (max-width: $xxs) {
    display: none;
  }
  h3 {
    margin-bottom: 151px;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.05em;
    color: #222222;
  }
  @media screen and (max-width: $xs) {
    h3 {
      margin-bottom: 30px !important;
    }
  }
  @media screen and (max-width: $xxs) {
    h3 {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .step {
    position: absolute;
    top: 237px;
    left: 220px;
    box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    background-color: #ffffff;
    padding: 28px 24px 30px;
    width: 620px;
    height: 260px;
    text-align: left;
    @media screen and (max-width: $d) {
      top: 220px;
      left: 100px;
    }
    @media screen and (max-width: $m) {
      top: 150px;
      left: 50px;
      width: 580px;
    }
    @media screen and (max-width: $s) {
      top: 100px;
      left: 30px;
      width: 480px;
      h4 {
        font-size: 26px !important;
      }
      p {
        font-size: 14px !important;
        line-height: 20px !important;
      }
    }
    @media screen and (max-width: $xs) {
      position: static !important;
      margin: 0 auto;
      width: 344px !important;
      height: unset !important;
      padding: 15px 15px 17px;
      h4 {
        font-size: 14px !important;
      }
      p {
        font-size: 10px !important;
        line-height: 18px !important;
        margin-bottom: 0;
      }
    }
    h4 {
      font-weight: 500;
      font-size: 30px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #40916c;
    }
    p {
      margin-top: 20px;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #000000;
    }
  }
  .green-lines {
    .active-tab {
      .line {
        background: #fff !important;
        p {
          color: #40916c !important;
        }
      }
    }
    .line-group {
      cursor: pointer;
      button {
        border: unset;
        background: unset;
        img {
          max-width: 100%;
          margin-bottom: -46px;
        }
      }
      @media screen and (max-width: $s) {
        button {
          width: 50px;
          img {
            margin-bottom: -24px;
          }
        }
      }
      @media screen and (max-width: $xs) {
        button {
          width: 18px;
          img {
            margin-bottom: -24px;
          }
        }
      }
      .line {
        border-radius: 20px;
        width: 130px;
        background: $lines-green-bg;
        margin: 0 10px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        @media screen and (max-width: 1444px) {
          width: 120px;
        }
        @media screen and (max-width: $xl) {
          width: 110px;
        }
        @media screen and (max-width: $d) {
          width: 100px;
        }
        @media screen and (max-width: $l) {
          width: 90px;
        }
        @media screen and (max-width: $m) {
          width: 75px;
        }
        @media screen and (max-width: $s) {
          width: 55px;
          p {
            font-size: 28px !important;
            line-height: 32px !important;
          }
        }
        @media screen and (max-width: $xs) {
          width: 30px;
          border-radius: 3px;
          margin: 0 5px;
          p {
            font-size: 12px !important;
            line-height: 16px !important;
            margin-bottom: 0 !important;
          }
        }
        @media screen and (max-width: $xxs) {
          margin: 0 2px;
        }
        p {
          font-weight: 500;
          font-size: 40px;
          line-height: 49px;
          color: #ffffff;
        }
      }

      @media screen and (max-width: $s) {
        .one {
          height: 78px !important;
        }
        .two {
          height: 116px !important;
        }
        .three {
          height: 155px !important;
        }
        .four {
          height: 193px !important;
        }
        .five {
          height: 231px !important;
        }
        .six {
          height: 270px !important;
        }
        .seven {
          height: 328px !important;
        }
        .eight {
          height: 384px !important;
        }
        .nine {
          height: 459px !important;
        }
        .ten {
          height: 521px !important;
        }
      }
      @media screen and (max-width: $xs) {
        .one {
          height: 22px !important;
        }
        .two {
          height: 30px !important;
        }
        .three {
          height: 40px !important;
        }
        .four {
          height: 48px !important;
        }
        .five {
          height: 56px !important;
        }
        .six {
          height: 65px !important;
        }
        .seven {
          height: 78px !important;
        }
        .eight {
          height: 91px !important;
        }
        .nine {
          height: 108px !important;
        }
        .ten {
          height: 122px !important;
        }
      }
      .one {
        height: 98px;
      }
      .two {
        height: 136px;
      }
      .three {
        height: 175px;
      }
      .four {
        height: 213px;
      }
      .five {
        height: 251px;
      }
      .six {
        height: 290px;
      }
      .seven {
        height: 348px;
      }
      .eight {
        height: 404px;
      }
      .nine {
        height: 479px;
      }
      .ten {
        height: 541px;
      }
    }
  }
}
</style>
