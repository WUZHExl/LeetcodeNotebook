/*
//TopK 
快速选择
*/


/**
 *
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
 function partition(arr, start, end) {
  const k = arr[start];
  let left = start + 1,
      right = end;
  while (1) {
      while (left <= end && arr[left] <= k) ++left;
      while (right >= start + 1 && arr[right] >= k) --right;

      if (left >= right) {
          break;
      }

      [arr[left], arr[right]] = [arr[right], arr[left]];
      ++left;
      --right;
  }
  [arr[right], arr[start]] = [arr[start], arr[right]];
  return right;
}

/**
* @param {number[]} arr
* @param {number} k
* @return {number[]}
*/
var getLeastNumbers = function(arr, k) {
  const length = arr.length;
  if (k >= length) return arr;
  let left = 0,
      right = length - 1;
  let index = partition(arr, left, right);
  while (index !== k) {
      if (index < k) {
          left = index + 1;
          index = partition(arr, left, right);
      } else if (index > k) {
          right = index - 1;
          index = partition(arr, left, right);
      }
  }

  return arr.slice(0, k);
};

/*
输入整数数组 arr ，找出其中最小的 k 个数。
例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
*/
//k表示最小的k个数
var getLeastNumbers = function(arr, k) {

    const quick_sort=(arr,l,r)=>{
        let first=l+1,last=r,key=arr[l]
        while(1){
            while(first<r&&arr[first]<=key) first++;
            while(last>l&&arr[last]>=key) last--;
            if(first>=last) break;

            [arr[first],arr[last]]= [arr[last], arr[first]];
        }
        [arr[l],arr[last]]=[arr[last],arr[l]]
        return last
    }

    let l=0,r=arr.length-1
    if(k>=arr.length) return arr
    let index=quick_sort(arr,l,r)
    while(index!==k){
        if(index>k){
            r=index-1
            index=quick_sort(arr,l,r)
        }else if(index<r){
            l=index+1
            index=quick_sort(arr,l,r)
        }
    }
    return arr.slice(0,k)
}

