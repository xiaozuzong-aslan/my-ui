import Vue from 'vue'
import Icon from './icon.vue'
import Button from './button.vue'


Vue.component('my-icon', Icon)
Vue.component('my-button', Button)
new Vue({
    el: '#app',
    data:{
        loadding1:false,
        loadding2:true
    }
})