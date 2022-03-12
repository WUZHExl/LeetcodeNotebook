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


var getIntersectionNode = function(headA, headB) {

  const getListLen=head=>{
    let len = 0, cur = head;
    while(cur) {
       len++;
       cur = cur.next;
    }
    return len;
  }

  let curA = headA,curB = headB, 
      lenA = getListLen(headA),
      lenB = getListLen(headB);
  if(lenA < lenB) {       
      // 下面交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
      // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
      [curA, curB] = [curB, curA];
      [lenA, lenB] = [lenB, lenA];
  }
  let i = lenA - lenB;
  while(i-- > 0) {
      curA = curA.next;
  }
  while(curA && curB) {
      if(curA===curB) {
        return curA
      }
      curA = curA.next;
      curB = curB.next;
  }
  return null;
};