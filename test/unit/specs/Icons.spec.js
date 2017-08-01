import Vue from 'vue'
import Icons from '@/components/Icons'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Icons.vue', () => {
  it('should not display error Application is missing <v-app> component.', async () => {
    const Constructor = Vue.extend(Icons)
    const vm = new Constructor().$mount()

    await Vue.nextTick()
  })
})
