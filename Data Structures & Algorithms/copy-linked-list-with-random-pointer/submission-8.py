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
        if head == None:
            return None
        # need to create new nodes to form new linked list
        
        # mapping from old nodes to new nodes 
        # python can use object(eg node) as key
        curr = head
        mapping = {}
        while curr:
            mapping[curr] = Node(curr.val)
            curr = curr.next
        
        # update next and random of new nodes
        curr = head
        # new_head = None
        while curr:
            mapping[curr].next = mapping[curr.next] if curr.next else None
            mapping[curr].random = mapping[curr.random] if curr.random else None
            # if new_head == None:
            #     new_head = mapping[curr]
            curr = curr.next
        
        # return new_head
        return mapping[head]

        
        