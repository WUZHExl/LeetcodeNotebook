// 207. 课程表

`你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
`

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
`
入度数组：课号 0 到 n - 1 作为索引，通过遍历先决条件表求出对应的初始入度。
邻接表：用哈希表记录依赖关系（也可以用二维矩阵，但有点大）
      key：课号
      value：依赖这门课的后续课（数组）
`
 var canFinish = function(numCourses, prerequisites) {

     const inDegree=new Array(numCourses).fill(0) // 入度数组

     const map={} // 邻接表
      for(let i=0; i<prerequisites.length;i++){

        inDegree[prerequisites[i][0]]++       // 求课的初始入度值
        if(map[prerequisites[i][1]]){  // 当前课已经存在于邻接表
          map[prerequisites[i][1]].push(prerequisites[i][0])
        }else{
          map[prerequisites[i][1]]=[prerequisites[i][0]]
        }
      }

      const q=[]
      for(let i=0;i<inDegree.length;i++){  // 所有入度为0的课入列
        if(inDegree[i]===0) q.push(i)
      }

      let count=0

      while(q.length){
        const s=q.shift()        // 当前选的课，出列
        count++                      // 选课数+1
        const another=map[s]          // 获取这门课对应的后续课
        if(another&&another.length){  // 确实有后续课
            
          for(let i=0;i<another.length;i++){ //
            inDegree[another[i]]--   // 依赖它的后续课的入度-1
            if(inDegree[another[i]]===0)  q.push(another[i])
             
          }
        }
      }

      return count===numCourses;
};