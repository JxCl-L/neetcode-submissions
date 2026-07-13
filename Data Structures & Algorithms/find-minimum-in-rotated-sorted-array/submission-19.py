class Solution:
    def findMin(self, nums: List[int]) -> int:
        # no rotation
        if nums[0] < nums[-1] or len(nums) == 1:
            return nums[0]
        # rotated => find rotate point
        rotate = len(nums)-1
        sm = 0
        lg = len(nums)-1
        while sm <= lg:
            mid = (sm + lg + 1)//2
            print(sm, lg, mid)
            if nums[mid] < nums[mid-1]: 
                rotate = mid
                break
            if nums[mid] > nums[0]:
                sm = mid + 1
            else:
                lg = mid - 1
        return nums[rotate]
                