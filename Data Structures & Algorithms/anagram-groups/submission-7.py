class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anag = []
        record = {}
        for str in strs:
            sorted = "".join(sorted(str))
            if sorted in record:
                anag[record[sorted]].append(str)
            else:
                record[sorted] = len(anag)
                anag.append([str])
        return anag

        