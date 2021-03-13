<template>
    <div>
        <Login v-if="page === `login-page`" 
        @login="login" 
        @changePage="changePage"
        @onGoogle="onGoogle"
        ></Login>

        <Register v-else-if="page === `register-page`" 
        @register="register"
        @changePage="changePage"
        ></Register>

        <Home v-else-if="page === `home-page`" 
        :tasks="tasks"
        :theId="theId"
        :theEmail="theEmail"
        @changePage="changePage"
        @logout="logout"
        @showTasks="showTasks"
        @editOne='editOne'
        @deleteOne='deleteOne'
        @moveOne='moveOne'
        ></Home>

        <AddTask v-else-if="page === `add-page`"
        @addTheTask="addTheTask"
        @changePage="changePage"
        ></AddTask>
        
        <EditTask v-else-if="page === `edit-page`"
        @editTheTask="editTheTask"
        @changePage="changePage"
        :theId="theId"
        ></EditTask>

        <div v-else>
            <div class="has-text-centered">
                <a class="button is-black" href="https://www.youtube.com/watch?v=BTodGJB1ckA&ab_channel=Spagaga">henlo :)</a>
                if you are confused and need help please contact J-R4 or.. click it, you know what i mean :)
            </div>
        </div>
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
                baseURL: `http://localhost:3000/`,
                theId: 0,
                theEmail: ``,
                isGoogle: false
            }
        },
    methods: {
        editOne(id){
            if(id){
                this.theId = id
                this.page = `edit-page`
            }
        },
        deleteOne(id){
            if(id){
                this.theId = id
                this.deleteTask(this.theId)
                this.page = `home-page`
            }
        },
        moveOne(cat){
            if(cat){
                console.log(cat,'ini masuk moveOne dan masuk the cat <<<<')
                this.theId = cat.id
                this.moveTheTask(cat)
                this.page = `home-page`
            }
        },
        onGoogle(google_token){
            if(google_token){
                this.googleLogin(google_token)
            }
        },
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
                    this.theEmail = email
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
        googleLogin(input){
            axios({
                method: 'POST',
                url: baseURL + '/oAuth',
                data: {
                    google_token: input,
                },
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
                    this.isGoogle = true
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
                .finally(()=>{

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
                url:  baseURL + `tasks`,
                headers: { access_token: localStorage.access_token },
            })
                .then(({data}) => {
                    console.log(data.task)
                    this.tasks = data.task
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
            console.log(input,"masuk add task <<<<<")
            const {title, category} = input
            axios({
                method: `POST`,
                url: baseURL + `tasks`,
                data: {
                    title, category
                },
                headers: { access_token: localStorage.access_token },
            })
                .then((response) => {
                    console.log(response,"masuk response add task <<<<<<<<<")
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
            const id = input
            axios({
                method: `GET`,
                url: baseURL + `tasks/` + id,
                headers: { access_token: localStorage.access_token },
            })
                .then((response) => {
                    console.log(response)
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
                    this.theId = 0
                })
        },
        editTheTask(input){
            const {id,title,category} = input
            axios({
                method: `PUT`,
                url: baseURL + `tasks/` + id,
                data: {
                    title,
                    category
                },
                headers: { access_token: localStorage.access_token },
            })
                .then((response) => {
                    Swal.fire({
                        title: "Good job!",
                        text: "You edited the task :)",
                        icon: "success",
                    })
                    this.page = `home-page`
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There is something wrong !',
                        footer: '<a href>Please contact J-R4 for further info.</a>'
                    })
                })
                .finally(()=> {
                    this.theId = 0
                })
        },
        moveTheTask(input){
            const {id,category} = input
            axios({
                method: `PATCH`,
                url: baseURL + `tasks/` + id,
                data: {
                    category
                },
                headers: { access_token: localStorage.access_token },
            })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Good job!",
                        text: "You have move the task !",
                        icon: "success",
                    })
                    this.showTasks()
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
                    this.theId = 0
                })
        },
        deleteTask(input){
            const id = input
            axios({
                method: `DELETE`,
                url: baseURL + `tasks/` + id,
                headers: { access_token: localStorage.access_token },
            })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Good job!",
                        text: `You have deleted the task!`,
                        icon: "success",
                    })
                    this.showTasks()
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
                    this.theId = 0
                })
        },
        logout(){
            if(this.isGoogle){
                var auth2 = gapi.auth2.getAuthInstance();
                
                auth2.signOut().then(function () {
                    console.log('User signed out.');
                });

                Swal.fire({
                    title: "Thank You!",
                    text: "Glad to have you here, see you soon Good People :)",
                    icon: "success",
                })
                
                localStorage.removeItem('access_token')
                this.isGoogle = false
                this.page = `login-page`
            } else {
                Swal.fire({
                    title: "Thank You!",
                    text: "Glad to have you here, see you soon Good People :)",
                    icon: "success",
                })
                localStorage.removeItem('access_token')
                this.page = `login-page`
            }
        }
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.page =`home-page`
        } else if(!localStorage.promo){
            console.log(`masuk`)
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
