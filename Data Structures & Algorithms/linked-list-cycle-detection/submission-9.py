# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # use dictionary (hashmap) to track val

        record = {}
        while head and head.next:
            if head.val in record and head.val == head.val:

                return True
            record[head.val] = head.next.val
            head = head.next
        return False


        