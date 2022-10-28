/** 
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s 
 * @return {number}
 * brute force
 export function lengthOfLongestSubstring(s) {
     //是否是没有重复字符的字符串
     function checkRepetition(s, start, end) {
         let setArr = new Set();
         for (let index = start; index <= end; index++) {
             let char = s.charAt(index);
             if (setArr.has(char)) {
                 return false
             }
             setArr.add(char);
         }
         return true;
     }
     let len = s.length;
     let res = 0;
     for (let i = 0; i < len - 1; i++) {
         for (let j = i; j < len; j++) {
             if (checkRepetition(s, i, j)) {
                 res = Math.max(res, j - i + 1);
             }
         }

     }
     return res;
 }
 */


/** 
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s 
 * @return {number}
 */
export function lengthOfLongestSubstring(s) {
    let res = 0;
    let charMap = new Map();

    for (let left = 0, right = 0; right < s.length; right++) {

        if (charMap.has(s.charAt(right))) {
            left = Math.max(charMap.get(s.charAt(right)), left);
        }
        res = Math.max(res, right - left + 1);
        //记住right的下一个位置，left会设置成这个值
        charMap.set(s.charAt(right), right + 1)
    }
    return res
}