// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const TOP_DISTANCE = 1000
const types = ['pop', 'new', 'sell']

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ["流行", "新款", "精选"],
    goods: {
      pop: { page: 1, list: [] },
      new: { page: 1, list: [] },
      sell: { page: 1, list: [] }
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },

  onLoad: function (options) {
    // 1. 请求轮播图和推荐数据
    this._getMultiData();

    // 2. 请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },

  // 网路请求的函数
  _getMultiData(){
    getMultiData().then(res => {
      // console.log(res)
      // 取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },

  _getGoodsData(type){
    // 1.获取页码
    const page = this.data.goods[type].page;

    // 2.发送网络请求
    getGoodsData(type, page).then(res => {
      // 2.1取出数据
      const list = res.data.data.list;

      // 2.2将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;

      // 2.3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })
    })
  },

  // 事件监听函数
  handleTabClick(event){
  // 取出index
    const index = event.detail.index;
    // console.log(index)

    // 设置currentType
    this.setData({
      currentType: types[index]
    })
  },

  handleImageLoad(){
    // console.log('图片加载完成')
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow是页面显示出来的时候回调的函数
  // 页面显示并不意味着所有的图片都加载完成
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

  },

  onReachBottom() {
    //上拉加载更多 -> 请求新数据
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll(options) {
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;

    // 2.修改showBackTop属性
    // 官方：不要在滚动回调函数中频繁的调用this.setData
    const flag1 = scrollTop >= TOP_DISTANCE
    if(flag1 != this.data.showBackTop){
      this.setData({
        showBackTop: flag1
      })
    }

    // 3.修改isTabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }
})