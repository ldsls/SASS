<template>
  <div class="pathManage">
    <div class="pathManageText">
       通道管理
    </div>
  

  </div>
</template>

<script>
export default {
  name: 'PathManage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pathManage{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    /* border: 1px solid red; */
    background: #fff;
    padding: 20px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  .pathManageText{
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid #ccc;
      height: 65px;
      line-height: 40px;
  }
</style>
