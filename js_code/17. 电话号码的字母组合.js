// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



// DFS,回溯
`
回溯本质是暴力搜索，在问题的解空间树中，用 DFS 的方式，从根节点出发搜索整个解空间。
如果要找出所有的解，则要搜索整个子树，如果只用找出一个解，则搜到一个解就可以结束搜索。

「找出所有可能的组合」的问题，适合用回溯算法。

回溯算法有三个要点：

1.选择
决定了你每个节点有哪些分支，帮助你构建出解的空间树。
本题的选择就是，每个数字对应的多个字母，选择翻译成其中一个字母，就继续递归
2.约束条件
用来剪枝，剪去不满足约束条件的子树，避免无效的搜索。这题好像没怎么体现
3.目标
决定了何时捕获解，或者剪去得不到解的子树，提前回溯。扫描数字的指针到头了就可以将解加入解集了。
`

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {

  if(digits.length===0) return [];
  const res=[]
  const map={ '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

  // dfs: 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
  const dfs=(curStr,i)=>{

    if(i>digits.length-1) { // 指针越界，递归的出口
      res.push(curStr)
      return;
    }

    const letters=map[digits[i]]// 当前数字对应的字母
    for(const letter of letters) { // 一个字母是一个选择，对应一个递归分支
        dfs(curStr+letter,i+1)
    }
  }

  dfs('',0)

  return res
};


// BFS

const letterCombinations = (digits) => {
  if(digits.length===0) return [];
  const map={ '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

  let queue=[]
  queue.push('')
  for(let i=0; i<digits.length; i++){// bfs的层数，即digits的长度
    let levellength=queue.length// 当前层的节点个数

    while(levellength--){        // 逐个让当前层的节点出列
      let curStr=queue.shift()

      let letters=map[digits[i]]
      for(const l of letters){
        queue.push(curStr+l)    // 生成新的字母串入列
      }
    }
  }

  return queue

}