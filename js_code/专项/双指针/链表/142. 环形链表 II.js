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
`
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。
`
//先定义快慢指针
//fast 走两步，slow走一步，若fast和slow相遇，说明有环，否则无环
//当两者相遇时，令slow,fast其中之一=head,再同时走一步，再次相遇的地方为环入口
 var detectCycle = function(head) {

  let slow=fast=head
  while(fast!==null&&fast.next!==null){
      fast=fast.next.next
      slow=slow.next
      if(slow===fast){
          fast=head
          while(fast!==slow){
              fast=fast.next
              slow=slow.next
          }
          return slow
      }
  }
  return null
};