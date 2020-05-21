<template>
  <div class="test">
    {{msg}}
    <input type="text" placeholder="测试聚焦" v-focus>
   
    <button @click="change">改变</button>
    <slot name="head" v-bind="obj"></slot>
    <slot name="body"></slot>
     <slot name="foot"></slot>
    <slot ></slot>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    msg: String
  },
  directives: {
    focus: {
        // 指令的定义
        inserted: function (el) {
            console.log(el,"el")
        el.focus()
        }
    }
 },
  data(){
      return{
          obj:{
              name:'test.vue'
          }
      }
  },
  methods:{
    change(){
       this.msg = "hahah"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
