# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
      fast,slow =head,head
      if fast==None or fast.next==None: return None
      fast=fast.next.next
      slow=slow.next
      while fast!=slow :
        if fast==None or fast.next==None: return None
        fast=fast.next.next
        slow=slow.next
      fast=head
      while slow!=fast :
        slow=slow.next
        fast=fast.next
      return fast

      pass