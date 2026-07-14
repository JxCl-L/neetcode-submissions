class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anag = []
        record = {}
        for str in strs:
            sort = "".join(sorted(str))
            if sort in record:
                anag[record[sort]].append(str)
            else:
                record[sort] = len(anag)
                anag.append([str])
        return anag

        