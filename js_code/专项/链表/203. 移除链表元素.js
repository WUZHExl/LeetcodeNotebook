/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

//给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 var removeElements = function(head, val) {

  // 新建一个虚拟节点
  let pre=new ListNode(-1,head)
  let curr=pre
  while(curr.next){
      if(curr.next.val===val){
          curr.next=curr.next.next
      }else{
          curr=curr.next
      }
  }
  return pre.next

};