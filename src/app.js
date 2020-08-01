import Vue from 'vue'
import Icon from './icon.vue'
import Button from './button.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'


Vue.component('my-icon', Icon)
Vue.component('my-button-group', ButtonGroup)
Vue.component('my-button', Button)
Vue.component('my-row', Row)
Vue.component('my-col', Col)

new Vue({
    el: '#app',
    data: {
        loadding1: false,
        loadding2: true,
        message: 'gulu'
    },
    methods: {
        changeMessage(e) {
            console.log(e)
        }
    }
})


import chai, { expect } from 'chai'
import spise from 'chai-spies'
chai.use(spise)

{
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
        propsData: {
            value: '可以输入'
        }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    console.dir(inputElement.value)

}
// {

//     const vm = new Constructor({
//         propsData: {
//             iconName: 'setting',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount('#test')
//     const svg = vm.$el.querySelector('svg')
//     expect(window.getComputedStyle(svg).order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             iconName: 'setting',
//             loading: true
//         }
//     })
//     vm.$mount()
//     const icon = vm.$el.querySelector('use')
//     expect(icon.getAttribute('xlink:href')).to.eq('#my-loading')
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             iconName: 'setting',
//         }
//     })
//     vm.$mount()
//     const spy = chai.spy(() => console.log('xxxx'))

//     vm.$on('click', spy)
//     vm.$el.click()
//     expect(spy).to.have.been.called()
// }