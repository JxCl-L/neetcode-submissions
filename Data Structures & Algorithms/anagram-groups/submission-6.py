class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anag = []
        record = {}
        for str in strs:
            sorted = "".join(sorted(str))
            if sorted in record:
                anag[record[sroted]].add(str)
            else:
                record[sorted] = len(anag)
                anag.add([str])
        return anag

        