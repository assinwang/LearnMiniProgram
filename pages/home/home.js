// pages/home/home.js
const app =  getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({
  //2.初始化数据
  data:{
    list:[]
  },

  // 1.监听页面的生命周期函数
  //页面被加载出来
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res)=>{
        console.log(res)
        const data = res.data
        this.setData({
          list: data
        })
      }
    })
  },
  //页面显示出来时
  onShow() {
    console.log('onShow')
  },
  //页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  //当页面隐藏起来时
  onHide(){
    console.log('onHide')
  },
  onUnload(){
    console.log('onUnload')
  },
  //3.监听wxml中相关的事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleViewClick(){
    console.log('页面被点击了')
  },

  //4.监听其他事件
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  //监听下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  }
})