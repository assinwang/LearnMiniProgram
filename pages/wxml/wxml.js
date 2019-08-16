// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstname: 'Johnson',
    lastname: 'Wang',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies:['星际穿越','盗梦空间','大话西游'],
    letters: ['a', 'b', 'c']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    this.setData({isActive: !this.data.isActive})
  },
  handleSwitchShow() {
    this.setData({ isShow: !this.data.isShow })
  }
})