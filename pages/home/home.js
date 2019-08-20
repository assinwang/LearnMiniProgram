// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },

  handleIncrement(event){
    console.log('+++', event)
    this.setData({
      counter:this.data.counter + 1
    })
  },

  handleItemSelect(event){
    console.log(event.detail.index)
    console.log(event.detail.title)
  },

  handleIncrementCpn(){
    //修改my-select中的counter
    // 1.获取组件对象
    // const my_select = this.selectComponent('.select-class')
    const my_select = this.selectComponent('#select-id')
    console.log(my_select)

    // 2.通过setData直接修改修改组件中的数据(不符合开发规范))
    // my_select.setData({
    //   counter: my_select.data.counter + 100
    // })

    // 3.通过方法进行修改
    my_select.incrementCounter(10)

  },

  handleChangeShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  }
})