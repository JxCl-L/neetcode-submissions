class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        dq = deque()
        for num in arr:
                dq.append(num)
                # print(dq)
                if len(dq) > k:
                    if abs(dq[0] - x) > abs(dq[-1] -x):
                        dq.popleft()
                    else:
                        dq.pop()
                        # return list(dq)
        return list(dq)

        