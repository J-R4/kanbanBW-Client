<template>
    <div>
        <Login v-if="page === `login-page`" 
        @login="login" 
        @changePage="changePage"
        ></Login>

        <Register v-else-if="page === `register-page`" 
        @register="register"
        @changePage="changePage"
        ></Register>

        <Home v-else-if="page === `home-page`" 
        @changePage="changePage"
        @logout="logout"
        :tasks="tasks"
        :moveTasks="tasks"
        :oneTask="oneTask"
        :editedTask="editedTask"
        @showTasks="showTasks"
        ></Home>

        <AddTask v-else-if="page === `add-page`"
        @addTheTask="addTheTask"
        @changePage="changePage"
        ></AddTask>
        
        <EditTask v-else-if="page === `edit-page`"
        @editTask="editTask"
        @changePage="changePage"
        ></EditTask>

    </div>
</template>

<script>

import axios from "axios"
import Login from "./views/login.vue"
import Register from "./views/register.vue"
import Home from "./views/home.vue"
import AddTask from "./views/addTask.vue"
import EditTask from "./views/editTask.vue"

const baseURL = `http://localhost:3000/`

export default {
    name: `kanbanBW-app`,
    components: {
        Login, Register, Home, AddTask, EditTask
    },
    data() {
        return {
                page: `login-page`,
                tasks: [],
                oneTask: [],
                editedTask: [],
                moveTask: []
            }
        },
    methods: {
        changePage: function (to) {
            this.page = to;
        },
        login(input){
            const {email,password} = input
            axios({
                method: `POST`,
                url: baseURL + `login`,
                data: {
                    email,password
                }
            })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Good job!",
                        text: "You have been logged in!",
                        icon: "success",
                    })
                    localStorage.setItem('access_token',response.data.access_token)
                    this.page = `home-page`
                    this.showTasks()
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email/Password is wrong!',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
        },
        register(input){
            const {email,password} = input
            axios({
                method: `POST`,
                url: baseURL + `register`,
                data: {
                    email,password
                }
            })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Good job!",
                        text: "Your account is ready to be logged in!",
                        icon: "success",
                    })
                    this.page = 'login-page'
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong in your input!',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
        },
        showTasks(){
            axios({
                method: `GET`,
                url: baseURL + `tasks`,
            })
                .then(({data}) => {
                    console.log(data)
                    this.tasks = data
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong !',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
        },
        addTheTask(input){
            const {title, category} = input
            axios({
                method: `POST`,
                url: baseURL + `tasks`,
                data: {
                    title, category
                }
            })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Good job!",
                        text: "You added one task :)",
                        icon: "success",
                    })
                    this.page = `home-page`
                })
                .catch((err) => {
                    console.log(err)
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong !',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
        },
        getOneTask(input){
            const {id,title,category} = input
            axios({
                method: `PATCH`,
                url: baseURL + `tasks` + id,
            })
                .then((response) => {
                    console.log(response)
                    this.oneTask = response.data
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong !',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
        },
        editTask(input){
            const {id,title,category} = input
            axios({
                method: `PUT`,
                url: baseURL + `tasks` + id,
                data: {
                    title,
                    category
                }
            })
                .then((response) => {
                    console.log(response)
                    this.editedTask = response.data
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong !',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
                .finally(() => {
                    this.editedTask = []
                })
        },
        moveTheTask(input){
            const {id,category} = input
            axios({
                method: `PATCH`,
                url: baseURL + `tasks` + id,
                data: {
                    category
                }
            })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Good job!",
                        text: "You have move the task !",
                        icon: "success",
                    })
                    this.moveTask = response.data
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong !',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
                .finally(()=> {
                    this.moveTask = []
                })
        },
        deleteTask(input){
            const {id} = input
            axios({
                method: `DELETE`,
                url: baseURL + `tasks` + id
            })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Good job!",
                        text: "You have deleted the task!",
                        icon: "success",
                    })
                    this.page = `home-page`
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong !',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
        },
        logout(){
            Swal.fire({
                title: "Thank You!",
                text: "Glad to have u here, c u soon :)",
                icon: "success",
            })
            localStorage.removeItem('access_token')
            this.page = `login-page`
        }
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.page =`home-page`
        }
    }
};
</script>

<style>
    * {
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        background-color: black;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    .theCard-sub {
        background-color: black;
        border-color: white !important;
        color: white !important;
        margin: 0;
        padding: 0;
    }

    .theCard {
        background-color: white;
        border-radius: 20px;
        border-color: black;
        color: black;
    }
</style>
