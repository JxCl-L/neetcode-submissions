class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        const need = {};
        for (const ch of t) {
            need[ch] = (need[ch] || 0) + 1;
        }

        const required = Object.keys(need).length;
        const window = {};

        let formed = 0;
        let left = 0;

        let minLen = Infinity;
        let start = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            if (need[ch] !== undefined) {
                window[ch] = (window[ch] || 0) + 1;

                if (window[ch] === need[ch]) {
                    formed++;
                }
            }

            while (formed === required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                const leftChar = s[left];

                if (need[leftChar] !== undefined) {
                    window[leftChar]--;

                    if (window[leftChar] < need[leftChar]) {
                        formed--;
                    }
                }

                left++;
            }
        }

        return minLen === Infinity ? "" : s.substring(start, start + minLen);
    }
}