<template>
    <div>
        this is a .vue
        <button @click="test">测试</button>
    </div>
</template>
<script>
import Bus from './bus'
export default {
    data(){
        return{

        }
    },
    methods:{
        test(){
            Bus.$emit("sendmsg","hello world")
        }
    }
}
</script>
<style lang="scss">

</style>