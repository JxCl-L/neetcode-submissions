class TimeMap:

    def __init__(self):
        self.time_map = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key in self.time_map:
            self.time_map[key].append((timestamp, value))
        else:
            self.time_map[key] = [(timestamp, value)]
        

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.time_map:
            return ""
        tmax = len(self.time_map[key])-1
        tmin = 0
        
        while tmax > tmin:
            tmid = (tmax + tmin + 1)//2
            if timestamp >= self.time_map[key][tmid][0]:
                tmin = tmid
            else: 
                tmax = tmid -1
        if timestamp < self.time_map[key][0][0]:
            return ""
        return self.time_map[key][tmin][1]
        
