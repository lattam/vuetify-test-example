import Vue from 'vue'
import Dialog from '@/components/Dialog'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// function customSleep (ms) { // eslint-disable-line
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

describe('Dialog.vue', () => {
  it('should display warning.', async () => {
    const Constructor = Vue.extend(Dialog)
    const vm = new Constructor().$mount()

    await Vue.nextTick()
    // await customSleep(600)
  })
})
