// pages/myupload/myupload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  handleUpload:function(){
    //上传图片  小程序
    //1:选择单张图片
    wx.chooseImage({
      count:1,
      sourceType:["camera","album"],
      success: function(res) {
         //2:选择成功 保存选中图片本地路径
         var file1 = res.tempFilePaths[0];
         console.log(file1);
         //3:上传图片   node.js
         wx.uploadFile({
           url: 'http://127.0.0.1:3000/upload',
           filePath: file1,
           name: 'mypic',
           header:{
             "Content-Type":"multipart/form-data"
           },
           success:(res)=>{
             console.log(res)
           }
         })


      },
    })

    //3.1:url 
    //filePath  图片本地路径
    //name      参数名称
    //header    修改请求头
    //success   上传成功

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