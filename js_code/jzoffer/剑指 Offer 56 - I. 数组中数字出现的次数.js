// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。
// 请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums) {
    
  let s=new Set()
  for(let n of nums){
      if(s.has(n)){
          s.delete(n)
      }else{
          s.add(n)
      }
  }
  return [...s]
};


/*
我们进行一次全员异或操作，得到的结果就是那两个只出现一次的不同的数字的异或结果。

我们刚才讲了异或的规律中有一个 任何数和本身异或则为0， 因此我们的思路是能不能将这两个不同的数字分成两组 A 和 B。
分组需要满足两个条件.

两个独特的的数字分成不同组

相同的数字分成相同组

这样每一组的数据进行异或即可得到那两个数字。

问题的关键点是我们怎么进行分组呢？

由于异或的性质是，同一位相同则为 0，不同则为 1. 我们将所有数字异或的结果一定不是 0，也就是说至少有一位是 1.

我们随便取一个，分组的依据就来了， 就是你取的那一位是 0 分成 1 组，那一位是 1 的分成一组。
这样肯定能保证 2. 相同的数字分成相同组，不同的数字会被分成不同组么。 很明显当然可以， 因此我们选择是 1，也就是
说 两个独特的的数字 在那一位一定是不同的，因此两个独特元素一定会被分成不同组

*/

var singleNumbers = function(nums) {
    let res=0,a=0,b=0
    for(let n of nums) {
      //全员异或的结果===两个唯一的数异或结果
      res^=n
    }
    //找到第一位不是0的
    h=1
    while(ret&h===0){
      h<<=1
    }

    for(let n of nums){
      // # 根据该位是否为0将其分为两组
      if(h&n===0) a^=n
      else b^=n
    }
    return [a,b]


    
};