# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # find end => find n-th from end => remove
        fast = head
        slow = head

        diff = n-1
        while diff > 0:
            fast = fast.next
            diff -= 1
            # print(diff, fast.val)

        prev = None
        while fast:
            print(slow.val, fast.val)
            prev = slow
            slow = slow.next
            fast = fast.next
            
            if fast.next is None:
                prev.next = slow.next
                break
            
        
        return head


        