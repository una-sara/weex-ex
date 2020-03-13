//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    list:[],    //保存轮播图
    navlist:[]  //保存九宫格图片
  },
  handleJump:function(e){
    //1:获取自定义属性
    var id = e.target.dataset.id;
    //2:判断条件 1
    if(id == 1){
      wx.navigateTo({
        url:"/pages/shoplist/shoplist"
      });
    }
    //3:跳转
  },
  loadMoreNav:function(){
    wx.request({
      url:"http://127.0.0.1:3000/icons",
      success:(res)=>{
         this.setData({
           navlist:res.data
         })
      }
    });
  },
  loadMore:function(){
    //1:创建ajax请求 imagelist2
    wx.request({
      url:"http://127.0.0.1:3000/imagelist2",
      success:(res)=>{
        this.setData({
          list:res.data
        });
      }
    });
    //2:获取数据保存list
  },
  onLoad: function(options) {
     this.loadMore();    //获取轮播图数据
     this.loadMoreNav(); //获取九宫数据
  },
  onReady: function() {

  },
  onShow: function() {
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