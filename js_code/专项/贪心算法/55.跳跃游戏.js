`
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。


`
// 贪心
`
贪心算法局部最优解：每次取最大跳跃步数（取最大覆盖范围），整体最优解：
最后得到整体最大覆盖范围，看是否能到终点。
`
var canJump = function (nums) {
  if (nums.length === 1) return true; //长度为1 直接就是终点
  let cover = nums[0]; //能覆盖的最远距离
  for (let i = 0; i <= cover; i++) {
      cover = Math.max(cover, i + nums[i]); //当前覆盖距离cover和当前位置加能跳跃的距离中取一个较大者
      if (cover >= nums.length - 1) {
          //覆盖距离超过或等于nums.length - 1 说明能到达终点
          return true;
      }
  }
  return false; //循环完成之后 还没返回true 就是不能达到终点
};