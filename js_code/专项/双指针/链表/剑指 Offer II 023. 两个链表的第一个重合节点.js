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
//  用哈希表的方式就是遍历链表a并且把每个节点存入到哈希表中，
// 在遍历链表b的时候去哈希表中取，如果有存在于哈希表中就找到了第一个公共节点


// 用双指针：让p1遍历完链表A之后开始遍历链表B，让p2遍历完链表B之后开始遍历链表A，这样相当于「逻辑上」两条链表接在了一起
/*
链表headA和headB 的长度分别是m和n。假设链表headA 的不相交部分有 a 个节点，链表headB 的不相交部分有 b 个节点，
两个链表相交的部分有 c 个节点，则有 a+c=m，b+c=n。
如果 a=b，则两个指针会同时到达两个链表相交的节点，此时返回相交的节点；
如果 a!=b,则指针pA会遍历完链表headA，指针pB会遍历完链表headB，两个指针不会同时到达链表的尾节点，
然后指针pA移到链表headB 的头节点，指针pB 移到链表headA 的头节点，
然后两个指针继续移动，在指针pA 移动了a+c+b 次、指针pB 移动了b+c+a 次之后，
两个指针会同时到达两个链表相交的节点，该节点也是两个指针第一次同时指向的节点，此时返回相交的节点
*/
 var getIntersectionNode = function(headA, headB) {
  let a=headA,b=headB
  while(a!=b){
      a=a!==null?a.next:headB
      b=b!==null?b.next:headA
  }
  return a
};

// 哈希
var getIntersectionNode = function(headA, headB) {
    let se=new Set(),a=headA,b=headB
    while(a!=null){
      se.add(a)
      a=a.next
    }
    while(b!=null){
      if(se.has(b)) return b
      b=b.next
    }
    return null
};