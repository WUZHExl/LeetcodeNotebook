`
给你两个单链表的头节点 headA 和 headB ，
请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

`

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
//快慢指针


 var getIntersectionNode = function(headA, headB) {
    
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA, pB = headB;
  while (pA !== pB) {
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
  }
  return pA;



};


//哈希
var getIntersectionNode = function(headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp !== null) {
      visited.add(temp);
      temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
      if (visited.has(temp)) {
          return temp;
      }
      temp = temp.next;
  }
  return null;
};
