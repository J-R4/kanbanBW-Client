<template>
  <div>
      <div class="column" style="margin: 8px; padding:8px;">
        <div class="box theCard-sub title is-4" style="margin-top: 20px;
        background-color: black !important;
        border-color: white !important;
        color: white !important;
        ">
        <span>
          {{category}}
        </span>
        <div v-for="task in tasks" :key="task.id">
          <Task v-if="task.category === category"
          :task='task'
          :theId='theId'
          @editOne='editOne'
          @deleteOne='deleteOne'
          ></Task>
        </div>
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
    props:[`category`,`tasks`,`theId`],
    data() {
        return {
        }
    },
    methods: {
      editOne(id){
      this.$emit(`editOne`,id)
      },
      deleteOne(id){
        this.$emit(`deleteOne`,id)
      }
    }
}
</script>

<style>
  
</style>