<template>
   <v-container id="reals">
          <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="100%"
        style="box-shadow: none !important;"
    >
        <v-slide-group
            v-model="recipeIndex"
            class="pa-6 slider"
            show-arrows
        >
            <v-slide-item
                v-for="n in Object.keys(recipes)"
                :key="recipes[n].id"
                v-slot="{ active, toggle }"
            >
                <v-card
                    :color="'primary lighten-1'"
                    class="ma-4 card-recipe"
                    height="550"
                    width="500"
                    style="border-radius: 10px; overflow: hidden;"
                    @click="toggle"
                >
                    
                     <v-img
                        class="white--text"
                        height="100%"
                        :src="recipes[n].image"
                     >  
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-scale-transition>
                                <v-icon
                                    v-if="active"
                                    color="white"
                                    size="48"
                                    v-text="'mdi-close-circle-outline'"
                                ></v-icon>
                            </v-scale-transition>                                          
                            <div class="d-flex align-end gradient-box">
                                <v-card-title class="noselect">{{recipes[n].name}}</v-card-title>
                            </div>
                        </v-row>
                     </v-img>
                </v-card>
            </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
            <v-sheet
                v-if="recipeIndex != null"
                tile
                style="background-color: #FFF3E0 !important;"
            >
                <v-container fluid class="pa-12">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <span class="text-h6">{{ `${recipes[recipeIndex].name}'s Recipe` }}</span> <br>                        
                            <span class="text-subtitle-1">{{ recipes[recipeIndex].description }}</span>
                            <p class="text-justify mt-4">
                                {{ recipes[recipeIndex].steps }}
                            </p>
                        </v-col>
                        <v-col cols="12" sm="6" class="d-flex align-center justify-center">
                            <div class="thumbnail">
                                <img :src="recipes[recipeIndex].image" alt="Beach Scene" style="width: 100%;" />
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-expand-transition>
    </v-sheet>
   </v-container>
</template>

<script>

export default {
   name: 'HelloWorld',

   data: () => ({       
      recipeIndex: null,
      recipes: [         
         {
            id: 1,
            name: 'Real_1',
            image: require ('/src/assets/pjt1.jpg'),
            description: 'Real_1',
            steps: 'Our favorite recipe for making a classic apple pie from scratch. This recipe guarantees apple pie with perfectly cooked (not mushy) apples surrounded by a thickened and gently spiced sauce all baked inside a flaky, golden-brown crust.'
         },
         {
            id: 2,
            name: 'Real_2',
            image: require ('/src/assets/pjt2.jpg'),
            description: 'A tasty recipe!',
            steps: 'The best cinnamon buns in the WORLD! Big, fluffy, soft & delicious. You\'ll never go back to another cinnamon buns recipe after these!'
         },
         {
            id: 3,
            name: 'Real_3',
            image: require ('/src/assets/pjt3.jpg'),
            description: 'Real_2',
            steps: 'These incredible vanilla cupcakes are light and fluffy with a plush crumb, and they stay fresh and moist for 4 whole days!'
         },
         {
            id: 4,
            name: 'Real_4',
            image: require ('/src/assets/pjt4.jpg'),
            description: 'Real_4',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 5,
            name: 'Real_5',
            image: require ('/src/assets/pjt5.jpg'),
            description: 'Real_5',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 6,
            name: 'Real_6',
            image: require ('/src/assets/pjt6.jpeg'),
            description: 'Real_6',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 7,
            name: 'Real_7',
            image: require ('/src/assets/pjt7.jpg'),
            description: 'Real_7',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         } ,
          {
            id: 8,
            name: 'Real_8',
            image: require ('/src/assets/pjt8.jpg'),
            description: 'Real_8',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         } ,
          {
            id: 9,
            name: 'Real_9',
            image: require ('/src/assets/pjt9.jpg'),
            description: 'Real_9',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 10,
            name: 'Real_10',
            image: require ('/src/assets/pjt10.jpeg'),
            description: 'Real_10',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 11,
            name: 'Real_11',
            image: require ('/src/assets/pjt11.jpg'),
            description: 'Real_11',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 12,
            name: 'Real_12',
            image: require ('/src/assets/pjt12.jpg'),
            description: 'Real_12',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 13,
            name: 'Real_13',
            image: require ('/src/assets/pjt13.jpg'),
            description: 'Real_13',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 14,
            name: 'Real_14',
            image: require ('/src/assets/pjt14.jpg'),
            description: 'Real_14',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 15,
            name: 'Real_15',
            image: require ('/src/assets/goutte_bleu.jpg'),
            description: 'Real_15',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 16,
            name: 'Real_16',
            image: require ('/src/assets/carreaux_bleu_noir.jpg'),
            description: 'Real_16',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 17,
            name: 'Real_17',
            image: require ('/src/assets/goutte_noir.jpg'),
            description: 'Real_17',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
         {
            id: 18,
            name: 'Real_18',
            image: require ('/src/assets/temps_pause_logo.jpg'),
            description: 'Real_18',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
          {
            id: 19,
            name: 'Real_19',
            image: require ('/src/assets/screen_astuces.jpg'),
            description: 'Real_19',
            steps: 'How to make homemade French croissants, with detailed, step by step instructions. Buttery, crisp, flaky croissants, and how to perfect them!'
         },
      ]
   })
}
</script>

<style>
.thumbnail {
    width: 250px;
    height: 250px; 
    overflow: hidden;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gradient-box {
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0; 
    background: linear-gradient(to bottom, transparent 0%, black 100%);
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>