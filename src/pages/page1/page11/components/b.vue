<template>
    <div>
        this is b.vue
    </div>
</template>
<script>
import Bus from './bus'
export default {
    data(){
        return{

        }
    },
    created(){
        Bus.$on("sendmsg",(data)=>{
            console.log(data)
        })
    },
    methods:{
      
    }
}
</script>
<style lang="scss">

</style>