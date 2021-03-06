/*
双指针技巧再分为两类，⼀类是「快慢指针」，⼀类是「左右指针」。
前者解决主要解决链表中的问题，⽐如典型的判定链表中是否包含环；后者
主要解决数组（或者字符串）中的问题，⽐如⼆分查找。
*/



// 快慢指针的应用
/*
1.判断单链表中是否存在环：让快指针fast每次走两步，慢指针slow每次走一步；若快指针fast到达null，则无环；若fast和slow相遇（即相等），则有环
2.判断是否有环并找环的起点：承接上面，当fast与slow相遇之后，令fast=head，再令fast，slow每次前进一步，再次相遇的点就是入环口
3.在有序链表中寻找中位数：每次fast走两步，slow走一步，当fast到达终点时，slow在中间
4.输出链表中的倒数第K个节点：fast从链表的头指针开始遍历向前走k-1步，slow保持不动；从第K步开始，slow也开始从链表的头指针开始遍历。
                         由于两个指针的距离保持在k-1，当fast到达链表的尾节点时候，slow 正好是倒数第K个节点
5.判断两个单链表是否相交，如果相交，找到他们的第一个公共节点:
*/


