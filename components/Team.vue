<template>
  <section id="team" class="our-team">
    <div class="h2">
      <h2>Our team</h2>
      <img src="~/assets/images/h2-img.png" alt="" />
    </div>
    <div class="members">
      <div v-for="member in members" :key="member.id" class="member">
        <img
          :src="require(`~/assets/images/${member.image}`)"
          :alt="member.name"
        />
        <span class="name">{{ member.name }}</span>
        <span class="profession">{{ member.profession }}</span>
      </div>
      <div class="member">
        <img class="pt-5" src="~/assets/images/anonymous1.png" alt="" />
        <button type="button" class="name anonymous" @click="applyPopup = true">
          Become a member
        </button>
      </div>
      <transition name="fade">
        <ApplyVacancies v-if="applyPopup" @close="close" />
      </transition>
      <!-- Become a memeber old version -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="member_modal">
          <div class="green-sec">
            <p>Please apply for your dream job!</p>
          </div>
          <div class="form">
            <form action="">
              <input placeholder="Full Name" name="name" type="text" />
              <input placeholder="Email Address" name="email" type="email" />
              <div class="custom-select">
                <select>
                  <option value="0">Choose your Specialty</option>
                  <option value="1">Front-End Developer</option>
                  <option value="2">Back-End Developer</option>
                  <option value="3">Full Stack Developer</option>
                  <option value="4">UI/UX Designer</option>
                  <option value="5">IT Sales Manager</option>
                </select>
              </div>
              <label for="myfile">Please upload your CV</label>
              <input type="file" id="myfile" name="myfile" />
              <input class="button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="vacancies">
      <button @click="$router.push('/active-vacancies')">
        Active Vacancies
      </button>
    </div>
  </section>
</template>

<script>
import ApplyVacancies from "./Apply-vacancies.vue";
export default {
  data() {
    return {
      members: [
        {
          id: 1,
          image: "member1.png",
          name: "Jane Cooper",
          profession: "BACK-END DEVELOPER",
        },
        {
          id: 2,
          image: "member2.png",
          name: "Devon Lane",
          profession: "SOFTWARE DEVELOPER",
        },
        {
          id: 3,
          image: "member3.png",
          name: "Robert Fox",
          profession: "FRONTEND DEVELOPER",
        },
        {
          id: 4,
          image: "member4.png",
          name: "Annette Black",
          profession: "JAVASCRIPT DEVELOPER",
        },
        {
          id: 5,
          image: "member5.png",
          name: "Jane Cooper",
          profession: "BACK-END DEVELOPER",
        },
        {
          id: 6,
          image: "member6.png",
          name: "Devon Lane",
          profession: "SOFTWARE DEVELOPER",
        },
        {
          id: 7,
          image: "member7.png",
          name: "Robert Fox",
          profession: "FRONTEND DEVELOPER",
        },
      ],
      applyPopup: false,
    };
  },
  components: { ApplyVacancies },
  methods: {
    close() {
      this.applyPopup = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.our-team {
  margin-top: 0 !important;
  text-align: center;
  .h2 {
    margin: 120px auto 9px;
    text-align: center;
    @media screen and (max-width: $xl) {
      margin: 77px auto 9px;
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
      margin-left: -123px;
      @media screen and (max-width: $xl) {
        margin-top: -91px;
        margin-left: -99px;
        width: 119px;
      }
      @media screen and (max-width: $m) {
        margin-top: -98px;
        margin-left: -93px;
        width: 91px;
      }
      @media screen and (max-width: $xs) {
        margin-top: -74px;
        margin-left: -71px;
      }
    }
  }
  .members {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1344px;
    margin: auto;
    @media screen and (max-width: $xl) {
      width: 989px;
    }
    @media screen and (max-width: $l) {
      width: 892px;
    }
    @media screen and (max-width: $m) {
      width: 635px;
    }
    @media screen and (max-width: $xs) {
      width: 328px;
    }
    .member {
      margin-top: 70px;
      @media screen and (max-width: $xl) {
        margin-top: 35px;
      }
      @media screen and (max-width: $l) {
        width: 220px;
      }
      @media screen and (max-width: $m) {
        width: 147px;
      }
      span,
      img {
        display: block;
      }
      img {
        box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        @media screen and (max-width: $xl) {
          width: 230px;
        }
        @media screen and (max-width: $l) {
          width: 214px;
        }
        @media screen and (max-width: $m) {
          width: 147px;
        }
      }
      .pt-5 {
        @media screen and (max-width: $m) {
          padding-top: 2rem !important;
        }
      }
      .anonymous {
        border: 1px solid #40916C;
        border-radius: 4px;
        padding: 16px 24px;
        box-sizing: border-box;
        width: 100%;
        background: unset;
        color: #40916C;
        &:hover {
          background: linear-gradient(274.64deg, #40916C 0%, #52B788 100%);
          color: #ffffff;
        }
        @media screen and (max-width: $xl) {
          padding: 10px 17px;
        }
        @media screen and (max-width: $m) {
          padding: 7px 17px;
          margin-top: 14px !important;
          font-size: 12px;
        }
      }
      .name {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        margin-top: 20px;
        @media screen and (max-width: $xl) {
          font-size: 15px;
        }
        @media screen and (max-width: $m) {
          font-size: 10px;
          line-height: 17px;
          margin-top: 19px;
        }
        @media screen and (max-width: $m) {
          font-size: 12px;
          line-height: 15px;
        }
      }
      .profession {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: $dark-green;
        margin-top: 10px;
        @media screen and (max-width: $xl) {
          font-size: 14px;
          line-height: 8px;
        }
        @media screen and (max-width: $m) {
          font-size: 10px;
          line-height: 3px;
        }
        @media screen and (max-width: $xs) {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
    .modal {
      .member_modal {
        width: 600px;
        height: 704px;
        background: #ffffff;
        box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        margin: auto;
        .green-sec {
          height: 110px;
          background-color: $dark-green;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .form {
          width: 422px;
          margin: auto;
          input {
            width: 422px;
            height: 50px;
            margin-top: 50px;
            border: 1.2px solid #b4bec8 !important;
          }
          ::placeholder {
            font-size: 16px;
            line-height: 20px;
            color: #878787;
            opacity: 0.8;
            padding-left: 14px;
          }
          label {
            font-size: 20px;
            line-height: 24px;
            color: #000000;
            margin-top: 40px;
            margin-bottom: -20px;
            justify-content: start;
            display: flex;
          }
          .button {
            background: $dark-green;
            border-radius: 4px;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #ffffff;
          }
        }
      }
    }
  }
  .vacancies {
    margin-top: 80px;
    button {
      border: none;
      background: linear-gradient(274.64deg, #40916c 0%, #52b788 100%);
      box-shadow: 0px 6px 10px rgba(64, 145, 108, 0.15);
      border-radius: 4px;
      color: #ffffff;
      letter-spacing: 0.15em;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      padding: 16px 24px;
    }
  }
}
</style>
