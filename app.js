const TOKEN = 'token'

App({
  globalData:{
    token: ''
  },

  onLaunch: function(){
    // 1.先从缓存中取出token
    const token = wx.getStorageInfoSync(TOKEN)

    // 2.判断token是否有值
    if(token && token.keys.length){ // 已经有token
      // 验证token是否过期
      this.check_token(token)
    } else{  //没有token
      // 进行登录操作
      this.login()
    }
  },

  check_token(token){
    console.log('执行了验证token的操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success:(res) => {
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token;
        }else{
          this.login();
        }
      },
      fail: function(err){
        console.log(err)
      }
    })
  },

  login(){
    //登录操作
    console.log('执行了登录操作')
    wx.login({
      // code有效期只有5分钟
      success: (res) => {
        console.log(res)
        // 1.获取code
        const code = res.code;
        // 2. 将code发送给自己的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token;

            // 2.将token保存在globalData中
            this.globalData.token = token;
            // console.log(this.globalData.token)

            //3. 进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})