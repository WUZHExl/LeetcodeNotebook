/**
 * @param {string[]} timePoints
 * @return {number}
 */

//  给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

 var findMinDifference = function(timePoints) {
    

  // 将此列表的最小时间 mins[0] 加上 24 * 60 追加至列表尾部，用于处理最大值、最小值的差值这种特殊情况。
  let mins=[],res=24*60
  for(let t of timePoints){
      let arr=t.split(":")
      mins.push(Number(arr[0])*60+Number(arr[1]))
  }
  mins.sort((a,b)=>a-b)
  mins.push(mins[0]+24*60)
  for(let i=1;i<mins.length;i++)
  {
      res=Math.min(res,mins[i]-mins[i-1])
  }
  return res
};