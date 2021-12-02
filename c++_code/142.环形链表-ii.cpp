/*
 * @lc app=leetcode.cn id=142 lang=cpp
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
#include <stdio.h>
using namespace std;
struct ListNode {
      int val;
      ListNode *next;
      ListNode(int x) : val(x), next(NULL) {}
 };
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode *slow=head,*fast=head;
        // slow=head,fast=head;
        do{
            if(fast== NULL||fast->next == NULL) return nullptr;
            slow=slow->next;
            fast=fast->next->next;
        }while (fast!=slow);
        // if(fast->next == NULL||fast==NULL) return NULL;
        fast=head;
        while(fast!=slow)
        {
            slow=slow->next;
            fast=fast->next;
        }
        return fast;
    }
};
// @lc code=end


