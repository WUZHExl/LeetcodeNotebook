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

//  在java中整除用/  取余用% 但js /  所的结果为浮点数

//  应该调用以下方法
//      var n1 = Math.round(exp1); //四舍五入
//      var n2 = Math.round(exp2); //四舍五入
//     
//      var rslt = n1 / n2; //除
//    
//          rslt = Math.floor(rslt); //返回值为小于等于其数值参数的最大整数值。
//          rslt = Math.ceil(rslt); //返回值为大于等于其数字参数的最小整数。

 var addTwoNumbers = function(l1, l2) {
     let head=null,tail=null;
     let carry=0;
     while(l1||l2) {
         let n1=l1?l1.val:0;
         let n2=l2?l2.val:0;
         let sum=n1+n2+carry;
         if(!head) {//新链表,若是第一个节点
            head=tail=new ListNode(sum%10);
         }
         else{//插入新节点
             tail.next=new ListNode(sum%10);
             tail=tail.next;
         }
         carry=Math.floor(sum/10);
         if(l1)
         {
             l1=l1.next;
         }
         if(l2)
         {
             l2=l2.next;
         }

     }
     if(carry>0)
     {
        tail.next=new ListNode(carry);
     }
     return head;
};
