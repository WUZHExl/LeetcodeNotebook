`
给定一个整数数组 nums 和一个整数 k ，
请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。
`
// map+数组
let topKFrequent = function(nums, k) {
    let map=new Map()
    let arr=[...new Set(nums)]; //去重
    nums.map((num)=>{
      if(map.has(num))  map.set(num,map.get(num)+1);
      else map.set(num,1)
    })
    // 按照频率大小排序,从达到小
    let ans=arr.sort((a,b)=>map.get(b)-map.get(a));
    return ans.slice(0,k)

}

// map+桶排序
`
桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，
将数据分到有限数量的桶里，每个桶再分别排序
（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）
`

`
首先使用 map 来存储频率
然后创建一个数组（有数量的桶），将频率作为数组下标，
对于出现频率不同的数字集合，存入对应的数组下标（桶内）即可。
`
let topKFrequent= function(nums,k){
  let map=new Map()
  let arr=[...new Set(nums)]
  nums.map(n=>{
    if(map.has(n)) map.set(n,map.get(n)+1)
    else map.set(n,1)
  })

  if(map.size<=k) return [...map.keys()]

  return bucketSort(map,k)
}

let bucketSort=(map,k)=>{
  let arr=[],res=[]
  // map和set的forEach分别是
  map.forEach((val,key)=>{
    // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
    if(!arr[val]){
      arr[val]=[key]
    }else{
      arr[val].push(key)
    }
  })

  // 倒序遍历获取出现频率最大的前k个数
  for(let i=arr.length-1;i>=0&&res.length<k;i--){
    if(arr[i]){
      res.push(...arr[i])
    }
  }
  return res

}