// pages/login/login.js
var utils = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ""
  },

  bindUsernameInput:function(e){
    var userTxt = e.detail.value
    this.setData({
      username:userTxt
    })
  },

  bindPasswordInput:function(event){
    var passwordTxt = event.detail.value;
    this.setData({
      password : passwordTxt
    })
  },
  login:function(){
    if(utils.isEmpty(this.data.username)){
      console.log("用户名不能为空")
      return
    }
    console.log("username : " + this.data.username)
    if(utils.isEmpty(this.data.password)){
      console.log("密码不能为空")
      return
    }
    console.log("password : " + this.data.password)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log("onLoad...");
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