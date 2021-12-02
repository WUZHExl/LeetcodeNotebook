/**
 * @param {number[]} a
 * @return {number[]}
 */

//  给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 
//  即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。


//  var constructArr = function(a) {
//   let sum=1,ans=[]
//   for(let i of a) sum=sum*i
//   for(let i of a) ans.push(Math.floor(sum/i))
//   return ans

// };
var constructArr = function(a) {
  if(a==null||a.length===0) return a
  let resleft=[],resright=[];
  resleft[0]=1,resright[a.length-1]=1;
  for(let i=1;i<a.length;i++) {
    resleft[i]=resleft[i-1]*a[i-1];
  }
  for(let i=a.length-2;i>=0;i--) {
    resright[i]=resright[i+1]*a[i+1]
  }
  let ans=[]
  for(let i=0;i<a.length;i++) ans[i]=resleft[i]*resright[i]
  return ans


};