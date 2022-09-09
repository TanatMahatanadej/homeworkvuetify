<template>
<div class="register d-flex justify-center align-center ">
    
    <v-card elevation="5">
        <v-card-text >
        <v-text-field label="Firstname" hide-details dense outlined type="text" placeholder="Firstname" v-model="form.firstName" /> <br><br>
        <v-text-field label="Lastname" hide-details dense outlined type="text" placeholder="lastname" v-model="form.lastName" /> <br><br>
        <div class="d-flex justify-center ">
            <v-btn 
            class="ma-2"
            outlined
            color="indigo"
            @click="register()">
                Register
            </v-btn>
        </div>
        </v-card-text>
    </v-card>

</div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
name: 'registerPage',
    data () {
        return {
            form: {
                firstName:'',
                lastName:''
            }
        }
        
    },
methods: {
    ...mapActions({
        setAuth: 'auth/setAuth'
    }),
        clearform() {
        this.form = {
            firstName: '',
            lastName: ''
        }
    },
    async register () {
        try {
                const { data } = await axios.post('http://localhost:3000/auth/register', {
                    firstName: this.form.firstName,
                    lastName: this.form.lastName
                })

                    if(data.data) {
                        alert('create success')
                        console.log('ข้อมูลที่รับมา', data)
                        this.setAuth(data.data)
                        this.$router.push({ name: 'Login' })
                    }
                    
        } catch (error) {
                console.error(error)
                alert(error?.response?.data?.message) 
                this.clearform()
        }
    }
}
}
</script>

<style scoped>
    .register {
        
        height: 100vh;
        
    }
    .register_card {
        border: 1px solid black;
        padding: 24px;
    }
    


</style>