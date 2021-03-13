<template>
  <div>
      <div class="column"
          style="display: flex; justify-content: center; align-items: center; align-content: center; margin-top: 140px;">
          <div
              style="display: flex; justify-content: center; align-items: center; align-content: center;">
              <form class="box"
                  style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);">
                  <div>
                      <p style="margin: 0px 0px 10px 0px;">
                          Edit Task
                      </p>
                  </div>
                  <div class="field">
                      <label class="label">Title</label>
                      <div class="control has-icons-left">
                          <input v-model="title" class="input" id="title" type="text"
                              placeholder="e.g. Love Somebody">
                          <span class="icon is-small is-left">
                              <i class="fas fa-prescription-bottle"></i>
                          </span>
                      </div>
                  </div>

                  <div class="field">
                      
                      <div class="control has-icons-left">
                        <label class="label">Category</label>
                          <div class="select is-link">
                          <span class="icon is-small is-left">
                              <i class="fas fa-align-justify"></i>
                          </span>
                            <select v-model="category">
                              <option>Backlog</option>
                              <option>Todo</option>
                              <option>Doing</option>
                              <option>Completed</option>
                            </select>
                          </div>
                      </div>
                  </div>

                  <button type="submit" class="button is-black"
                      @click.prevent="editOne">Edit task</button>
                  <button id="link-register-reg" class="button is-white" style="border-color:grey;"
                      @click.prevent="changePage('home-page')">Cancel</button>
                  <br><br>
              </form>
          </div>
       </div>
  </div>
</template>

<script>
export default {
    name: `editTask`,
    props: ['theId'],
    data(){
      return {
        title: ``,
        category: ``,
      }
    },
    methods: {
        changePage(page){
            this.$emit(`changePage`,page)
        },
        editOne(){
            this.$emit(`editTheTask`,{
                id: this.theId,
                title: this.title,
                category: this.category
            })
        },
    }
}
</script>

<style>

</style>