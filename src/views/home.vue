<template>
  <div>
      <!-- This is home page -->
        <div>
            <div class="container is-fluid" style="width: 95%; height: 100vh; margin:0px 39px;">
                
                <Navbar @changePage="changePage" @emitLogout="logout"></Navbar>

                <!-- this is the kanban content -->
                <div class="columns" style="justify-content: space-between; margin: -8px; padding: -8px;">
                    <Category v-for="category in categories" :key="category.id"
                    :categories='categories'
                    :category='category.type'
                    :tasks='tasks'
                    ></Category>
                </div>
                <!-- this is the end of kanban content -->

            </div>
        </div>
        <!-- This is the end of home page -->
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue"
import Category from "../components/category.vue"

export default {
    name: `home`,
    props: [`tasks`,`oneTask`,`moveTask`,`editedTask`],
    components: {
        Navbar, Category
    },
    data() {
        return {
            categories: [
                {type:`Backlog`},{type:`Todo`},{type:`Done`},{type:`Completed`}],
        }
    },
    methods: {
        logout(){
            this.$emit('logout')
        },
        changePage(page){
            this.$emit(`changePage`,page)
        }
    },
  created: function() {
    this.$emit("showTasks")
  }
}
</script>

<style>

</style>