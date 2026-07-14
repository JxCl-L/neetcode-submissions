class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        record = {}
        for s in strs:
            s_sort = "".join(sorted(s))
            if s_sort in record:
                record[s_sort].append(s)
            else:
                record[s_sort] = [s]
            
        return list(record.values())
        