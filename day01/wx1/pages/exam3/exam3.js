// pages/exam3/exam3.js
Page({
  data: {
  },
  onLoad: function (options) {
    //wx.redirectTo({
    //  url: '/pages/exam4/exam4?id=19'
    //})
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {
      console.log("5:卸载组件 exam3");
  },
  onPullDownRefresh: function () {
       console.log("下拉操作")
  },
  onReachBottom: function () {
      console.log("上拉操作")
  },
  //监听用户滑动操作exam3.js
  onPageScroll:function(opt){
     console.log(opt.scrollTop);
  },
  onShareAppMessage: function () {
  
  }
})