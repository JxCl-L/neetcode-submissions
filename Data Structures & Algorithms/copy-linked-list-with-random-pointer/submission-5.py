"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        # get each index to node map
        # change index to node

        curr = head
        index = 0
        mapping = {}
        while curr:
            print(index,curr.val)
            mapping[index] = curr
            index += 1
            curr = curr.next
            
        print(mapping)
        
        curr = head
        index = 0
        while curr:
            curr.random = mapping[curr.random]
            curr = curr.next
            index += 1

        return head
        