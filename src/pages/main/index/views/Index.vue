<template>
  <div id="index">
   this is main index1546
  </div>
</template>
<script>
import {AjaxPromise} from '@/utils/ajax'
export default {
  data(){
    return {}
  },
  created(){
      this.test()
  },
  methods:{
    test(){
        let url = '/bus/pub/carpool/pendingOrderNum'
        AjaxPromise(url,{}).then(res=>{
            console.log(res)
        })
    }
  }
}
</script>
<style lang="scss">
</style>
