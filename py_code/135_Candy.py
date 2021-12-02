from typing import List

class Solution:
    def candy(self, ratings: List[int]) -> int:
      ans=[1]*len(ratings) ##初始化的方式
      sum=0
      # for x in ratings:
      #   ans.append(1)
      for i in range(1,len(ratings)):
        if ratings[i]>ratings[i-1]:
          ans[i]=ans[i-1]+1
      for i in range(len(ratings)-1,0,-1):
        if ratings[i-1]>ratings[i]:
          ans[i-1]=max(ans[i]+1,ans[i-1])        
      for x in ans:
        print(x)
        sum+=x
      print(sum)
      return sum;

s=Solution()
s.candy([1,0,2])