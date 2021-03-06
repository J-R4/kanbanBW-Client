import Vue from 'vue';
import Buefy from 'buefy';
import App from './app.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import GoogleLogin from 'vue-google-login';
import GSignInButton from 'vue-google-signin-button';

import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.use(VueAxios, axios);

Vue.use(GoogleLogin);
Vue.use(GSignInButton);

const kanbanBWapp = new Vue({
    render: (h) => h(App),
}).$mount('#kanbanBW-app');

/**
 * v-text="" or {{ }}
 * v-html=""
 *
 * v-if=""
 * v-else-if=""
 * v-else
 * v-show
 *
 * v-on:click="" // digunakan dengan methods
 * v-on:submit="" // shorthandnya @
 *
 * v-bind // untuk mengisi attributes dalam sebuah html (misalkan mau masukin ke dalam src) // shorthandnya :
 * v-model // two ways data bindings jadi bisa menyimpan data dari value yang diisi di form-input html pada index.html
 *
 * v-for="(todo,i) in todos" // kalau mau dipanggil nanti panggilnya {{todo}} aja yaitu todos[0] dan berikutnya jadi todos[1],dst. (todos[n])
 */
