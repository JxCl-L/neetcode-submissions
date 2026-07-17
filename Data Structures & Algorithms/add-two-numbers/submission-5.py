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
        while head1 or head2:
            if head1:
                curr.val += head1.val
                print(curr.val)
                head1 = head1.next
            elif head2:
                curr.val += head2.val
                head2 = head2.next
            new_next = ListNode(curr.val%10)
            curr.val = curr.val//10
            curr = new_next
        return added
        