<template>
  <div class="apply">
    <div class="apply__popup">
      <div class="apply__popup-header">
        <svg
          @click="closePopup"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="white"
          />
        </svg>
        <h4>Please apply for your dream job!</h4>
      </div>
      <div class="apply__popup-form">
        <div
          class="field"
          :class="{ 'form-group--error': $v.form.name.$error }"
        >
          <input
            type="text"
            placeholder="Full Name"
            v-model.trim="$v.form.name.$model"
          />
        </div>
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
        <div
          class="field"
          :class="{ 'form-group--error': $v.form.email.$error }"
        >
          <input
            type="email"
            placeholder="Email Address"
            v-model="$v.form.email.$model"
          />
        </div>
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
        <div
          @click="toggleSelect"
          class="select"
          :class="{ 'form-group--error': specialtyError }"
        >
          <p v-if="form.specialty">{{ form.specialty }}</p>
          <p v-else>Choose your Specialty</p>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
              fill="#878787"
            />
          </svg>
          <transition name="slide">
            <div v-if="select" class="select__list">
              <div
                v-for="(item, index) in selectList"
                :key="index"
                @click="handleSpecialty(item)"
                class="item"
              >
                {{ item }}
              </div>
            </div>
          </transition>
        </div>
        <p class="error" v-if="specialtyError">
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
        <div class="upload-cv">
          <h3>Please upload your CV</h3>
          <input
            ref="file"
            type="file"
            accept="application/pdf, application/vnd.ms-excel"
            @change="processFile"
          />
          <div @click="$refs.file.click()" class="upload" :class="{ 'form-group--error': cvError }">
            <p v-if="form.file.name">{{ form.file.name }}</p>
            <p v-else>Choose your cv</p>
            <button>Browse</button>
          </div>
        </div>
        <p class="error mt-33" v-if="cvError">
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
        <button class="submit" @click.prevent="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        specialty: null,
        file: "",
      },
      selectList: [
        "Front-End Developer",
        "Back-End Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "IT Sales Manager",
      ],
      select: false,
      specialtyError: false,
      cvError: false,
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
    },
  },
  methods: {
    processFile(event) {
      this.form.file = event.target.files[0];
    },
    toggleSelect() {
      this.select = !this.select;
    },
    handleSpecialty(data) {
      this.form.specialty = data;
    },
    closePopup() {
      this.$emit("close");
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid || !this.form.specialty || !this.form.file) {
        this.$toast.error("Please fix the errors");
        this.form.specialty ? this.specialtyError = false : this.specialtyError = true
        this.form.file ? this.cvError = false : this.cvError = true
      } else {
        // do your submit logic here
        setTimeout(() => {
          this.$toast.success("Your message is sent");
          this.closePopup();
        }, 500);
      }
    },
  },
  watch: {
    "form.specialty"() {
      this.form.specialty ? (this.specialtyError = false) : null;
    },
    "form.file"() {
      this.form.file ? (this.cvError = false) : null;
    }
  },
};
</script>

<style lang="scss" scoped>
p.error {
  color: #da1414;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  margin-top: -44px;
  margin-bottom: 10px;
  text-align: left;
}
.form-group--error {
  border: 1.2px solid #da1414 !important;
}
.mt-33 {
  margin-top: -33px !important;
}
.apply {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba($color: #000, $alpha: 0.3);
  @media screen and (max-width: $xxl) {
    &__popup {
      margin-top: 10px !important;
      &-form {
        .select {
          &__list {
            width: 100% !important;
            top: 50px !important;
            .item {
              padding: 16px 0 !important;
              font-size: 16px;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1440px) {
    &__popup {
      &-header {
        height: 70px !important;
      }
      &-form {
        padding: 20px 50px !important;
      }
    }
  }
  @media screen and (max-width: $s) {
    padding: 0 15px;
    &__popup {
      &-form {
        .field {
          margin-bottom: 30px !important;
        }
        .select {
          &__list {
            width: 100% !important;
            top: 50px !important;
            .item {
              padding: 16px 0 !important;
              font-size: 16px;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    overflow: scroll;
    padding-bottom: 30px;
    &__popup {
      &-header {
        h4 {
          font-size: 18px !important;
        }
        svg {
          right: 10px !important;
          top: 10px !important;
        }
      }
      &-form {
        padding: 15px 30px !important;
      }
    }
  }
  &__popup {
    width: 600px;
    max-width: 100%;
    margin: 100px auto 0;
    background: #ffffff;
    box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    &-header {
      background: #40916c;
      border-radius: 4px 4px 0px 0px;
      position: relative;
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      h4 {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
      }
      svg {
        cursor: pointer;
        position: absolute;
        right: 24px;
        top: 24px;
      }
    }
    &-form {
      padding: 50px 89px;
      .field {
        width: 100%;
        border: 1.2px solid #b4bec8;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 0 14px;
        margin-bottom: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        input {
          border: none;
          color: #878787;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          width: 100%;
          &:focus-visible {
            outline: none;
          }
          &::placeholder {
            color: #878787;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            opacity: 0.8;
          }
        }
      }
      .select {
        width: 100%;
        border: 1.2px solid #b4bec8;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 0 14px;
        margin-bottom: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        margin-bottom: 48px;
        position: relative;
        p {
          margin-bottom: 0;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          color: #878787;
          opacity: 0.8;
        }
        &__list {
          background: #ffffff;
          width: 422px;
          position: absolute;
          left: 0;
          top: 60px;
          z-index: 2;
          .item + .item {
            border-top: 1px solid rgba($color: #000, $alpha: 0.1);
          }
          .item {
            padding: 24px 0 24px 50px;
            color: #000000;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
      .upload-cv {
        h3 {
          font-weight: normal;
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 30px;
          color: #000000;
        }
        input[type="file"] {
          display: none;
        }
        .upload {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          border: 1.2px solid #b4bec8;
          box-sizing: border-box;
          border-radius: 4px;
          height: 50px;
          margin-bottom: 36px;
          p {
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #878787;
            opacity: 0.8;
            margin-bottom: 0;
            margin-left: 14px;
          }
          button {
            background: #e9ecef;
            border-radius: 0px 4px 4px 0px;
            border: none;
            height: 100%;
            padding: 0 20px;
            color: rgba($color: #494949, $alpha: 0.8);
          }
        }
      }
      .submit {
        background: #40916c;
        border-radius: 4px;
        filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.15));
        border: none;
        width: 100%;
        padding: 16px 24px;
        color: #ffffff;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>
