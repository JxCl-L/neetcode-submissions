class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # find rotate point
        rotate = len(nums) - 1
        if nums[0] > nums[-1]:
            left = 0
            right = len(nums) - 1
            while left <= right:
                mid = (left+right+1)//2
                if nums[mid] < nums[mid-1]:
                    rotate = mid-1
                    break
                if nums[mid] > nums[0]:
                    left = mid + 1
                elif nums[mid] < nums[0]:
                    right = mid - 1
        # find target in nums
        sm = 0
        lg = rotate
        if target < nums[0]:
            sm = rotate + 1
            lg = len(nums)-1
        while sm <= lg:
            mid = (sm + lg)//2
            if target == nums[mid]:
                return mid
            elif target > nums[mid]:
                sm = mid + 1
            else:
                lg = mid - 1
        return -1

                
