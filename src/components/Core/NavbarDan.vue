<style lang="scss" scoped>
.topbar {
font-family: Shadows Into Light Two, sans-serif;
}
</style>


<template>

<v-app-bar class="topbar" app height="75" elevation="14" color="#E8D5CF">

<v-toolbar-title  class="ml-4">
<v-avatar class="elevation-4 mb-2" size="60">
 
  <v-img 
  :src="require('@/assets/avatarJ3.jpg')"
  aspect-ratio="1.0"></v-img>
  </v-avatar>                  
  Mme Jo</v-toolbar-title>
        
        <v-spacer></v-spacer>  
        
    <v-toolbar-items class="hidden-sm-and-down">
        
          <v-btn text @click="$vuetify.goTo('#about_me')" >
     <span>A propos</span> 
    </v-btn>
    
    <v-btn text @click="$vuetify.goTo('#reals')" >
    <span>Mes Projets</span>  
    </v-btn> 

     <v-btn text @click="$vuetify.goTo('#pricer')" >
    <span>Tarifs</span>  
    </v-btn> 
    
    <v-btn text @click="$vuetify.goTo('#navfoot')" >
     <span>Contact</span>
    </v-btn>
      
    </v-toolbar-items>
  
        </v-app-bar> 
     
     </template> 
      
      
 <script>
export default {
  data() {
    return {
      menu: [
        { icon: "home", title: "A propos", },
        { icon: "info", title: "Mes réalisations" },
        { icon: "warning", title: "Mes Tarifs" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>