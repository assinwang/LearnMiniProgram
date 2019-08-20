// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表：让使用者可以给组件传入数据
   */
  properties: {
    title: {
      type: String,
      value:'',
      oberver: function(newVal, oldVal){

      }
    }

  },

  /**
   * 组件的初始数据：定义组件内部的初始化数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表：用于定义组件内部的函数
   */
  methods: {

  },

  /**
   * 组件的配置选项列表：
   */
  options: {
    multipleSlots: true
  },

  // 外界给组件传入额外的样式
  externalClasses:[],

  // 可以监听properties/data的改变
  obervers:{
    counter: function(newVal){
    }
  },

  // 组件中监听生命周期函数
  // 1.监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来时')
    },
    hide(){
      console.log('监听组件所在页面隐藏起来时')
    },
    resize(){
      console.log('监听页面尺寸的改变')
    }
  },

  // 2.监听组件本身的生命周期
  created(){
    console.log('组件被创建')
  },
  attached(){
    console.log('组件被添加到页面中')
  },
  ready(){
    console.log('组件被渲染出来时')
  },
  move(){
    console.log('组件被移动到另外一个节点')
  },
  detached(){
    console.log('组件被移除时')
  }

})
