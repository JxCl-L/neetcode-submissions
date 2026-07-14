# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        # find mid node
        # for node list after mid node, reverse
        # merge [first to mid] and [last to before mid]

        # find mid node
        fast = head
        slow = head
        while fast and fast.next:
            fast = fase.next.next
            slow = slow.next
        
        # reverse [after mid to last] to [last to after mid]
        start = slow.next
        slow.next = None

        prev = None
        while start and start.next:
            temp = start.next
            start.next = prev
            prev = start
            start = temp
        
        # merge two
        l1 = head
        l2 = start
        while l2:
            temp1 = l1.next
            l1.next = l2
            l1.next.next = temp1
            l1 = l1.next.next
            l2 = l2.next
            
        return head

    

        