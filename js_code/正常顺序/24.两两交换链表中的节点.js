/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// var swapPairs = function(head) {
//     if(head===null||head.next===null) return head;
//     //交换
//     let p=head.next
//     head.next=swapPairs(p.next)
//     p.next=head
//     return p
// };

var swapPairs=function(head){
    let p=head,s
    if(p&&p.next){
      s=p.next
      p.next=s.next
      s.next=p
      head=s
      while(p.next&&p.next.next){
        s=p.next.next
        //改变指向
        p.next.next=s.next
        s.next=p.next
        p.next=s
        // 
        p=s.next
      }
    }
    return head;
}
// @lc code=end

