<template>
  <div>
    <NotFound :error="error" />
  </div>
</template>

<script>
import NotFound from "~/components/NotFound.vue";
export default {
  layout: "404",
  components: { NotFound },
  data() {
    return {
      error: {}
    }
  },
  mounted() {
    this.error = window.__NUXT__.error
  },
};
</script>
