<template>
<section id="navjo" >

  <v-app-bar toggleable="lg" class="hero rounded-pill" height="90" elevation="24" color="#E8D5CF" 
>
      <v-avatar
        class="mr-2"   
        size="70"
      >
    
      <v-list-item-avatar>
       <v-img :src="require('@/assets/avatarJ.png')"></v-img>
        </v-list-item-avatar>
      </v-avatar>
      <v-spacer></v-spacer>
      
      <v-toolbar-title class="font-weight-black headline pa-6" >
      <h4> Qui est Mme J</h4> 
      </v-toolbar-title>
      
      
      
       <v-toolbar-title class="font-weight-black headline pa-14">
      <h4>Mes Projets</h4> 
      </v-toolbar-title> 
      
      
      
      
       <v-toolbar-title class="font-weight-black headline pa-14">
      <h4>Tarif</h4> 
      </v-toolbar-title>
      
      
     <v-toolbar-title class="font-weight-black headline pa-14">
      <h4>Contact</h4> 
      </v-toolbar-title>
      
     
<!--   
     <v-btn text @click="$vuetify.goTo('#about-me')" >
     <span>A propos</span> 
    </v-btn>

   
     <v-btn text @click="$vuetify.goTo('#carousel')" >
    <span>Projet</span>  
    </v-btn> 
    
    <v-btn text @click="$vuetify.goTo('#footerbar')" >
     <span>Contact</span>
    </v-btn> -->
   
    </v-app-bar>
    
</section>
</template>

<style lang="scss" scoped>

#navjo{

// position: absolute;
z-index: 2;
margin-top: 22em;
// width: 75vw;
color: 082b4a;
font-style: normal;
// left: 10vw;
// right: 10vw;
}

.hero{
display: flex;
// align-items:  space-between;

// align-content: space-between;
justify-content: center;
// min-width: 30vw;

}
</style>