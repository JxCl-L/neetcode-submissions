class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if target < matrix[0][0] or target > matrix[-1][-1]:
            return False
        # check row
        sm = 0
        lg = len(matrix)*len(matrix[0])-1
        print("sm lg mid r c matrix[r][c]")
        while sm <= lg:
            
            mid = (sm+lg)//2
            r = mid//len(matrix[0])
            c = mid%len(matrix[0])
            print(sm,lg,mid,r,c,matrix[r][c])
            if matrix[r][c] == target:
                return True
            elif matrix[r][c] > target:
                lg = mid - 1
            else:
                sm = mid + 1

        return False
        