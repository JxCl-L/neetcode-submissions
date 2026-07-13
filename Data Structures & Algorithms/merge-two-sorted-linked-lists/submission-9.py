# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # if list1 == None and list2 == None:
        #     return None
        merged = ListNode(0) # dummy node 
        head = merged

        while list1 or list2:
            if list1 and list2:
                if list1.val > list2.val:
                    merged.next = list2
                    merged = merged.next
                    list2 = list2.next
                else:
                    merged.next = list1
                    merged = merged.next
                    list1 = list1.next
            # Remaining nodes can be attached directly!!!
            elif list1 == None:
                merged.next = list2
                list2 = None # to break while loop
                # merged = merged.next
                # list2 = list2.next
            elif list2 == None:
                merged.next = list1
                list1 = None # to break while loop
                # merged = merged.next
                # list1 = list1.next
        return head.next

        