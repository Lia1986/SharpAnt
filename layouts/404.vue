<template>
  <div>
    <client-only>
      <Particles>
        <div class="wrapper">
          <Nuxt />
        </div>
      </Particles>
    </client-only>
  </div>
</template>


<style lang="scss" scoped>
.header-section {
  margin-top: 0;
}
.wrapper {
  position: relative;
  padding-top: 154px;
  z-index: 15;
  min-height: 100vh;
}
</style>
