from typing import List

class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
      intervals.sort(key=lambda x:x[1])
      temp=intervals[0][1]
      count=0
      for i in range(1,len(intervals)):
        if intervals[i][0]<temp:
          count+=1
        else:
          temp=intervals[i][1]
        pass
      print(count)
      return count


s=Solution()
s.eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])

