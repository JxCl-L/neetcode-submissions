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
            fast = fast.next.next
            slow = slow.next
        print(slow.val)
        
        # reverse [after mid to last] to [last to after mid]
        start = slow.next
        slow.next = None

        prev = None
        while start:
            temp = start.next
            start.next = prev
            prev = start
            start = temp
        print(prev.val)
        
        # merge two
        l1 = head
        l2 = prev
        while l2:
            if l1.next:
                temp1 = l1.next
                temp2 = l2.next
                l1.next = l2
                l1.next.next = temp1 # this set l2.next to be temp1
                l1 = l1.next.next
                l2 = temp2

        return head

    

        