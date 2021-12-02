/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
      let i=0,j=numbers.length-1,sum=0;
      let ans=[];
      while (i<j){
        sum=numbers[i]+numbers[j];
        if(sum==target) break;
        else if(sum<target) i++;
        else if(sum>target) j--;
      }
      ans.push(i+1);
      ans.push(j+1);
      console.log(ans);
      return ans;
};

twoSum([2,7,11,15],9)