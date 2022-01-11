/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let ans=[];
    // nums.sort(function(a,b) {return a-b;})
    for(let i=0; i<nums.length; i++)
    {
       for(let j=1;j<nums.length; j++)
       {
           if((nums[i]+nums[j]==target)&&i!=j)
           {
               ans.push(i);
               ans.push(j);
               console.log(ans);
               return ans;
           }
       }
    }
    // console.log(ans)
    // return ans;
};

twoSum([3,2,4],6)