# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # use set to track node
        # a repeat node require both val and next to be same
        record = set()
        while head and head.next:
            if head in record:
                return True
            record.add(head)
            head = head.next
        return False