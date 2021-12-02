
//左闭右闭
var quick_sort = function(nums,l,r){
    if(l+1>=r) return;
    let first=l,last=r-1,key=nums[first]
    while(first<last){
      //从右向左找小于基准的值
      while(first<last&&nums[last]>=key)  --last;
      //找到后交换
      nums[first]=nums[last]
      //从左向右找大于基准的值
      while(first<last&&nums[first]<=key) first++;
      nums[last]=nums[first]
    }
    nums[first]=key
    quick_sort(nums,l,first)
    quick_sort(nums,first+1,last)
}