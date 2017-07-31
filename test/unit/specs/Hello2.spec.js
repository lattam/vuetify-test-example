import Vue from 'vue'
import Hello2 from '@/components/Hello2'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Hello2.vue', () => {
  it('should pass', async () => {
    const Constructor = Vue.extend(Hello2)
    const vm = new Constructor().$mount()

    await Vue.nextTick()

  })
})
