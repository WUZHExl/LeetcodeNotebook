/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

// 约瑟夫环
// 0,1,···,n-1这n个数字排成一个圆圈，
// 从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

// 当n=1时， 返回0
// 若f(n-1,m)返回x(最后剩下)，则f(n,m)=(f(n-1,m)+m)%n

// 递归
 var lastRemaining = function(n, m) {
      if(n===1) return 0
      let x=lastRemaining(n-1,m)
      return (x+m)%n
};

// 迭代
var lastRemaining = function(n, m) {
    let x=0
    for(let i=2;i<=n;i++){
      x=(x+m)%i
    }
    return x
};