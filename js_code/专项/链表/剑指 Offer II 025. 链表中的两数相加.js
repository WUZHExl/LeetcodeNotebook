// 给定两个 非空链表 l1和 l2 来代表两个非负整数。
// 数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
// 可以假设除了数字 0 之外，这两个数字都不会以零开头

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

/*
1.将两个链表分别反转
2.反转之后的链表的头节点表示个位数，尾节点表示最高位；从两个链表的头节点开始相加，就相当于从整数的个位数开始相加
3.要注意进位，如果两个整数的个位数相加的和超过10，就会往十位数产生一个进位，在下一步做十位数相加时就要把这个进位考虑进去
*/

 var addTwoNumbers = function(l1, l2) {

  const reverseList=s=>{
      if(!s||!(s.next)) return s;
      const nextH=reverseList(s.next)
      s.next.next=s
      s.next=null
      return nextH
  }
  let reverL1=reverseList(l1)
  let reverL2=reverseList(l2)

  //新链表哑节点
  let sumNode=new ListNode(0)
  let p=sumNode

  let num1,num2,sum,carry=0
  while(reverL1!==null||reverL2!==null){
      num1=reverL1===null?0:reverL1.val;
      num2=reverL2===null?0:reverL2.val;
      sum=num1+num2+carry
      if(sum>=10){
          carry=1
          sum=sum-10
          // carry=sum/10;sum=sum-10*carry
      }else{
          carry=0
      }

      // 每次生成的和产生新节点
      let newNode=new ListNode(sum)
      p.next=newNode
      p=p.next// p=newNode

      reverL1=reverL1===null?null:reverL1.next;
      reverL2=reverL2===null?null:reverL2.next;     
  }
  if(carry>0){
      p.next=new ListNode(carry)
  }

  // 最后还要将结果翻转
  return reverseList(sumNode.next)
};