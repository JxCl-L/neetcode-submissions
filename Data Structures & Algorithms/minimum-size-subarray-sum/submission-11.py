class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        count = len(nums) + 1
        total = 0
        l = 0
        print("total count l r")
        for r in range(len(nums)):
            print("check", total, count, l,r)
            total += nums[r]
            while total >= target:
                # print("while check", total, count, l,r)
                count = min(count, r-l+1)
                total -= nums[l]
                l += 1
        if count > len(nums):
            return 0
        else:
            return count


