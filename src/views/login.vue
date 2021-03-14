<template>
  <div>
      <!-- This is Form login -->
            <div class="" id="form-login" style="height: 77vh; margin-top: 23vh;">

                <div class="columns">

                    <!-- This is Welcoming Title -->
                    <div class="column">
                        <div class="container"
                            style="display: flex; justify-content: center; align-items: center; align-content: center;">

                            <div class="box" style="background-color: white;">
                                <h1 class="title is-white">
                                    Welcome to KanBanBW
                                </h1>
                                <p class="subtitle is-white is-6">When organizing done in <strong>black</strong> and
                                    <i>white</i>
                                </p>

                                <img src="../resources/KanBanBW.png" alt="fensi at eperiting wit dis fensitudu">

                            </div>
                        </div>
                    </div>
                    <!-- This is the end of Welcoming Title -->

                    <div class="column is-half"
                        style="display: flex; justify-content: center; align-items: center; align-content: center;">
                        <div
                            style="display: flex; justify-content: center; align-items: center; align-content: center;">
                            <form class="box"
                                style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);">
                                <div>
                                    <p style="margin: 0px 0px 10px 0px;">
                                        Login
                                    </p>
                                </div>
                                <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left">
                                        <input v-model="email" class="input" id="email" type="email"
                                            placeholder="e.g. PogChamp@example.com">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-dove"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Password</label>
                                    <div class="control has-icons-left">
                                        <input v-model="password" class="input" id="password" type="password" placeholder="********">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-key"></i>
                                        </span>
                                    </div>
                                </div>

                                <button type="submit" id="login-btn" class="button is-black"
                                    @click.prevent="login">Login</button>
                                <button id="link-register-reg" class="button is-white" style="border-color:grey;"
                                    @click.prevent="changePage('register-page')">Register</button>
                                <br><br>
                                <div>
                                    <div class="button is-small is-white" style="padding: 0px;">
                                       <g-signin-button
                                            :params="params"
                                            @success="onSignInSuccess"
                                            @error="onSignInError">
                                            <i class="fab fa-google"></i> Google Sign-in 
                                        </g-signin-button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- This is the end of login page -->
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
// import GoogleLogin from 'vue-google-login';
import axios from 'axios'
import GoogleLogin from 'vue-google-login';

export default {
    name: `login`,
    components: {
        GoogleSignInButton,GoogleLogin
    },
    data() {
        return {
            params: {
                    client_id: "641781171342-18velpmujtc06m2n7gtlbsfcnaqhpj1o.apps.googleusercontent.com"
                },
            email:``,
            password:``
        }
    },
    methods: {
        changePage(page){
            this.$emit(`changePage`,page)
        },
        login(){
            this.$emit(`login`,{
                email: this.email,
                password: this.password
            })
        },
        // =========== ini untuk google sign in ==============
        onSignInSuccess (googleUser) {
        // console.log('ini dari axios on success')
        let id_token = googleUser.getAuthResponse().id_token;
        // console.log(id_token, "ini id token");
        axios({
            url: `https://kanban-bw-app.herokuapp.com/oAuth`,
            method: "POST",
            data: {
            google_token: id_token
            }
        })
        .then((response) => {
            // console.log(response, 'masukk then');
            Swal.fire({
                title: "Good job!",
                text: "You have been logged in!",
                icon: "success",
            })
            localStorage.setItem("access_token", response.data.access_token);
            this.$emit('gSuccess', response.data.access_token);
            this.$emit('dataUser', {id: response.data.id, email: response.data.email});
            this.changePage(`home-page`)
        })
        .catch((err) => {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There is something wrong in your input!',
                footer: '<a href>Please contact J-R4 for further info.</a>'
            })
        })
        },
        onSignInError (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email/Password is wrong!',
            footer: '<a href>Please contact J-R4 for further info.</a>'
        })
        },
        //=============================== ini untuk cara g-sign in lainnya ======================================
        onSuccess(googleUser) {
            console.log(googleUser,'ini dari on success');
            this.changePage(`home-page`)
        },
        onFailure(response){
            console.log(data, 'ini dari data user')
        }
    }
}
</script>

<style>
    .g-signin-button {
        display: inline-block;
        padding: 2px 4px;
        border-radius: 3px;
        background-color: #5e5e5e;
        color: whitesmoke;
    }
</style>