export const state = () => ({
  pageSpeedApi: {},
});

export const mutations = {};

export const actions = {
  async getPageSpeedData({ state }, pageUrl) {
    try {
      const response = await this.$axios.$get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${pageUrl}`,
        { params: { key: process.env.API_KEY } }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
    return;
  },
};

export const modules = {};
