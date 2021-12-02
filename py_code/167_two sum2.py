from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
      i,j,sum=0,len(numbers)-1,0
      ans=[]
      while i<j:
        sum=numbers[i]+numbers[j]
        if sum==target: break
        elif sum<target: i+=1
        elif sum>target: j-=1
      ans.append(i+1)
      ans.append(j+1)
      print(i,j);
      return ans
      pass

s=Solution()
s.twoSum([2,7,11,15],9)