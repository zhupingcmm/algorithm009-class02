/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length - m)
    nums2.splice(n,nums2.length - n)
    Object.assign(nums1,[...nums1,...nums2].sort((a,b) => a - b))
};

let num1 = [1,2,3,0,0,0], m =3;
let num2 = [2,5,6], n =3;

merge(num1, m, num2, n);