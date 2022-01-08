`
以数组 intervals 表示若干个区间的集合，
其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回一个不重叠的区间数组，
该数组需恰好覆盖输入中的所有区间。
`

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
      let res=[]
      // 按区间左端点升序排序
      intervals.sort((a,b)=>a[0]-b[0])

      let prev=intervals[0]// 第一个区间默认与后面区间比较
      for(let i=1; i<intervals.length; i++){
         let  cur=intervals[i]
         if(prev[1]>=cur[0]){ //有重复
           prev[1]=Math.max(prev[1],cur[1])
         }else{
           res.push(prev)
           prev=cur
         }
      }

      res.push(prev)
      return res
};