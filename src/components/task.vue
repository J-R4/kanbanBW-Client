<template>
  <div>
    <div class="theCard">
      <div class="card">
        <div class="card-content" style="padding: 1rem;">
          <div class="content">
            <div class="title is-5">
              {{task.title}}
            </div>
              <div class="subtitle is-7 subtitle-color-grey">
                created by User{{task.UserId}}
              </div>
            <button class="button is-black is-small" @click='toggle = !toggle'>action</button>
            <div v-show='toggle'>
              <footer class="card-footer">
                <a href="#" @click='editOne' class="card-footer-item" style="color:black;"><i class="fas fa-edit fa-xs"></i></a>
                <a href="#" @click='deleteOne' class="card-footer-item"  style="color:black;"><i class="fas fa-trash fa-xs"></i></a>
                <a href="#" @click='moveDD = !moveDD' class="card-footer-item" style="color:black;"><i class="fas fa-arrows-alt fa-xs"></i></a>
              </footer>
              <!-- dropdown -->
              <div class="dropdown" v-show="moveDD">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Move Task To</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                  <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                      Backlog
                    </a>
                    <a href="#" class="dropdown-item">
                      Todo
                    </a>
                    <a href="#" class="dropdown-item">
                      Doing
                    </a>
                    <a href="#" class="dropdown-item">
                      Completed
                    </a>
                  </div>
                </div>
              </div>
              <!-- dropdown -->
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
    props: [`task`,`theId`],
    data(){
      return {
        toggle: false,
        moveDD: false,
        id: this.task.id
      }
    },
    methods: {
      editOne(){
        this.$emit(`editOne`, this.id)
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