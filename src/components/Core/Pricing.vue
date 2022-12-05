<template>
<v-section id="pricer" class="fill-height" fluid  >
<v-img
  class="pragmatik"
 :src="require('@/assets/pricing.jpg')"
 height="height"
 width="width"
 aspect-ratio="1.5"
>

  <v-container class="pricebox justify-sm" width="width" height="height">
  
  <div class="button_graphe">
    <v-dialog
      v-model="dialog"
      width="900"
      height="700"
    >
      <template v-slot:activator="{ on, attrs }"> 
        <v-btn
        rounded
         width="14rem"
        height="4em"
        elevation="24"
          color="#E8D5CF" 
          v-bind="attrs"
          v-on="on">
        <v-icon large color="green lighten-1">mdi-plus</v-icon>
          <span>TARIFS GRAPHISME</span>
        </v-btn>
      </template>

      <v-card class="modal_graph" >
     
        <v-card-title >
        <h3>GRAPHISME</h3> 
        </v-card-title>
       
        <v-card-text class="prestation" >
         Les tarifs indiqués ici sont des tarifs de base et varie selon la complexité du projet,<br>
         chaque projet étant différend le tarif peut évoluer.
        </v-card-text> 
         <v-divider></v-divider>
        <v-card-title >
        <h4>Print</h4>  
        </v-card-title>
          <v-card-text>
         - Carte de visite à partir de 200 euros.<br>
         - Affiche à partir de 250 euros.<br>
         - Flyer(recto/verso) à partir de 300 euros.<br>
         
         - Logo à partir de 300 euros.<br>
         <span class="condition"> 
            inclus: planche de propositions de logos(sous minimum 3 axes créatif)</span><br>
         
         - Charte graphique à partir de 200 euros.<br>
         <span class="condition">guide vous permettant l'utilisation de votre logo et de votre charte sur tous vos
         autres supports de communications (choix typographiques, gammes de couleurs, illustrations,...)
         </span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="accent"
            text
            @click="dialog = false"
          >
            Merci de votre Attention
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <br>
  <!-- ::::::::::::::::::::::::::::::::::::::::::: -->
  
  <div class="button_illustration">
    <v-dialog
      v-model="dialog2"
      width="900"
      height="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
      text--lighten-1
      width="14rem"
        height="4em"
        rounded
        elevation="20"
         color="#E8D5CF" 
          v-bind="attrs"
          v-on="on"
        ><v-icon large color="green lighten-1" >mdi-plus</v-icon>
         <span>Tarifs Illustration</span>
        </v-btn>
      </template>

      <v-card class="modal_illustration" color="#E8D5CF" >
     
       
         <v-card-title >
        <h3>TARIF</h3> 
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="presta_illustration">
        <v-card-title >
        <h>ILLUSTRATION</h> </v-card-title>
         Portrait bd 60€ (+5€ par personnes supplémentaire).<br>
         Faire-part 85€ (mariage, baptème, naissance, anniversaire,...).<br>
         Décors et mise en scène 20€.<br>
         Retouche + 10€.<br>
         Impression sur Demande.<br>
         Envoie du fichier par Mails au format souhaité.<br>  
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="accent"
            text
            @click="dialog2 = false"
          >
            Merci de votre Attention
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
  </v-container>
  </v-img>
</v-section>
</template>
<!-- ::::::::::::::::::::::::::::::::::::::::::::::::: -->

<style lang="scss" scoped>


#pricer{
background-size: cover;
top: 0;
left: 0;
padding: 0px 0px 0px;
margin: 0px 0px 0px 0px;
min-height: 100vh;
object-fit: cover;
background-position: center center;
background-attachment: fixed;
position: relative;
z-index: 2;
}

.pragmatik{
background-size: cover;
min-width: 100%;
max-height: 100vh;
}

.pricebox{
// position: absolute;
display: flex;
justify-content: center;
flex-flow: column wrap;
    width: fit-content;
// top: 43%;
// left: 35%;
height: auto;
    margin-top: 16%;
// height: 18vh;
// width:14vw;
}

.button_graphe.v-btn{
display: flex;
width: 15vw;
height: 15vh;
}

.button_illustration.v-btn{
display: flex;
width: 15vw;
height: 10vh;

}

.modal_graph{
font-family: Shadows Into Light Two, sans-serif;
color: black;
background: #E8D5CF;
}
.modal_illustration{
font-family: Shadows Into Light Two, sans-serif;
color: black;
background-color: #E8D5CF;
}



.condition{
font-size: 17px;
}
.prestation{
font-size: 20px;
}

.presta_illustration
{
font-size: 17px;

}
</style>



<script>
  export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
    }
  },

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

