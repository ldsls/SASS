<template>
  <div id="accountInfo">
  <!-- 123 -->
  </div>
</template>

<script>
export default {
  name: 'AccountInfo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .companyInfo{
    width: 100%;
    height: 600px;
    border-radius: 5px;
    /* border: 1px solid red; */
    background: #fff;
    padding: 20px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  .personalInfo{
    width: 100%;
    /* height: 475px; */
    border-radius: 5px;
    /* border: 1px solid red; */
    background: #fff;
    margin-top: 15px;
    padding: 20px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  .companyInfoText{
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
    height: 65px;
    line-height: 40px;
  }
  .companyInfoList{
    font-size: 14px;
    color: #666;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .avatar{
    height: 70px;
  }
  .avatar img{
    width: 70px;
    border-radius: 35px;
    float: left;
  }
  .avatar span{
    margin-left: 30px;
    /* line-height: 70px; */
    display: inline-block;
    height: 36px;
    line-height: 36px;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    color: #32b3f1;
    border: 1px solid #32b3f1;
    font-size: 14px;
    margin-top: 15px;
    cursor: pointer;
  }
  .companyName{
    width: 415px;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .projectIntro textarea{
    width: 415px;
    height: 80px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize:none;
  }
  .selectList select{
    width: 415px;
    color: #333;
    border: 1px solid #ccc;
    height: 38px;
    border-radius: 5px;
  }
  .selectList option{
    width: 415px;
    color: #333;
    height: 38px;
  }
  .sure{
    height: 38px;
    width: 95px;
    text-align: center;
    line-height: 38px;
    background: #ccc;
    color: #fff;
    display: inline-block;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
  }
  .personalInfoList li{
    margin-top: 15px;
  }
  .personalInfoList li span:nth-child(1){
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    width: 120px;
    color: #333;
  }
  .personalInfoList li span:nth-child(2){
    font-size: 14px;
    font-weight: normal;
    display: inline-block;
    width: 150px;
    color: #333;
  }
  .personalInfo li span:nth-child(3){
    font-size: 14px;
    font-weight: normal;
    display: inline-block;
    color: #32b3f1;
    cursor: pointer;
  }
  .red{
    color: red !important;
    cursor: default !important;
  }
</style>
