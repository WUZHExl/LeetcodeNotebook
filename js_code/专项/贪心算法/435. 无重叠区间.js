/**
 * @param {number[][]} intervals
 * @return {number}
 */

`
给定一个区间的集合 intervals ，
其中 intervals[i] = [starti, endi] 。
返回 需要移除区间的最小数量，使剩余区间互不重叠 。
`
 var eraseOverlapIntervals = function(intervals) {

  intervals.sort((a,b)=>a[1]-b[1])//按照右端排序

  let end=intervals[0][1]
  let counts=1
  for(let i=1;i<intervals.length;i++){
      if(intervals[i][0]>=end){
          counts++       //记录非重叠区间的数目
          end=intervals[i][1]
      }
  }   
  return intervals.length-counts
};