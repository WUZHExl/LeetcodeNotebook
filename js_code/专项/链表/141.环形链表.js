/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 给你一个链表的头节点 head ，判断链表中是否有环。

`
使用快慢指针
如果时环形链表，那么快慢指针必然会相遇

每当慢指针slow前进一步，快指针fast就前进两步。
如果fast最终遇到空指针，说明链表中没有环；
如果fast最终和slow相遇，那肯定是fast超过了slow n圈，说明链表中含有环。
`

// 若有环，找出该链表的环的入口结点
`
当fast,slow相遇后,将其中一个赋值为头结点，
再同步走，再次相遇的位置即为入口
`

var hasCycle = function(head) {
  let slow=head,fast=head;
  while(fast!==null&&fast.next!==null)
  {
      slow=slow.next
      fast=fast.next.next
      if(slow===fast) return true
  }
  return false
};
// @lc code=end



//判断环形链表环的起点
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let slow=head,fast=head;
  while(fast!==null&&fast.next!==null)
  {
      slow=slow.next
      fast=fast.next.next
      if(slow===fast){
        fast=head
        while(fast!==slow){
            fast=fast.next
            slow=slow.next
        }
        return fast
      }
  }
  return null
};