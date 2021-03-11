<template>
  <div>
    <div class="theCard-sub subtitle is-5">{{category}}</div>
    <Task v-for="task in task" :key="task.id"
    :task='task'
    ></Task>
  </div>
</template>

<script>
export default {
    name: `category`,
    components: {
        Task
    },
    props:[`category`,`task`],
    data() {
        return {
            task: []
        }
    }
}
</script>

<style>

</style>