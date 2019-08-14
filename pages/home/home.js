// pages/home/home.js
Page({
  data:{
    name: 'Johnson',
    age: 18,
    students: [
      { id: 100, name: 'Kobe', age: 30 },
      { id: 101, name: 'James', age: 28 },
      { id: 102, name: 'Curry', age: 32 },
      { id: 103, name: 'Why', age: 18 },
    ],
    counter:0
  },
  handleBtnAdd(){
    // 1.错误的做法
    // this.data.counter += 1
    // 2.this.setData()
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleBtnSub() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})