/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
`
在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
`

//暴力循环
 var canCompleteCircuit = function(gas, cost) {


  for(let i=0;i<gas.length;i++){

      let rest=gas[i]-cost[i]//记录剩余油量
      // 以i为起点行驶一圈，index为下一个目的地
      let index=(i+1)%gas.length
      while(rest>0&&index!==i){
          rest+=gas[index]-cost[index]
          index=(index+1)%gas.length
      }

      if(rest>=0&&index===i) return i
  }

  return -1
};

//贪心
var canCompleteCircuit = function(gas, cost) {


  let n=gas.length
  let start=0,curSum=0,totalSum=0
  for(let i=0;i<n;i++){
      curSum+=gas[i]-cost[i] //计算剩余油量和
      totalSum+=gas[i]-cost[i]
      if(curSum<0){ //若在i位置，剩余油量和小于0,说明从当前位置出发不能走一圈
          curSum=0
          start=i+1
      }
  }

  if(totalSum<0) return -1
  return start

};