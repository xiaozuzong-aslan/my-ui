const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    const Constructor = Vue.extend(Button)
    let vm;
    after(() => {
        vm.$destroy()
    })
    it('可以设置icon.', () => {
        vm = new Constructor({
            propsData: {
                iconName: 'setting'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#my-setting')
    })
    it('可以设置loading', () => {
        vm = new Constructor({
            propsData: {
                loading: true
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#my-loading')
    })
    it('icon 默认order为1', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        vm = new Constructor({
            propsData: {
                iconName: 'setting'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
    })
    it('可以设置iconPosition为2', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        vm = new Constructor({
            propsData: {
                iconName: 'setting',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
    })
    it('触发click', () => {
        vm = new Constructor({
            propsData: {
                iconName: 'setting',
                iconPosition: 'right'
            }
        }).$mount()
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })
})