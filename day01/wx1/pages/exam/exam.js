// pages/exam/exam.js
Page({
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("exam 获取参数");
      console.log(options);
      console.log("1:组件加载成功");//1
      //自动跳转
      //wx.redirectTo({
      //  url: '/pages/exam2/exam2'
      //});
  },
  onReady: function () {
      console.log("2:初次渲染完成");//1
  },
  onShow: function () {
      console.log("3:页面显示完成");//m
  },
  onHide: function () {
      console.log("4:页面隐藏/切换后台");//m
  },
  onUnload: function () {
      console.log("5:组件卸载触发")  
  },


  onPullDownRefresh: function () {
    console.log("下拉")
  },
  onReachBottom: function () {
    console.log("上拉");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})