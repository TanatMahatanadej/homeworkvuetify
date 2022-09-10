import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // <-- ขาดการ import @mdi/font ครับ
// *** ถ้าไม่ได้จำเป็นจะ custom font ด้วยตัวเอง ไม่ต้องลง @mdi/font ครับ vuetify ลงมาให้แล้ว มันจะทับกัน ****

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
