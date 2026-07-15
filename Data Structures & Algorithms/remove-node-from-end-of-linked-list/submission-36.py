# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # # find end => find n-th from end => remove
        # fast = head
        # slow = head

        # diff = n-1
        # while diff > 0:
        #     fast = fast.next
        #     diff -= 1
        #     # print(diff, fast.val)

        # prev = None
        # while fast:
        #     print(slow.val, fast.val)
        #     temp_slow = slow
        #     slow = slow.next
        #     fast = fast.next
        #     if slow == None:
        #         return None
            
        #     if fast.next is None:
        #         if prve == None:
        #             head = slow
        #         prev.next = slow.next
        #         break
            
        
        # return head




        slow = head
        fast = head

        gap = n
        while gap > 1 and fast.next:
            fast = fast.next
            gap -= 1
        
        prev = None
        while fast:
            if fast.next == None:
                if prev == None: # when remove first node
                    return head.next
                else: # when remove mid/last node
                    prev.next = slow.next
                    return head
            prev = slow
            slow = slow.next
            fast = fast.next
        return head

        