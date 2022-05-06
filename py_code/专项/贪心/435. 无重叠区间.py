'''
给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。
返回 需要移除区间的最小数量，使剩余区间互不重叠 。
'''
'''
贪心
按照右端从大到小排序
计算出不重叠区间的数量
'''
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:

        intervals.sort(key=lambda x:x[1])

        end,counts=intervals[0][1],1
        for i in range(1,len(intervals)):
            if intervals[i][0]>=end:
                counts+=1
                end=intervals[i][1]

        return len(intervals)-counts