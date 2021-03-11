<template>
  <div>
      <Login></Login>
      <Register></Register>
  </div>
</template>

<script>
import Login from "./login.vue"
import Register from "./register.vue"

export default {
    name: `welcome`,
    components: {
        Login,Register
    }
}
</script>

<style>

</style>