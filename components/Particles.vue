<template>
  <div class="particles__wrapper">
    <client-only>
      <VueParticles
        class="particles-js"
        color="#FFF"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#FFF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      >
      </VueParticles>
    </client-only>
    <slot class="particles-slot"></slot>
  </div>
</template>

<script>
import VueParticles from "../node_modules/vue-particles/src/vue-particles/vue-particles.vue";
export default {
  props: {
    id: {
      type: String,
    },
  },
  components: { VueParticles },
};
</script>

<style lang="scss" scoped>
.particles-js {
  background-color: rgba(214, 214, 214, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.particles__wrapper {
  position: relative;
}
</style>

<style>
.particles-js-canvas-el {
  width: unset !important;
}
</style>
