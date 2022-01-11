/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals =intervals.sort((a,b)=>a[1]-b[1]);
    let temp=intervals[0][1],counts=0;
    for(let i=1; i<intervals.length; i++) {
      if(intervals[i][0]<temp) {
        counts+=1;
      }
      else{
        temp=intervals[i][1];
      }
    }
    console.log(intervals,temp,counts);
    return counts;
};


eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])