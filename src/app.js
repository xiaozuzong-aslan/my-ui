import Vue from 'vue'
import Icon from './icon.vue'
import Button from './button.vue'
import ButtonGroup from './buttonGroup.vue'


Vue.component('my-icon', Icon)
Vue.component('my-button-group', ButtonGroup)
Vue.component('my-button', Button)

new Vue({
    el: '#app',
    data: {
        loadding1: false,
        loadding2: true
    }
})

import chai, { expect } from 'chai'
import spise from 'chai-spies'
chai.use(spise)

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting'
        }
    })
    vm.$mount()
    const icon = vm.$el.querySelector('use')
    expect(icon.getAttribute('xlink:href')).to.eq('#my-setting')
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting',
            iconPosition:'right'
        }
    })
    vm.$mount('#test')
    const svg = vm.$el.querySelector('svg')
    console.log(svg)
    expect(window.getComputedStyle(svg).order).to.eq('1')
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            iconName:'setting',
            loading:true
        }
    })
    vm.$mount()
    const icon = vm.$el.querySelector('use')
    expect(icon.getAttribute('xlink:href')).to.eq('#my-loading')
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            iconName:'setting',
        }
    })
    vm.$mount()
    const spy = chai.spy(()=>console.log('xxxx'))
    console.log(spy)
    vm.$on('click',spy)
    vm.$el.click()
    expect(spy).to.have.been.called()
}