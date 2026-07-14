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
        # print(slow.val)
        
        # reverse [after mid to last] to [last to after mid]
        start = slow.next
        slow.next = None

        prev = None
        while start:
            temp = start.next
            start.next = prev
            prev = start
            start = temp
        # print(prev.val)
        
        # merge two
        l1 = head
        l2 = prev
        round = 1
        while l2:
            # print(l1.val, l2.val)
            # print("round",round)
            round+=1
            l1next = l1.next
            l2next = l2.next
            # print(l1next.val, l2next)
            l1.next = l2
            l2.next = l1next
            l1 = l1next
            l2 = l2next

        return head

    

        