/**
 * 
 * @param {Array} num1 
 * @param {Array} num2 
 */
export function findMedianSortedArrays(num1, num2) {
    let num = [...num1, ...num2];
    num.sort((a, b) => a - b)
    let half = Math.floor(num.length / 2);
    if (num.length % 2) { //数组长度为奇数
        return num[half]
    }
    return (num[half - 1] + num[half]) / 2

}