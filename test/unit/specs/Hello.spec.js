import Vue from 'vue'
import Hello from '@/components/Hello'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Hello.vue', () => {
  it('should display error Application is missing <v-app> component.', async () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()

    await Vue.nextTick()
  })
})
