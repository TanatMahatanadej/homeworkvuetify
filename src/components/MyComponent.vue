<template>
  <div class="card">
    <div class="header">
        <slot name="header"></slot>
    </div>
    
    <div>
       <!--  slotname ถ้าไม่ใส่ชื่อ คือ default -->
       <slot :user="form"></slot> 
    </div>

    <div class="footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default:''
        }
    },
    data () {
        return {
            form: {
                firstName: 'David',
                lastName: 'mason',
                age: 55,
                tel: '09123919283'
            }
        }
    }
}
</script>

<style scoped>
    .card {
        border: 1px solid black;
        
    }

    .header{
        border: 1px solid black;
        padding: 12px;
    }

    .footer{
        border: 1px solid black;
        padding: 12px;
    }
</style>