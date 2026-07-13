class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        high = sum(weights)
        low = max(weights)
        while(high > low):
            mid = (high+low) // 2 
            # print("h l mid", high, low, mid) #round down
            count_day = 0
            count_w = 0
            for w in weights:
                if count_w + w > mid:
                    count_day += 1
                    count_w = 0
                count_w += w
            count_day += 1
            if count_day <= days:  # acceptable: not exceed days => weight may keep or decrease => high keep edge
                high = mid
            else: # not acceptable: exceed days => increase weight => low eliminate edge
                low = mid +1
        return low
                
        

        