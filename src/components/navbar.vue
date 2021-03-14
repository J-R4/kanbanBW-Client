<template>
  <div class="box" style="margin: 0px; padding:3px; border-radius: 10px;">
      <nav class="navbar is-light is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="" style="padding: 20px;"
                    @click.prevent="changePage('home-page')">
                    <img src="../resources/KanBanBW.png" alt="when organizing is done in black and white"
                        width="50" height="28">
                </a>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu" style="margin-right: -4.75rem;">
                <div class="navbar-start">
                    <a id="link-home" class="navbar-item" href="#">
                        <a class="button is-white is-small" href="https://www.youtube.com/watch?v=BTodGJB1ckA&ab_channel=Spagaga">henlo :)</a>
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item" style="margin-right: 75px;">
                        <div class="control">
                            <a class="button is-black" @click.prevent="changePage('add-page')">
                                <span class="icon">
                                    <i class="far fa-plus-square"></i>
                                </span>
                                <span>add task</span>
                            </a>
                        </div>
                        <div class="control">
                            <a class="button is-white" @click="logout">
                                <span class="icon">
                                    <i class="fas fa-sign-out-alt"></i>
                                </span>
                                <span><GoogleLogin class='button is-white' :params="params" :logoutButton=true>Logout</GoogleLogin></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
    name: `navbar`,
    data () {
        return {
            params: {
                client_id: '641781171342-18velpmujtc06m2n7gtlbsfcnaqhpj1o.apps.googleusercontent.com'
            }
        }
    },
    components: {
        GoogleLogin
    },
    methods: {
        logout(){
            this.$emit(`emitLogout`)
        },
        changePage(page){
            this.$emit(`changePage`,page)
        }
    }
}
</script>

<style>
</style>