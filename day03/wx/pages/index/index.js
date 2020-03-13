//index.js
//获取应用实例 index.js
Page({
  data: {
      uname:"james",
      obj:{}
  },
  loadProduct:function(){
    wx.request({
      url:"http://127.0.0.1:3000/findProduct",
      data:{pid:3},
      success:(res)=>{
        this.setData({
          obj:res.data.data[0]
        });
      }
    });
  },
  handleUname:function(){
      var n = this.data.uname;
      wx.navigateTo({
        url:"/pages/exam02/exam02?uname="+n
      })
  },
  handleJump1:function(){
    wx.redirectTo({
      //url: '/pages/exam02/exam02'
      url: '/pages/exam03/exam03'
    })
  },
  handleJump2:function(){
    wx.navigateTo({
      url: '/pages/exam02/exam02'
    })
  },
  handleJump3:function(){
    wx.reLaunch({
       url:"/pages/exam03/exam03"
    });
  },
  handleJump4:function(){
    wx.navigateTo({
       url:"/pages/exam02/exam02?id=3&age=19"
    });
  },
  //1:启动 vue app.js   index.js
  loadMore:function(){
    wx.request({
      url:"http://127.0.0.1:3000/login",
      data:{uname:"tom",upwd:"123"},
                 //小程序发送服务器参数
      success:(res)=>{   //服务器返回小程序数据
           console.log(res);
      }
    });  
  },
  onLoad: function(options) {
    this.loadMore();
    this.loadProduct();
  },
  onReady: function() {
    //Do some when page ready.
    
  },
  onShow: function() {
    //Do some when page show.
    
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    
  }
})