/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
`
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
`
`
出两个链表的长度，并求出两个链表长度的差值，然后让curA移动到，和curB 末尾对齐的位置
此时我们就可以比较curA和curB是否相同，如果不相同，同时向后移动curA和curB，如果遇到curA == curB，则找到交点。
否则循环退出返回空指针。
`

 var getIntersectionNode = function(headA, headB) {

  let len1=0,len2=0
  let tempa=headA,tempb=headB
  while(tempa!==null) {
      len1++
      tempa=tempa.next
  }
  while(tempb!==null){
      len2++
      tempb=tempb.next
  }
  tempa=headA,tempb=headB
  if(len1<len2){
      // 下面交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
      // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
      [len1,len2]=[len2,len1];
      [tempa,tempb]=[tempb,tempa];
  }

  let cha=len1-len2
  while(cha--) tempa=tempa.next
  while(tempa&&tempb){
      if(tempa===tempb) return tempa
      tempa=tempa.next
      tempb=tempb.next
  }
  return null

};