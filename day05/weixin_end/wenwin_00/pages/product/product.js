// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },
  checkForm:function(e){
    //当用户点击添加商品该方法于用验证表单
    //1:获取用户输入 商品名称
    var name = e.detail.value.name;
    //2:创建正则表达式 3~8 字母数字_
    //3:验证商品名称是否正确
    var reg = /^[a-z0-9_]{3,8}$/i;
    if(!reg.test(name)){
      //4:如果出错  提示
      wx.showToast({
        title:"商品格式不正确 3~6位",
        icon:"none"
      });
      setTimeout(function(){
       wx.hideToast();
      },1500);
      return; //停止程序执行
    }
    //5:发送ajax请求
    wx.request({
      url:"http://127.0.0.1:3000/addpro",
      data:{name:name},
      success:(res)=>{
        //6:获取返回数据 提示
        wx.showToast({
          title:"添加成功"
        });
        setTimeout(function(){
          wx.hideToast();
        },1000);
        e.detail.value.name = "";
      }
    }); 
    

  },
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})