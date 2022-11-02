<template>

<v-section fluid id="welcome" class="fill-height" >
<v-img 
  class="heroic"
 :src="require('@/assets/fondjo.png')"
 aspect-ratio="1.4"
 height="height"
 width="width"
></v-img>

</v-section>

</template>

<style lang="scss" scoped>

#welcome{
background-size: cover;
top: 0;
left: 0;
padding: 0px 0px 0px;
margin: 0px 0px 0px 0px;
min-height: 100vh;
// object-fit: cover;
background-position: center center;
background-attachment: fixed;
// z-index: 1;
}

.heroic{
display: flex;
background-size: cover;
min-width: 100%;
max-height: 100vh;
}
</style>

<script>
  export default {
  
    computed: {
      height () {
        switch (this.$vuetify.breakpoint.height) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
        }
      },
      width (){
    switch (this.$vuetify.breakpoint.width) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
        }   
      
      }
      
    },
  }
</script>
