# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head1 = l1
        head2 = l2
        added = ListNode()
        curr = added
        next_val = 0
        while head1 or head2:
            curr.next = ListNode(next_val)
            curr = curr.next
            print(head1, head2)
            if head1:
                curr.val += head1.val
                print(curr.val)
                head1 = head1.next
            if head2:
                curr.val += head2.val
                print(curr.val)
                head2 = head2.next
            next_val = curr.val//10
            curr.val = curr.val%10
        return added.next
        