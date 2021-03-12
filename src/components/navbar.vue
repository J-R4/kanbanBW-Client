<template>
  <div>
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
                                <span>logout</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  </div>
</template>

<script>
export default {
    name: `navbar`,
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