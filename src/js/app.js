import Vue from 'vue';
import Hello from '../vue/Hello.vue';

const css = require('../scss/app.css');
const scss = require('../scss/app.scss');

new Vue({
    el:'#app',
    render:h => h(Hello)
});
