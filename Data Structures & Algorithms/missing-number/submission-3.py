class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # sum = (1+len(nums))*len(nums)/2 # / return float
        sum = (1+len(nums))*len(nums)// 2 # use // to ensure int
        for num in nums:
            sum -= num
        return sum