/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {

  let window={},res=[]
  for(let i of nums1){
      if(window[i]===undefined) window[i]=true
  }
  for(let n of nums2){
      if(window[n]&&res.indexOf(n)===-1) res.push(n)
  }

  return res
};