<template>
  <section class="vacancies">
    <div class="vacancies__header">
      <div class="vacancies__header-info">
        <h2>Active Vacancies</h2>
        <p>
          Looking to be part of a fast-growing IT company? Check our current
          vacancies to find the opportunity that is best for you.
        </p>
      </div>
      <div class="vacancies__header-image">
        <img src="~/assets/images/svg/vacancies-1.svg" alt="vacancies" />
        <img
          class="search"
          :class="{ 'active-svg': activeSvg }"
          src="~/assets/images/svg/vacancies-2.svg"
          alt="vacancies"
        />
      </div>
    </div>
    <div class="vacancies__available">
      <h2 class="title">Available Vacancies</h2>
      <div class="vacancies__available-tabs">
        <div v-for="item in vacancies" :key="item.id" class="item">
          <div class="item-position">{{ item.position }}</div>
          <div class="item-date">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.16106 2.34282C6.16106 1.9126 6.14982 1.55549 6.16106 1.19932C6.19105 0.501031 6.653 0.0183247 7.29112 -0.000421176C7.92924 -0.0191671 8.43336 0.438233 8.48864 1.12902C8.5205 1.51237 8.49427 1.90135 8.49427 2.31282H13.7744C13.7744 1.95759 13.7679 1.60516 13.7744 1.25274C13.7932 0.504781 14.2711 -0.000421176 14.9438 -0.000421176C15.5998 -0.000421176 16.0786 0.495408 16.1133 1.21806C16.1311 1.57236 16.1133 1.92947 16.1133 2.31376H21.4468C21.4468 1.93884 21.4384 1.56392 21.4468 1.19463C21.4712 0.50853 21.9463 0.0155128 22.5825 -0.000421176C23.2188 -0.0163552 23.7369 0.461665 23.7829 1.13183C23.8082 1.51706 23.7829 1.9051 23.7829 2.29595C24.5962 2.33907 25.3646 2.31657 26.1114 2.43186C28.2984 2.76928 29.9598 4.69543 29.9851 6.9065C30.0113 9.14101 29.9963 11.3755 29.9916 13.6091C29.9916 14.3458 29.4987 14.8744 28.8353 14.8848C28.1579 14.8941 27.6537 14.3561 27.6509 13.5904C27.6444 11.4964 27.6509 9.40252 27.6509 7.31048C27.6509 5.64584 26.697 4.69355 25.0385 4.68605C24.6496 4.68605 24.2607 4.68605 23.7969 4.68605C23.7969 5.04691 23.7969 5.38246 23.7969 5.71708C23.7829 6.49409 23.3078 7.01898 22.6219 7.02273C21.936 7.02648 21.4581 6.51096 21.4496 5.72739C21.4496 5.40215 21.4496 5.0769 21.4496 4.71979H16.117C16.117 5.06003 16.1245 5.39746 16.117 5.73488C16.0955 6.51378 15.6138 7.02929 14.9279 7.02929C14.242 7.02929 13.7857 6.50815 13.7735 5.71708C13.7688 5.39277 13.7735 5.06941 13.7735 4.71979H8.53737C8.51488 5.17063 8.5205 5.6196 8.46147 6.06013C8.42843 6.31071 8.31135 6.54266 8.12939 6.71803C7.94743 6.8934 7.71135 7.00182 7.45978 7.02554C7.20952 7.05694 6.95591 7.00453 6.73858 6.8765C6.52124 6.74847 6.35243 6.55203 6.25851 6.31788C6.195 6.11016 6.1634 5.89399 6.16481 5.67677C6.14888 5.3684 6.16481 5.0591 6.16481 4.75354C5.47797 4.75354 4.83235 4.67293 4.21485 4.77135C3.156 4.9335 2.43637 5.82861 2.35765 6.89713C2.34547 7.06866 2.34735 7.24112 2.34735 7.41264C2.34735 13.2557 2.34735 19.0982 2.34735 24.9401C2.34735 26.7265 3.2722 27.6488 5.06474 27.6498C7.87583 27.6498 10.6869 27.6498 13.498 27.6498C14.2345 27.6498 14.7265 28.0387 14.8052 28.6611C14.8989 29.3969 14.3723 29.9846 13.587 29.9902C12.2602 30.0005 10.9324 29.9902 9.60465 29.9902C8.0117 29.9902 6.41874 29.9902 4.82579 29.9902C2.03906 29.9874 0.00570819 27.9525 8.60121e-05 25.1641C-0.00491148 19.1654 -0.00491148 13.1667 8.60121e-05 7.16801C0.00664522 4.38049 2.04 2.35594 4.82954 2.34282C5.24746 2.34282 5.66912 2.34282 6.16106 2.34282Z"
                fill="#40916C"
              />
              <path
                d="M22.9235 15.8272C24.3243 15.8297 25.6929 16.2478 26.8562 17.0284C28.0196 17.8089 28.9253 18.917 29.4591 20.2125C29.9929 21.508 30.1306 22.9327 29.8549 24.3065C29.5792 25.6803 28.9025 26.9415 27.9102 27.9306C26.918 28.9197 25.6549 29.5923 24.2805 29.8633C22.9062 30.1344 21.4823 29.9917 20.189 29.4534C18.8958 28.915 17.7911 28.0051 17.0147 26.8388C16.2384 25.6725 15.8252 24.3021 15.8274 22.9009C15.8321 21.0221 16.582 19.2219 17.9125 17.8956C19.243 16.5693 21.0452 15.8254 22.9235 15.8272ZM22.902 18.1704C21.9649 18.1709 21.0489 18.4495 20.2701 18.9708C19.4912 19.4921 18.8844 20.2328 18.5265 21.0991C18.1685 21.9654 18.0754 22.9184 18.259 23.8377C18.4425 24.7569 18.8945 25.601 19.5578 26.2633C20.221 26.9255 21.0657 27.3762 21.985 27.5581C22.9043 27.7401 23.8569 27.6453 24.7224 27.2857C25.5878 26.9261 26.3271 26.3178 26.8469 25.5378C27.3667 24.7578 27.6435 23.8411 27.6424 22.9037C27.6435 22.2812 27.5216 21.6647 27.2836 21.0895C27.0457 20.5143 26.6964 19.9919 26.2558 19.5523C25.8152 19.1126 25.2921 18.7645 24.7165 18.5278C24.141 18.2911 23.5243 18.1706 22.902 18.1732V18.1704Z"
                fill="#40916C"
              />
              <path
                d="M13.5872 12.2982C13.5906 12.4544 13.5627 12.6097 13.5052 12.7549C13.4476 12.9001 13.3615 13.0323 13.252 13.1437C13.1425 13.2551 13.0118 13.3434 12.8676 13.4033C12.7233 13.4633 12.5686 13.4938 12.4124 13.4929C12.2562 13.492 12.1018 13.4598 11.9583 13.3982C11.8148 13.3366 11.685 13.2469 11.5768 13.1343C11.4685 13.0217 11.3839 12.8885 11.328 12.7427C11.2721 12.5968 11.2459 12.4412 11.2511 12.2851C11.2613 11.9809 11.3897 11.6926 11.609 11.4817C11.8283 11.2707 12.1212 11.1536 12.4255 11.1553C12.7298 11.157 13.0214 11.2774 13.2384 11.4908C13.4553 11.7042 13.5804 11.9939 13.5872 12.2982Z"
                fill="#40916C"
              />
              <path
                d="M21.4524 12.3192C21.4479 12.1673 21.4737 12.0161 21.5283 11.8743C21.583 11.7325 21.6653 11.603 21.7705 11.4934C21.8757 11.3838 22.0017 11.2963 22.1411 11.2359C22.2805 11.1756 22.4306 11.1436 22.5825 11.142C22.7385 11.1381 22.8938 11.1654 23.0392 11.2223C23.1846 11.2792 23.3172 11.3645 23.4292 11.4732C23.5412 11.582 23.6305 11.712 23.6917 11.8556C23.7529 11.9993 23.7848 12.1537 23.7856 12.3098C23.7755 12.6169 23.6489 12.9087 23.4316 13.1258C23.2142 13.3429 22.9223 13.469 22.6153 13.4787C22.3085 13.4755 22.0151 13.3524 21.7978 13.1358C21.5805 12.9191 21.4565 12.6261 21.4524 12.3192Z"
                fill="#40916C"
              />
              <path
                d="M13.587 17.3974C13.5904 17.7074 13.4705 18.006 13.2537 18.2276C13.037 18.4492 12.7411 18.5755 12.4312 18.5789C12.1213 18.5822 11.8228 18.4623 11.6013 18.2455C11.3797 18.0287 11.2534 17.7327 11.2501 17.4227C11.2484 17.2692 11.277 17.1169 11.3342 16.9745C11.3914 16.8321 11.476 16.7023 11.5834 16.5926C11.6907 16.4829 11.8186 16.3954 11.9597 16.3351C12.1008 16.2748 12.2525 16.2429 12.4059 16.2413C12.7158 16.2379 13.0143 16.3578 13.2358 16.5747C13.3455 16.682 13.433 16.8099 13.4932 16.9511C13.5535 17.0923 13.5854 17.2439 13.587 17.3974Z"
                fill="#40916C"
              />
              <path
                d="M7.30905 18.5576C7.15694 18.5575 7.00639 18.527 6.86626 18.4678C6.72614 18.4086 6.59928 18.3219 6.49318 18.2129C6.38707 18.1039 6.30386 17.9747 6.24845 17.833C6.19304 17.6913 6.16656 17.54 6.17056 17.3879C6.17019 17.2357 6.19978 17.085 6.25764 16.9443C6.31551 16.8036 6.40051 16.6757 6.50779 16.5679C6.61508 16.46 6.74255 16.3744 6.88292 16.3158C7.0233 16.2573 7.17383 16.2269 7.32592 16.2266C7.48204 16.2279 7.63633 16.2603 7.7798 16.3219C7.92327 16.3835 8.05304 16.473 8.16154 16.5853C8.27005 16.6976 8.35511 16.8304 8.41178 16.9759C8.46844 17.1214 8.49557 17.2767 8.49159 17.4329C8.48324 17.7387 8.35413 18.0287 8.1325 18.2395C7.91088 18.4503 7.6148 18.5647 7.30905 18.5576Z"
                fill="#40916C"
              />
              <path
                d="M6.16762 12.2965C6.16523 12.1444 6.19336 11.9934 6.25035 11.8524C6.30734 11.7114 6.39203 11.5833 6.49941 11.4756C6.60679 11.368 6.73467 11.2829 6.87549 11.2256C7.01631 11.1682 7.1672 11.1397 7.31923 11.1418C7.47146 11.1393 7.62268 11.1669 7.76417 11.2232C7.90567 11.2794 8.03465 11.363 8.14369 11.4693C8.25273 11.5756 8.33968 11.7024 8.39952 11.8424C8.45937 11.9825 8.49093 12.133 8.4924 12.2853C8.49301 12.4413 8.46288 12.5959 8.40373 12.7403C8.34458 12.8847 8.25756 13.016 8.14765 13.1267C8.03774 13.2374 7.9071 13.3254 7.76319 13.3856C7.61927 13.4458 7.46491 13.477 7.30893 13.4775C7.00172 13.4701 6.70976 13.3421 6.49618 13.1211C6.28261 12.9001 6.16458 12.6039 6.16762 12.2965Z"
                fill="#40916C"
              />
              <path
                d="M18.6741 12.3243C18.6699 12.6313 18.5453 12.9243 18.327 13.1402C18.1088 13.356 17.8144 13.4774 17.5075 13.4781C17.2002 13.4706 16.9077 13.3443 16.6916 13.1256C16.4754 12.907 16.3524 12.613 16.3484 12.3056C16.3477 12.1494 16.3785 11.9947 16.439 11.8508C16.4996 11.7069 16.5886 11.5767 16.7007 11.468C16.8128 11.3594 16.9457 11.2745 17.0915 11.2186C17.2372 11.1626 17.3927 11.1367 17.5487 11.1424C17.7008 11.144 17.8511 11.1761 17.9905 11.2368C18.13 11.2975 18.2559 11.3855 18.3608 11.4957C18.4657 11.6059 18.5475 11.736 18.6013 11.8783C18.6551 12.0206 18.6799 12.1723 18.6741 12.3243Z"
                fill="#40916C"
              />
              <path
                d="M7.30899 23.6616C7.0059 23.6518 6.71856 23.5242 6.50804 23.3059C6.29752 23.0876 6.18043 22.7957 6.18165 22.4924C6.18287 22.1891 6.30231 21.8982 6.51458 21.6816C6.72684 21.4649 7.0152 21.3397 7.31836 21.3324C7.47402 21.3286 7.62885 21.3561 7.7737 21.4133C7.91855 21.4704 8.05047 21.556 8.16167 21.6651C8.27287 21.7741 8.36109 21.9043 8.4211 22.048C8.48112 22.1917 8.51172 22.346 8.51109 22.5018C8.51047 22.6575 8.47863 22.8116 8.41745 22.9548C8.35628 23.098 8.26702 23.2275 8.15495 23.3357C8.04288 23.4438 7.91027 23.5283 7.76497 23.5843C7.61966 23.6403 7.46461 23.6666 7.30899 23.6616Z"
                fill="#40916C"
              />
              <path
                d="M12.4251 23.6622C12.1943 23.6627 11.9686 23.5947 11.7766 23.4667C11.5845 23.3387 11.4348 23.1566 11.3464 22.9434C11.258 22.7301 11.2349 22.4955 11.2801 22.2691C11.3252 22.0427 11.4366 21.8349 11.6 21.6719C11.7635 21.509 11.9716 21.3983 12.1981 21.3538C12.4245 21.3094 12.659 21.3332 12.8719 21.4223C13.0848 21.5114 13.2664 21.6618 13.3937 21.8543C13.521 22.0468 13.5883 22.2728 13.587 22.5037C13.5843 22.8107 13.4609 23.1044 13.2435 23.3212C13.0261 23.538 12.7321 23.6604 12.4251 23.6622Z"
                fill="#40916C"
              />
              <path
                d="M24.0733 21.7192C24.3544 21.7333 24.5418 21.7323 24.7292 21.753C25.0035 21.7808 25.2589 21.9056 25.4496 22.1049C25.6402 22.3041 25.7535 22.5649 25.7693 22.8402C25.8002 23.3923 25.4582 23.95 24.9026 24.0071C24.1449 24.0823 23.3818 24.0848 22.6237 24.0146C22.0915 23.9678 21.7616 23.5104 21.7476 22.9536C21.726 22.1269 21.7242 21.2993 21.7476 20.4726C21.7507 20.1718 21.8708 19.8841 22.0825 19.6704C22.2942 19.4568 22.5807 19.334 22.8814 19.3282C23.1828 19.325 23.474 19.4378 23.6946 19.6433C23.9153 19.8488 24.0485 20.1313 24.0667 20.4323C24.1033 20.841 24.0733 21.2609 24.0733 21.7192Z"
                fill="#40916C"
              />
            </svg>
            <p>{{ item.startDate }} - {{ item.endDate }}</p>
          </div>
          <div class="item-location">
            <svg
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 5.625C9.6875 5.625 8.35938 6.17188 7.26562 7.26562C6.17188 8.35938 5.625 9.6875 5.625 11.25C5.625 12.8125 6.17188 14.1406 7.26562 15.2344C8.35938 16.3281 9.6875 16.875 11.25 16.875C12.8125 16.875 14.1406 16.3281 15.2344 15.2344C16.3281 14.1406 16.875 12.8125 16.875 11.25C16.875 9.6875 16.3281 8.35938 15.2344 7.26562C14.1406 6.17188 12.8125 5.625 11.25 5.625ZM11.25 15C10.2344 15 9.35547 14.6289 8.61328 13.8867C7.87109 13.1445 7.5 12.2656 7.5 11.25C7.5 10.2344 7.87109 9.35547 8.61328 8.61328C9.35547 7.87109 10.2344 7.5 11.25 7.5C12.2656 7.5 13.1445 7.87109 13.8867 8.61328C14.6289 9.35547 15 10.2344 15 11.25C15 12.2656 14.6289 13.1445 13.8867 13.8867C13.1445 14.6289 12.2656 15 11.25 15ZM11.25 0C9.21875 0 7.34375 0.507812 5.625 1.52344C3.90625 2.53906 2.53906 3.90625 1.52344 5.625C0.507812 7.34375 0 9.21875 0 11.25C0 12.5 0.15625 13.6133 0.46875 14.5898C0.78125 15.5273 1.38672 16.6992 2.28516 18.1055C2.91016 19.082 4.19922 20.9766 6.15234 23.7891L10.0781 29.4141C10.3516 29.8047 10.7422 30 11.25 30C11.7578 30 12.1484 29.8047 12.4219 29.4141L16.3477 23.7891C18.3008 20.9766 19.5898 19.082 20.2148 18.1055C21.1133 16.6992 21.7188 15.5273 22.0312 14.5898C22.3438 13.6133 22.5 12.5 22.5 11.25C22.5 9.21875 21.9922 7.34375 20.9766 5.625C19.9609 3.90625 18.5938 2.53906 16.875 1.52344C15.1562 0.507812 13.2812 0 11.25 0ZM11.25 27.7734C10.3125 26.4062 9.10156 24.668 7.61719 22.5586C5.74219 19.8633 4.51172 18.0859 3.92578 17.2266C3.10547 15.8984 2.55859 14.8438 2.28516 14.0625C2.01172 13.2422 1.875 12.3047 1.875 11.25C1.875 10 2.10938 8.80859 2.57812 7.67578C3.04688 6.54297 3.73047 5.52734 4.62891 4.62891C5.52734 3.73047 6.54297 3.04688 7.67578 2.57812C8.80859 2.10938 10 1.875 11.25 1.875C12.5 1.875 13.6914 2.10938 14.8242 2.57812C15.957 3.04688 16.9727 3.73047 17.8711 4.62891C18.7695 5.52734 19.4531 6.54297 19.9219 7.67578C20.3906 8.80859 20.625 10 20.625 11.25C20.625 12.3047 20.4883 13.2422 20.2148 14.0625C19.9414 14.8438 19.3945 15.8984 18.5742 17.2266C17.9883 18.0859 16.7578 19.8633 14.8828 22.5586L11.25 27.7734Z"
                fill="#40916C"
              />
            </svg>
            <p>{{ item.location }}</p>
          </div>
          <div
            class="item-collapse cup"
            @click="item.collapse = !item.collapse"
          >
            <svg
              :class="{ 'active-collapse': item.collapse }"
              width="21"
              height="13"
              viewBox="0 0 21 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.85 0.316406L10.5 7.94974L18.15 0.316406L20.5 2.66641L10.5 12.6664L0.5 2.66641L2.85 0.316406Z"
                fill="black"
              />
            </svg>
          </div>
          <transition name="slide">
            <div v-if="item.collapse" class="item__body">
              <div class="item__body-desc">
                <h3>JOB DESCRIPTION</h3>
                <p>
                  {{ item.job.description }}
                </p>
              </div>
              <div class="item__body-resp">
                <h3>JOB RESPONSIBILITIES</h3>
                <ul>
                  <li
                    v-for="(list, index) in item.job.responsibilities"
                    :key="index"
                  >
                    <p>{{ list }}</p>
                  </li>
                </ul>
              </div>
              <div class="item__body-procedures">
                <h3>APPLICATION PROCEDURES</h3>
                <p>{{ item.job.procedures }}</p>
              </div>
              <div class="item__body-btn">
                <button @click="applyPopup = true">Apply Now</button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <transition name="fade">
      <ApplyVacancies v-if="applyPopup" @close="close" />
    </transition>
  </section>
</template>

<script>
import ApplyVacancies from "~/components/Apply-vacancies.vue";
export default {
  data() {
    return {
      vacancies: [
        {
          id: 1,
          position: "Front-End Developer",
          startDate: "2022-04-27",
          endDate: "2022-05-31",
          location: "Yerevan, Armenia",
          collapse: false,
          job: {
            description: `We are looking for a Mid-level or Mid+ Vue.js developer for a full-time position 9 AM-18 PM (not-remote)!`,
            responsibilities: [
              "Create Single Page Applications",
              "Create vue.js reusable components",
              "Build pixel-perfect UIs, Responsive Web pages   Required qualifications",
              "Deep understanding of JavaScript. Must have at least 2 years of experience with Vue.js.",
              "Basic understanding of web markup, including HTML5 and CSS3",
              "Skills in one or more chosen frameworks/libraries like Bootstrap.",
              "Basic understanding of asynchronous request handling and AJAX.  -Good understanding of Git",
              "Basic understanding of browser rendering behavior and performance Good to have: Experience with CSS preprocessors like LESS, SASS/SCSS",
              "Be familiar with Typescript, Nuxt.js",
            ],
            procedures: `All interested candidates please send your CVs and relevant work to   sharpant.llc@gmail.com`,
          },
        },
        {
          id: 2,
          position: "Full-Stack Developer",
          startDate: "2022-04-27",
          endDate: "2022-05-31",
          location: "Yerevan, Armenia",
          collapse: false,
          job: {
            description: `SharpAnt LLC is hiring a mid-level PHP Developer for a full-time position 9 AM-18 PM (not-remote)!`,
            responsibilities: [
              "Write well-designed, responsive, and efficient code",
              "Develop, record, and maintain web-based PHP applications",
              "Work on creating database architecture",
              "Resolve issues related to PHP development",
              "At least 1-2 years of work experience",
              "Knowledge of object-oriented PHP programming",
              "Knowledge of some PHP frameworks (Laravel is desirable)",
              "Basic understanding of front-end technologies",
              "Familiarity with databases",
              "High punctuality, ability to follow clients' clear instructions",
              "Good understanding of Git",
            ],
            procedures: `Please send your salary expectation, with your CV.
                  All interested candidates please send your CVs and relevant work to sharpant.llc@gmail.com`,
          },
        },
        {
          id: 3,
          position: "IT Sales Manager",
          startDate: "2022-04-27",
          endDate: "2022-05-31",
          location: "Yerevan, Armenia",
          collapse: false,
          job: {
            description: `SharpAnt LLC is hiring an experienced IT Sales Manager for the onsite position. Possibility to work part-time.`,
            responsibilities: [
              "Find and contact potential customers",
              "Used to working on the result",
              "Never stops at what has been achieved",
              "Discover and target new customers and new sales opportunities",
              "Create proposals for potential customers",
              "Work experience on the Upwork platform",
              "Strong sales skills",
              "Strong negotiation skills",
              "Knowledge of Armenian, English, and Russian languages",
              "Excellent communication and presentation skills",
            ],
            procedures: `All interested candidates please send your CVs to sharpant.llc@gmail.com" in the subject line.`,
          },
        },
      ],
      applyPopup: false,
      activeSvg: false,
    };
  },
  components: { ApplyVacancies },
  methods: {
    close() {
      this.applyPopup = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.activeSvg = true;
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.active-svg {
  bottom: -40px !important;
  right: -20px !important;
}
.active-collapse {
  transform: rotate(-180deg);
}
.vacancies {
  margin-top: 78px;
  @media screen and (max-width: $m) {
    margin-top: 50px;
    &__header {
      padding: 0 60px 80px !important;
      &-info {
        h2 {
          font-size: 28px !important;
          line-height: 32px !important;
        }
        p {
          width: 600px !important;
          font-size: 16px !important;
        }
      }
    }
  }
  @media screen and (max-width: $s) {
    &__header {
      flex-direction: column;
      padding: 0 40px 70px !important;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 120px 120px;
    overflow: hidden;
    &-info {
      max-width: 100%;
      h2 {
        letter-spacing: 0.07em;
        color: #000000;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
      }
      p {
        width: 952px;
        max-width: 100%;
        letter-spacing: 0.15em;
        color: #000000;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
      }
    }
    &-image {
      position: relative;
      img {
        max-width: 100%;
      }
      .search {
        transition: all 0.5s;
        position: absolute;
        bottom: -40px;
        right: -400px;
      }
    }
    @media screen and (max-width: $xxl) {
      &-info {
        p {
          width: 850px;
        }
      }
    }
  }
  &__available {
    background-color: rgba(#eee, 0.7);
    padding: 70px 120px;
    @media screen and (max-width: $m) {
      padding: 70px 60px !important;
      & .title {
        font-size: 28px !important;
      }
      &-tabs {
        margin-top: 35px !important;
      }
    }
    @media screen and (max-width: $s) {
      padding: 60px 40px !important;
      & .title {
        font-size: 24px !important;
        line-height: 32px !important;
      }
      &-tabs {
        margin-top: 25px !important;
        & .item {
          &-position {
            font-size: 18px !important;
            line-height: 32px !important;
          }
          &-date,
          &-location {
            p {
              font-size: 16px !important;
            }
          }
          &__body {
            margin-top: 30px !important;
            h3 {
              font-size: 16px !important;
              margin-bottom: 6px !important;
            }
            p {
              font-size: 16px !important;
              line-height: 24px !important;
            }
          }
        }
      }
    }

    & .title {
      letter-spacing: 0.07em;
      color: #000000;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 0;
    }
    &-tabs {
      margin-top: 40px;
      width: 1054px;
      max-width: 100%;
      & .item {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        padding: 9px 0 29px;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
        &-collapse {
          svg {
            transition: all 0.3s ease;
          }
        }
        &-position {
          letter-spacing: 0.07em;
          color: #000000;
          font-weight: 500;
          font-size: 20px;
          line-height: 48px;
          margin-bottom: 0;
        }
        &-date {
          display: flex;
          align-items: center;
          p {
            margin-bottom: 0;
            color: rgba($color: #000000, $alpha: 0.4);
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            margin-left: 10px;
          }
        }
        &-location {
          display: flex;
          align-items: center;
          p {
            margin-bottom: 0;
            color: #000000;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            margin-left: 10px;
          }
        }
        &__body {
          margin-top: 40px;
          h3 {
            color: #000000;
            letter-spacing: 0.07em;
            font-weight: 600;
            font-size: 18px;
            line-height: 48px;
            margin-bottom: 10px;
          }
          p {
            color: #000000;
            letter-spacing: 0.07em;
            font-weight: normal;
            font-size: 18px;
            line-height: 32px;
            margin-bottom: 0;
          }
          &-desc {
            margin-bottom: 30px;
          }
          &-resp {
            margin-bottom: 30px;
            ul {
              padding-left: 28px;
              li + li {
                margin-top: 5px;
              }
            }
          }
          &-btn {
            margin-top: 30px;
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
      }
    }
  }
}
</style>
