/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
  if(head===null) return null;
  let p=head;
  let mp=new Map()
  //首先创建一个哈希表，再遍历原链表，遍历的同时再不断创建新节点
  while(p!==null){
    //创建新节点:新链表的节点
      mp.set(p,new Node(p.val))
      p=p.next
  }
  p=head;
  //第二步再遍历原链表，将新链表的next和random指针给设置上
  while(p!==null){
      if(p.next!==null) mp.get(p).next=mp.get(p.next)
      if(p.random!==null) mp.get(p).random=mp.get(p.random)
      p=p.next
  }
  return mp.get(head)
};
// @lc code=end

