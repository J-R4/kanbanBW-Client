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
                                    <div>
                                        <button v-google-signin-button="clientId" class="google-signin-button"> <i class="fab fa-google"></i> Google Sign-in</button>
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

export default {
    name: `login`,
    components: {
        GoogleSignInButton
    },
    data() {
        return {
            params: {
                    clientId: "641781171342-18velpmujtc06m2n7gtlbsfcnaqhpj1o.apps.googleusercontent.com"
                },
            email:``,
            password:``
        }
    },
    methods: {
        OnGoogleAuthSuccess (idToken) {
            // Receive the idToken and make your magic with the backend
            this.$emit(`onGoogle`,idToken)
        },
        OnGoogleAuthFail (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There is something wrong with your Google sign in !',
                footer: '<a href>Please contact J-R4 for further info.</a>'
            })
        },
        changePage(page){
            this.$emit(`changePage`,page)
        },
        login(){
            this.$emit(`login`,{
                email: this.email,
                password: this.password
            })
        },
        onSuccess(googleUser) {
            console.log(googleUser);
 
            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
        },
        onFailure(response){
            console.log(response)
        }
    }
}
</script>

<style>
    
</style>