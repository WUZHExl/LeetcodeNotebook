from typing import List

class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:

        count,i,length=0,0,len(points)
        points.sort(key=lambda x:x[1])

        while i<length:
            temp=points[i][1]
            i+=1
            while i<length and points[i][0]<=temp:
                i=i+1
            count+=1
        return count