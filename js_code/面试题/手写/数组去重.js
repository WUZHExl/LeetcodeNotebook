let arr=[1,1,2,2,3,4,4,5,5,6,6]
let ans=[]
for(let n of arr) {
  if(!ans.includes(n)) ans.push(n)
}
console.log(ans)
