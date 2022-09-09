<template>
  <div class="login indigo darken-2" >
    <v-card>
        <v-card-text> 
            <v-text-field label="Firstname" hide-details dense outlined type="text" placeholder="Firstname" v-model="form.firstName" />  <br>
            <v-text-field label="Lastname" hide-details dense outlined type="text" placeholder="lastname" v-model="form.lastName" /> <br>
            
            
        <!-- <button @click="login()">
            login
        </button> -->
        <!-- <button @click="goRegister()">
            register
        </button> -->
        <v-btn @click="login()"
            rounded
            color="primary"
            dark
            width="107"
            class="mr-4"
        >
            Login
        </v-btn>

        <v-btn @click="goRegister()"
            rounded
            color="primary"
            dark
        >
            register
        </v-btn>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name: 'LoginPage',
    data () {
        return {
            form: {
                firstName: '',
                lastName: ''
            }
        }
    },
    methods: {
        ...mapActions ({
            setAuth: 'auth/setAuth'
        }),
        clearform() {
        this.form = {
            firstName: '',
            lastName: ''
        }
    },
        async login() {
            try {
                const { data } = await axios.post('http://localhost:3000/auth/login', {
                    firstName: this.form.firstName,
                    lastName: this.form.lastName
                })

                if (data.data.accessToken) {
                    alert('Login success')
                    this.setAuth({ 
                        accessToken: data.data.accessToken,
                        firstName: data.data.firstName,
                        lastName: data.data.lastName
                    })
                    console.log('ข้อมูลที่รับมา', data)
                    this.$router.push({ name: 'home' })
                }
                

            } catch (error) {
                console.error(error)
                alert(error?.response?.data?.message) 
                this.clearform()
            }
        },
        goRegister () {
            this.$router.push({ name: 'Register' })
        }
        
    }

}
</script>

<style scoped>
    .login {
        display:flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .login_card {
        border: 1px solid black;
        padding: 24px;
    }



</style>