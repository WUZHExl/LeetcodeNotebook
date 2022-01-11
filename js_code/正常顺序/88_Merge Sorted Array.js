/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
     let index=m-- + n-- -1;
     while(m>=0&&n>=0){
       if(nums1[m]>=nums2[n]) nums1[index--]=nums1[m--];
       else nums1[index--]=nums2[n--];
     }
     while(n>=0)
     {
       nums1[index--]=nums2[n--];
     }
     console.log(nums1);
};

merge([1,2,3,0,0,0],3,[2,5,6],3);