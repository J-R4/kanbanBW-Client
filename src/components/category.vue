<template>
  <div>
      <div class="column" style="margin: 8px; padding:8px;">
        <div class="theCard-sub subtitle is-5">{{category}}</div>
        <div v-for="task in tasks" :key="task.id">
          <Task v-if="task.category === category"
          :task='task'
          ></Task>
        </div>
      </div>
  </div>
</template>

<script>
import Task from "../components/task.vue"

export default {
    name: `category`,
    components: {
        Task
    },
    props:[`category`,`tasks`],
    data() {
        return {
        }
    },
    methods: {
        changePage(page){
            this.$emit(`changePage`,page)
        }
    }
}
</script>

<style>
  
</style>