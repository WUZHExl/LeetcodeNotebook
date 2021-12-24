`
请实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内没有其他安排，则可以存储这个新的日程安排。

MyCalendar 有一个 book(int start, int end)方法。它意味着在 start 到 end 时间内增加一个日程安排，注意，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end。

当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生重复预订。

每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true。否则，返回 false 并且不要将该日程安排添加到日历中。

请按照以下步骤调用 MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
`

var MyCalendar = function () {
  this.events = [];
};

// 查找要插入的点的最左侧边界
MyCalendar.prototype.findInsertIndex=function (start){
  var left=0;
  var right=this.events.length-1;
  // 左闭右闭区间
  while(left<=right){
    let mid=left+(right-left)/2
    // 如果要插入的区间的起始点刚好跟当前区间的起始点相同，则找到了要插入的区间位置
    if(this.events[mid][0]===start){
      return mid
    }else if(this.events[mid][0]<start){
      left=mid+1;
    }else{
      right=mid-1;
    }

  }
  return left
}


MyCalendar.prototype.book = function(start,end){
  //查找到当前要插入区间在数组中的位置
  let index=this.findInsertIndex(start)
  if(
     // 当前要插入的区间的起始点小于要插入的区间前一个区间的结束点
    (this.events[index-1]&&start<this.events[index-1][1])||
     // 当前要插入的区间的结束点大于要插入的区间的起始点
    (this.events[index]&&end>this.events[index][0])
  ){

    return false;
  }
  this.events.splice(index, 0, [start, end]);
  return true;
}