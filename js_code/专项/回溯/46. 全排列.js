/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 `
 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 这里和77.组合问题 (opens new window)、131.切割问题 (opens new window)和78.子集问题 (opens new window)
 最大的不同就是for循环里不用startIndex了。
因为排列问题，每次都要从头开始搜索，例如元素1在[1,2]中已经使用过了，但是在[2,1]中还要再使用一次1。
 `
 `
 排列问题的不同：
每层都是从0开始搜索而不是startIndex
需要used数组记录path里都放了哪些元素了
 `
var permute = function(nums) {

    let result=[],path=[]

    const dfs=(used)=>{

        if(path.length===nums.length)
        {
            result.push([...path])
            return
        }

        for(let i=0;i<nums.length;i++){
            if(used[i]==true) continue;
            used[i]=true
            path.push(nums[i])
            dfs(used)
            path.pop()
            used[i]=false
        }
    }

    let used=new Array(nums.length).fill(false)
    dfs(used)
    return result

};