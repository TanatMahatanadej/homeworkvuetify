<template>
  <div>
    
    <my-component >
        <template v-slot:header>
            <h1> หัวข้อตาราง </h1>
        </template>

        <template v-slot:footer>
            <div style="background-color:black; color: white; text-align: center; ">
                Footer
            </div>
        </template>

        <template v-slot:default="{user}">
            <!-- <img src="https://api.time.com/wp-content/uploads/2022/01/GettyImages-1238079646.jpg" alt=""> -->
            {{user.firstName}}
        </template>
    </my-component>

  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue'

export default {
    components: {
        MyComponent
    },
    data () {
        return {
            msg: 'My Component'
        }
        
    }
}
</script>

<style>

</style>