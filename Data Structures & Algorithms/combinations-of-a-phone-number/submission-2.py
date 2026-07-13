class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        map_table = {
            "2": 'abc',
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        } # using dictionary
        output = []
        for digit in digits:
            update = []
            if not output:
                for char in map_table[digit]:
                    update.append(char)
            else:
                for char in map_table[digit]:
                    for s in output:
                        update.append(s+char)
            output = update

        return output
        




        