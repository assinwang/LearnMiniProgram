// pages/home/home.js
import request from '../../service/network.js'

Page({
  data: {

  },

  onLoad: function (options) {
    // 1.原生方式发送网络请求
    // this.get_data_origin()

    // 2.使用封装的request发送网络请求
    // promise最大的好处就是防止出现回调地狱
    request({
      url:'http://123.207.32.32:8000/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  get_data_origin(){
    //发送网络请求
    // 1.发送最简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: function(res){
    //     console.log(res)
    //   }
    // })

    // 2.携带参数的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    // 3.携带参数的post请求
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'Johnson',
        age: 18
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }

})