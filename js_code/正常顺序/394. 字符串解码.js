/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {

  let stack=[],stackStr=[]
  let num=0,str=''
  for(let i of s){
      if(!isNaN(i)) {
          num=num*10+Number(i) // 算出倍数
      }
      else if(i==='['){ 
          //当遇到[，已经扫描的数字就是“倍数”，入栈暂存
          // 已经扫描的字母也入栈等待
          stackStr.push(str)
          str=""       //str保存的是[]范围内的子串
          stack.push(num)
          num=0
      }else if(i===']'){
          // 遇到]。内层的扫描完了，栈顶元素可以出栈了，共同参与子串的构建
          let repeatNum=stack.pop()
          str=stackStr.pop()+str.repeat(repeatNum)
      }else{
          str+=i // 遇到字母，追加给result串
      }
  }
  return str
};