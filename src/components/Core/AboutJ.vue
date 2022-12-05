<template>

<v-section id="about_me" class="myfont" color="#E8D5CF">

<v-container class="textjo text-center mb-8 mt-8" >
<h1>Qui est Mme J</h1>
<v-avatar class="elevation-20 mb-12 " size="130">
                                <v-img class="ml-6" :src="require('@/assets/avatarJ2.jpeg')"></v-img>
                            </v-avatar>

<h2>Hello</h2>
<h3>Moi c'est Mme J ,</h3>
 
<v-responsive class="mx-auto font-weight-light mb-8 mt-8" max-width="720">
<span class="story">Amoureuse depuis l'enfance par le dessin, c'est avec évidence que je me suisdécidée à me 
reconvertir en tant que graphiste et illustratrice.
Je suis la pour mettre mon talent et ma créativité à votre service pour tout projet personnel ou
professionnel, je m'adapte à votre demande pour une prestation sur mesure.
Je vous souhaite la bienvenue dans l'univers de Mme J .
</span>
</v-responsive>

<!-- :::::::::::::::::::::::Modal CV::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->

<v-dialog
      v-model="dialog"
      width="900px"
      height="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
        rounded
         width="10rem"
        height="4em"
        elevation="20"
        color="#E8D5CF" 
         v-bind="attrs"
         v-on="on"
        >
        <v-icon large color="green lighten-1">mdi-plus</v-icon>
          <span font-size="3rem">Mon CV</span>
          </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h5>Mon CV</h5>
        </v-card-title>
        <v-card-text>
         <v-img :src="require('@/assets/CV_JOSEPHINE_THOMAS_.jpg')"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Merci
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</v-container>
</v-section>

</template>
   
 <style lang="scss" scoped>
 .myfont
 {
 font-family: Shadows Into Light Two, sans-serif;
 }
.story{
font-family: Shadows Into Light Two, sans-serif;
 font-size: 22px;
}
.myfont{
margin-top: 80rem;
height: 100vh;

}
</style>
 
 
 
 
 
 
<script>

  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>