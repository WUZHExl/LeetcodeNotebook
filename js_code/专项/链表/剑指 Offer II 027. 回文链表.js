/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//  给定一个链表的 头节点 head ，请判断其是否为回文链表。

//  如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

// 找到中点反转半段，比较
 var isPalindrome = function(head) {

  const reverseList=(head)=>{
      if(!head||!head.next) return head
      const nextHead=reverseList(head.next)
      head.next.next=head
      head.next=null
      return nextHead
  }

  const findMiddle=(head)=>{
      let slow=head,fast=head
      while(fast&&fast.next){
          fast=fast.next.next
          slow=slow.next
      }
      return slow
  }

  // 后半部分链表的头结点
  let hb=findMiddle(head)
  let l1=head,l2=reverseList(hb)
  // console.log(l1,l2)
  while(l2){
      if(l1.val!==l2.val) return false
      l1=l1.next
      l2=l2.next
  }
  return true


};


// var isPalindrome = function(head) {

//   const reverseList=(head)=>{
//       if(!head||!head.next) return head
//       const nextHead=reverseList(head.next)
//       head.next.next=head
//       head.next=null
//       return nextHead
//   }

//   // 直接反转
//   // let hb=findMiddle(head)
//   let temp=head
//   let l1=head
//   // 在翻转的过程中改变了原链表，所以head变了，不能这样写
//   let l2=reverseList(temp)
//   console.log(head,l2)
//   while(l2&&l1){
//       if(l1.val!==l2.val) return false
//       l1=l1.next
//       l2=l2.next
//   }
//   return true
// };