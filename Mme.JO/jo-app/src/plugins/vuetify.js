import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

// import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);

const opts = {}

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },

    theme: {
        themes: {
            light: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
                amber: colors.amber.lighten5, //#FFF8E1
                brown: colors.brown.lighten2, //#A1887F

            },
        },
    },






});