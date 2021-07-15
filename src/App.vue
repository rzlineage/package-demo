<template>
  <div id="app">
    <!-- <layout-master :params="params"/> -->
    <!-- <float-box/> -->
    <infinite-scroll :scroll_direction="1">
      <ul class="fs">
        <li>21312312</li>
        <li>21312312</li>
        <li>21312312</li>
      </ul>
    </infinite-scroll>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // params:{
      //   head_height:"50px",
      //   head_fixed:true,
      //   left:"float",
      //   left_width:"100px"
      // }
    }
  }
};
</script>
<style lang="less">
  .fs{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>
