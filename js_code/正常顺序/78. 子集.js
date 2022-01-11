/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {

  let ans=[]
  const dfs=(temp,index)=>{

      if(index===nums.length){
          ans.push([...temp])
          return;
      }

      temp.push(nums[index])  // 选择这个数
      dfs(temp,index+1)       // 基于该选择，继续往下递归，考察下一个数
      temp.pop()              // 上面的递归结束，撤销该选择
      dfs(temp,index+1)       // 不选这个数，继续往下递归，考察下一个数
  }
  dfs([],0)
  return ans
};


const subsets = (nums) => {
  const res = [];

  const dfs = (index, list) => {
    res.push(list.slice());     // 调用子递归前，加入解集
    for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
      list.push(nums[i]);       // 选这个数
      dfs(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1，不是index+1
      list.pop();               // 撤销选这个数
    }
  };
  dfs(0, []);
  return res;
};

