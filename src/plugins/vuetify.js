import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

// import mdiVue from 'mdi-vue/v2'
// import * as mdijs from '@mdi/js'

// Vue.use(mdiVue, {
//   icons: mdijs
// }) <-- ไม่ต้องมีเพราะ vuetify ลงมาให้แล้ว มันจะทับกัน *****


Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)