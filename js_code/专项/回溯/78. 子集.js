`给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 `
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
`
子集问题和组合问题、分割问题的的区别，子集是收集树形结构中树的所有节点的结果。
而组合问题、分割问题是收集树形结构中叶子节点的结果。
`
 var subsets = function(nums) {

  let result =[],path=[]
  const dfs=(index)=>{
    result.push([...path])   //注意位置
    if(index>=nums.length){
      return;
    }
    for(let i=index; i<nums.length; i++){
      path.push(nums[i])
      dfs(i+1)
      path.pop()
    }
  }
  dfs(0)
  return result
};