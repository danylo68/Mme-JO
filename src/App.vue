<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Shadows Into Light Two");
 $font-family: Shadows Into Light Two, sans-serif;
.fontjoe{
font-family: Shadows Into Light Two, sans-serif !important;;
}
</style>


<template>
  <v-app class="fontjoe"> 
    <v-main>
      <NavbarDan />
      <Landing />
      <AboutJ />
      <Carousel />
      <Pricing />
      <Footerbar />
    </v-main> 
  </v-app>
</template>

<script>

import Landing from './components/Core/Landing.vue'
import Footerbar from './components/Core/Footerbar.vue'
import AboutJ from './components/Core/AboutJ.vue'
import Carousel from './components/Core/Carousel.vue'
import Pricing from './components/Core/Pricing.vue'
import NavbarDan from './components/Core/NavbarDan.vue'

export default {
  name: 'App',

  components: {
    Landing,
    Footerbar,
    AboutJ,
    Carousel,
    Pricing,
    NavbarDan
},

  data: () => ({
    //
  }),
};
</script>
