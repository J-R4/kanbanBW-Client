<template>
  <div>
      <!-- This is Form login -->
            <div class="" id="form-login" style="height: 100vh; margin-top: 23vh;">

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

                                <img src="./resources/KanBanBW.png" alt="fensi at eperiting wit dis fensitudu">

                            </div>
                        </div>
                    </div>
                    <!-- This is the end of Welcoming Title -->

                    <div class="column is-half"
                        style="display: flex; justify-content: center; align-items: center; align-content: center;">
                        <div
                            style="display: flex; justify-content: center; align-items: center; align-content: center;">
                            <form class="box"
                                style="background-color: white; box-shadow: 1px 5px 10px rgb(211,211,211);">
                                <div>
                                    <p style="margin: 0px 0px 10px 0px;">
                                        Login
                                    </p>
                                </div>
                                <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left">
                                        <input class="input" id="email" type="email"
                                            placeholder="e.g. PogChamp@example.com">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-dove"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Password</label>
                                    <div class="control has-icons-left">
                                        <input class="input" id="password" type="password" placeholder="********">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-key"></i>
                                        </span>
                                    </div>
                                </div>

                                <button type="submit" id="login-btn" class="button is-black"
                                    @click.prevent="changePage('home-page')">Login</button>
                                <button id="link-register-reg" class="button is-white"
                                    @click.prevent="changePage('welcome-reg')">Register</button>
                                <br><br>
                                <div>
                                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
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
export default {
    name: `login`
}
</script>

<style>

</style>