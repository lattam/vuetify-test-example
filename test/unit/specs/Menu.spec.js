import Vue from 'vue'
import Menu from '@/components/Menu'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Menu.vue', () => {
  it('should display warning.', async () => {
    const vm = new Vue({
      template: '<v-app><my-menu></my-menu></v-app>',
      components: {
        'my-menu': Menu
      }
    }).$mount()

    await Vue.nextTick()
    // console.log(vm.$el)
    // var app = vm.$el.querySelector('[data-app]')
    // console.log(app)

  })
})
