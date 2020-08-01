const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm;
        after(() => {
            vm.$destroy()
        })
        it('接受value', () => {
            vm = new Constructor({
                propsData: {
                    value: '可以输入'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('可以输入')
        })
        it('接受 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接受 readOnly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接受 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            const message = vm.$el.querySelector('.errorMessage')
            expect(useElement.getAttribute('xlink:href')).to.equal('#my-error')
            console.log(message)
            expect(message.innerText).to.equal('你错了')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(event, 'target', {
                    value: { value: 'hi', enumerable: true }
                })
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                console.log(eventName)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })

})