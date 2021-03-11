<template>
  <div>
      <nav class="navbar is-light is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="" style="padding: 20px;"
                    @click.prevent="changePage('welcome-login')">
                    <img src="./resources/KanBanBW.png" alt="when organizing is done in black and white"
                        width="50" height="28">
                </a>
                <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu" style="margin-right: -4.75rem;">
                <div class="navbar-start">
                    <a id="link-home" class="navbar-item" href="#">
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a class="button is-black" href="">
                                    <span class="icon">
                                        <i class="far fa-plus-square"></i>
                                    </span>
                                    <span>new task</span>
                                </a>
                            </p>
                            <p class="control">
                                <a class="button is-white" href="" @click.prevent="changePage('welcome-login')">
                                    <span class="icon">
                                        <i class="fas fa-sign-out-alt"></i>
                                    </span>
                                    <span>logout</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  </div>
</template>

<script>
export default {
    name: `navbar`
}
</script>

<style>

</style>