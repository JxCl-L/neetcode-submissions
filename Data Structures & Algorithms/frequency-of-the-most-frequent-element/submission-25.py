class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        # do by myself
        # make list asd
        # in the window, all value sum + k >= max/right value * window size

        nums.sort()

        sum = 0;
        l = 0;
        freq = 0;
        for r in range(len(nums)):
            sum += nums[r]
            if r == 0:
                freq+=1
                continue
            print("this time", l, r, sum, sum + k, nums[r] * (r-l+1))
            if sum + k < nums[r] * (r-l+1) and r>=l:
                while sum + k < nums[r] * (r-l+1) and r>=l:
                    print(l, r, sum + k, nums[r] * (r-l+1))
                    sum -= nums[l]
                    l+=1

            print("update freq from", freq)
            freq = max(freq, r-l+1)
            print("to ", freq)
        return freq

            
        