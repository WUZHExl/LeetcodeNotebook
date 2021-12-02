/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//     const p=new ListNode(-1);
//     //哨兵节点p
//     let node=p;
//     while (l1!==null&&l2!==null)
//     {
//         if(l1.val<=l2.val){
//           node.next=l1;
//           l1=l1.next;
//         }else
//         {
//           node.next=l2;
//           l2=l2.next;      
//         }
//         node=node.next;
//     }
//     node.next=l1===null?l2:l1
//     return p.next
// };

var mergeTwoLists = function(l1,l2){
  //递归终止条件
  if(l1===null) return l2;
  if(l2===null) return l1;
  if(l1.val<=l2.val) {
    l1.next=mergeTwoLists(l1.next,l2)
    return l1
    }
  else {
     l2.next=mergeTwoLists(l1,l2.next)
     return l2
  }

}
// @lc code=end

