<template>
  <div>
      <!-- This is home page -->
        <div>
            <div id="home-page" class="container is-fluid" style="width: 95%; height: 100vh; margin:0px 10px 0px 10px;">
                
                <Navbar></Navbar>

                <!-- this is the kanban content -->
                <div class="columns" style="justify-content: space-between; margin: -8px; padding: -8px;">
                    <div class="column is-one-quarter card" style="margin: 8px; padding:8px;">
                        <Category v-for="category in categories" :key="category.id"
                        :categories='categories'
                        :category='category'
                        :task='task'
                        ></Category>
                    </div>
                </div>
                <!-- this is the end of kanban content -->

            </div>
        </div>
        <!-- This is the end of home page -->
  </div>
</template>

<script>
import Navbar from "./navbar.vue"
import Category from "./category.vue"

export default {
    name: `home`,
    components: {
        Navbar, Category
    },
    data() {
        return {
            categories: [`Back-log`,`Todo`,`Done`,`Completed`,`anggi`],
            task: []
        }
    }
}
</script>

<style>

</style>