<template>
  <div id="index">
      
    <Test :msg.sync="msg">123
      <template #head="user">
        <h1>this is head {{user}}</h1>
      </template>
    </Test>
    <button>{{msg}}</button>
  </div>
</template>
<script>
import {AjaxPromise} from '@/utils/ajax'
import Test from '../components/test'
export default {
  components:{
    Test
  },
  data(){
    return {
      msg:"hello world",
      user:{
        name:"index.vue"
      }
    }
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
    },
    test2(){
        let ge = this.testger()
        console.log(ge.next())
         console.log(ge.next())
          console.log(ge.next())
           console.log(ge.next())
    },
    * testger(){
      yield 'hello';
      yield 'world';
      return 'ending';
    }
  }
}
</script>
<style lang="scss">
.content{
  width: 600px;
  height: 500px;
  background-color: yellow;
}
td{
  text-align: center;
  border: 1px solid #000;
 white-space:nowrap
}
</style>
