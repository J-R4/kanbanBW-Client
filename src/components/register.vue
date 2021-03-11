<template>
  <div>
      <!-- This is Form register -->
        <div>
            <div class="" id="form-register" style="height: 100vh; margin-top: 23vh;">
                <div class="columns">
                    <!-- This is Welcoming Title -->
                    <div class="column">
                        <div class="container"
                            style="display: flex; justify-content: center; align-items: center; align-content: center;">

                            <div class="box" style="background-color: white;">
                                <h1 class="title">
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
                                <div class="b">
                                    <p style="margin-bottom: 10px;">
                                        Register
                                    </p>
                                </div>
                                <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left">
                                        <input class="input" id="email-reg" type="email"
                                            placeholder="e.g. PogChamp@example.com">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-dove"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Password</label>
                                    <div class="control has-icons-left">
                                        <input class="input" id="password-reg" type="password" placeholder="********">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-key"></i>
                                        </span>
                                    </div>
                                </div>

                                <button type="submit" id="register-btn" class="button is-black"
                                    @submit.prevent="changePage('welcome-login')">Register</button>
                                <button id="link-login-reg" class="button is-white"
                                    @click.prevent="changePage('welcome-login')">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <!-- This is the end of Form register -->
  </div>
</template>

<script>
export default {
    name: `register`
}
</script>

<style>

</style>