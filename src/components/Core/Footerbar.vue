<template>
<v-section id="navfoot" class="myFont" >
 <v-footer class="justify-center" color="#E8D5CF

"  elevation="14" height="80">
      <div class="title font-weight-light dark--text text--lighten-1 ">
        &copy; {{ (new Date()).getFullYear() }} — Mme J —

<div class="iconik">

  <v-btn 
  class="font-weight indigo--text "
  href="https://www.linkedin.com/in/daniel-lopa/"
  target="_blank"
  icon>    
<v-icon large>mdi-linkedin</v-icon>        
 </v-btn>
            
 <v-btn
  class="font-weight Google--text "
  href="mailto:lesesquissesdemmej@gmail.com"
  target="_blank"
  icon>    
<v-icon large>mdi-gmail</v-icon> 
</v-btn>

<v-btn
  class="font-weight Facebook--text "
  href="https://www.facebook.com/lesesquissesdemmej"
  target="_blank"
  icon>    
<v-icon class="mdi-facebook" large>mdi-facebook</v-icon> 

</v-btn>

<v-btn
  class="font-weight instagram--text "
  href="https://instagram.com/lesesquissesdemmej?igshid=YmMyMTA2M2Y="
  target="_blank"
  icon>    
<v-icon large>mdi-instagram</v-icon> 
</v-btn>
<!-- :::::::::::::::::::::::::::::::::::::::::::::::::: -->

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
      
      <v-btn
  class="font-weight dark--text"
  
    v-on="on"
  icon>    
<v-icon large>mdi-cellphone</v-icon> 
</v-btn>  
      </template>

      <v-card>
        <v-card-title 
          class="amber"
          primary-title
        >
          Contact Mobile
        </v-card-title>

        <v-card-text>
         <h1 class="pt-4">06 17 51 07 27</h1>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="accent"
            flat
            @click="dialog = false"
          >
            Merci
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>

</div>

    </v-footer>
</v-section>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>


<style lang="scss" scoped>
.iconik{
display: flex;
justify-content: space-between;


}



.title{
opacity: 0.8;
font-family: Shadows Into Light Two, sans-serif;
}

</style>