class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        if len(piles) == 1:
            return math.ceil(piles[0]/h)
        min_rate = sum(piles) // h
        max_rate = max(piles)
        
        while min_rate < max_rate:
            mid_rate = (min_rate + max_rate) // 2
            print("min mid max", min_rate, mid_rate, max_rate)
            count_h = 0
            for p in piles:
                count_h += math.ceil(p/mid_rate)
            print("count h", count_h)
            if count_h <= h:
                max_rate = mid_rate
            else:
                min_rate = mid_rate + 1
        return min_rate
        