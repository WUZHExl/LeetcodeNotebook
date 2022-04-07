var MyQueue = function() {
  //需要两个栈一个输入栈，一个输出栈，这里要注意输入栈和输出栈的关系
  this.stackIn=[]
  this.stackOut=[]
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  let len=this.stackOut.length
  if(len){//若退出栈中有元素
      return this.stackOut.pop()
  }
  while(this.stackIn.length){
      this.stackOut.push(this.stackIn.pop())
  }
  return this.stackOut.pop()
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
 const x = this.pop();
 this.stackOut.push(x);
 return x;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return !this.stackIn.length && !this.stackOut.length
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/