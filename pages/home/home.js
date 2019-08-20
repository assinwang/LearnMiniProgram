// pages/home/home.js
Page({

  data: {

  },

  handleShowToast(){
    wx.showToast({
      title: '加载中...',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function(){
        console.log('弹窗成功')
      },
      fail: function(){
        console.log('弹窗失败')
      },
      complete: function(){
        console.log('完成函数调用')
      }
    })
  },

  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户取消')
        }
        if(res.confirm){
          console.log('用户确定')
        }
      }
    })
  },

  handleShowLoading(){
    wx.showLoading({
      title: '加载...',
      mask: true
    })

    setTimeout(()=>{
      //必须手动hideLoading才会让loading消失
      wx.hideLoading()
    },1000)
  },

  handleActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'green',
      success:function(res){
        console.log(res)
      }
    })
  },

  onShareAppMessage:function(options){
    return{
      title: '你好',
      path: '/pages/about/about',
      imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566307484887&di=647fae3a9deca7ef787e8593a242ab14&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201305%2F26%2F20130526140022_5fMJe.jpeg'
    }
  }
})