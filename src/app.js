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