/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
  this.nums=[]
  this.size=size
  this.sum=0
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  if(this.nums.length>=this.size){
      this.sum-=this.nums.shift()
  }
  this.nums.push(val)
  this.sum+=val
  return this.sum/this.nums.length
};

`
给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。
实现 MovingAverage 类：
MovingAverage(int size) 用窗口大小 size 初始化对象。
double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，
请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。
`
class MovingAverage{
  constructor(size){
    this.nums=[]
    this.size=size
    this.sum=0
  }

  next(val){
    if(this.nums.length>=this.size){
      this.sum-=this.nums.shift()
    }
    this.nums.push(val)
    this.sum+=val
    return this.sum/this.nums.length
  }
}