`
给你一个链表数组，每个链表都已经按升序排列。
请你将所有链表合并到一个升序链表中，返回合并后的链表。
`

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


//合并两个升序链表
//一个指针 tail 来记录下一个插入位置的前一个位置，
//以及两个指针 aPtr 和 bPtr 来记录 a 和 b 未合并部分的第一位
function merge(a,b){
    //若其中一个为空链表
    if(!a||!b) return a?a:b;
    let head=new ListNode(-1)
    let tail=head,aptr=a,bptr=b
    while(aptr&&bptr){
      if(aptr.val<=bptr.val){
        tail.next=aptr;
        aptr=aptr.next
      }else{
        tail.next=bptr;
        bptr=bptr.next;
      }
      tail=tail.next
    }
    //哪个子链表没合并完就。。
    tail.next=aptr?aptr:bptr
    return head.next
}


//顺序合并
 var mergeKLists = function(lists) {

     let ans=null
     for(let i=0;i<lists.length;i++){
       ans=merge(ans,lists[i])
     }
     return ans
};

//分治合并
var mergeKLists = function(lists) {

    const fenzhi=(lists,l,r)=>{
      if(l===r) return lists[l]
      if(l>r) return null
      let mid=(l+r)>>1
      return merge(fenzhi(lists,l,mid),fenzhi(lists,mid+1,r))
    }

    return fenzhi(lists,0,lists.length-1)
};