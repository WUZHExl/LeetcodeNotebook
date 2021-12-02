/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。
//  如果链表无环，则返回 null

// 先用快慢指针找到相遇点，然后让快慢指针中的任一个重新指向head，
// 然后两个指针同速前进，k - m步后一定会相遇，相遇之处就是环的起点了

 var detectCycle = function(head) {
  let fast=head,slow=head
  while(fast!==null&&fast.next!==null){
      slow=slow.next
      fast=fast.next.next
      if(slow===fast) {
          fast=head
          while(fast!==slow){
              fast=fast.next
              slow=slow.next
          }
          return fast
      }
  }
  // 不包含环
  return null

};