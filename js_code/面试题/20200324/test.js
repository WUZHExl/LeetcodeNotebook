

let mn=readline().split(' ').map(item=>Number(item))
let m=mn[0],n=mn[1]
let arr=new Array(m+1).fill({'left':0,'right':0})
while(n--){
    let input=readline().split(' ')
    let parents=Number(input[0])
    let type=input[1],child=Number(input[2])
    arr[parents][type]=child
    console.log(parents,child,type, arr[parents][type])
    
}
let sum=0
for(let i=1;i<=m;i++){
    //console.log(arr[i]['left'])
    if(arr[i].left!==0&&arr[i].right!==0&&arr[arr[i].left].left===0&&
       arr[arr[i].left].right===0&&arr[arr[i].right].left===0&&arr[arr[i].right].right===0){
        sum++
    }
   // console.log(arr[i]['right'])
    //console.log(arr[i].left)
}