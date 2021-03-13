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
                    :theId='theId'
                    :theEmail="theEmail"
                    @editOne='editOne'
                    @deleteOne='deleteOne'
                    @moveOne='moveOne'
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
    props: [`tasks`,`theId`,`theEmail`],
    components: {
        Navbar, Category
    },
    data() {
        return {
            categories: [
                {type:`Backlog`},{type:`Todo`},{type:`Doing`},{type:`Done`}],
        }
    },
    methods: {
        logout(){
            this.$emit('logout')
        },
        changePage(page){
            this.$emit(`changePage`,page)
        },
        editOne(id){
        this.$emit(`editOne`,id)
        },
        deleteOne(id){
            this.$emit(`deleteOne`,id)
        },
        moveOne(cat){
            this.$emit(`moveOne`,cat)
        }
    },
  mounted: function(){
    this.$emit("showTasks")
  }
}
</script>

<style>

</style>