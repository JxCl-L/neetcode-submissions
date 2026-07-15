# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # find end
        end = head
        list_len = 0
        while end:
            end = end.next
            list_len += 1

        i = list_len - n
        curr = head
        prev = None
        while curr:
            if i == 0:
                if prev == None and curr.next == None:
                    return None
                elif prev != None:
                    return curr.next
                elif curr.next == None:
                    prev.next = None
                    return head

                prev.next = curr.next
                return
            prev = curr
            curr = curr.next
            i -= 1
        
        return head


        
        