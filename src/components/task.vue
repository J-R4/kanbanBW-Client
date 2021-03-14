<template>
  <div>
    <div class="theCard">
      <div class="card">
        <div class="card-content" style="padding: 1rem;">
          <div class="content">
            <div class="title is-5">
              {{task.title}}
            </div>
              <div class="subtitle is-7 subtitle-color-grey" style="margin-bottom: 15px;">
                created by User{{task.UserId}}
              </div>
            <button class="button is-black is-small" @click='toggle = !toggle'>action</button>
            <div v-show='toggle'>
              <footer class="card-footer">
                <a href="#" @click='editOne' class="card-footer-item" style="color:black;"><i class="fas fa-edit fa-xs"></i></a>
                <a href="#" @click='deleteOne' class="card-footer-item"  style="color:black;"><i class="fas fa-trash fa-xs"></i></a>
                <a href="#" @click='moveDD = !moveDD' class="card-footer-item" style="color:black;"><i class="fas fa-arrows-alt fa-xs"></i></a>
              </footer>
              <!-- select -->
              <div class="box" style="margin: 0px; padding: 25px;" v-show="moveDD">
                <div class="select is-small">
                  <select @click=" editIt" v-model="theCat">
                    <option value="Backlog">Move to Backlog</option>
                    <option value="Todo">Move to Todo</option>
                    <option value="Doing">Move to Doing</option>
                    <option value="Done">Move to Done</option>
                    <input @click="moving" type="button" value="confirm">
                  </select>
                </div>
              </div>
              <!-- select -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: `task`,
    props: [`task`,`theId`,`categories`,`category`,`theEmail`],
    data(){
      return {
        toggle: false,
        moveDD: false,
        id: this.task.id,
        theCat: ``,
      }
    },
    methods: {
      editOne(){
        this.$emit(`editOne`, this.id)
      },
      moving(){
        if(this.theCat !== this.category){
          this.$emit(`moveOne`,{id: this.id, category: this.theCat})
        } else {
          Swal.fire(
            'Knock knock...',
            'You cannot move the task to the same category..',
            'question'
          )
        }
      },
      deleteOne(){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$emit(`deleteOne`,this.id)
          }
        })
      }
    }
}
</script>

<style>

</style>