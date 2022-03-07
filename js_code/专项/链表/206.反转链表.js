/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//迭代
var reverseList = function(head) {
    let pre=null;
    let curr=head; //当前节点
    while(curr)
    {
      const temp=curr.next; //保存当前节点此时的next
      curr.next=pre; //把当前节点的next改为前一个节点
      pre=curr;     //迭代
      curr=temp;
    }
    return pre; //pre最后存储的就是最后头结点
};

//递归
var reverseList = function(head) {
  //递归终止条件
  if(!head||!(head.next))
  {
    return head;
  }
  const newHead=reverseList(head.next)//子问题
  head.next.next=head                //翻转头结点
  head.next=null
  return newHead
}
// @lc code=end

