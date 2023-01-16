/* ALgorithm */
/******************/
/* An Algorithm is a set of instructions or steps for solving problem */

/* Why you should learn algorithm */
/* 
1. critical thinking and abstruction(something hidden from general user)
2. problem solving
3. computer science
4. career advancment
5. understanding new technology

*/

/* time complexcity, space complexcity */
/* time complexcity is a way to analyze the total time or performance of an algorithm */

/* space complexcity is a way to analyze the total space or memory need for an algorithm */

/* asymptotic notation : this is a mathematical method. by this method we can describe or calculate time complexcity and space complexcity  */

/* asymtotic notation are mainly three types: 
1. big o notation
2. big omega notation
3. big theta notation
 */

/*symbol of big o notation: O(n)  */

//if O(1), constant / best time or space complexcity

//2nd best, O(log n)
//3rd best, O(n) which is called linear time or space complexcity..

//O(n log n)=> linear logarithm
//O(n^x) => polynomial time, where x is a power

//O(c^n)=> exponential time & space complexcity
//O(n!)=> factorial

// given an array, find the largest element

function largestElement(arr) {
  let largeEl = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > largeEl) {
      largeEl = arr[i];
    }
  }

  return largeEl;
}

console.log(largestElement([5, 33, 2, 22, 25]));
/* 
el=5, run =2
el = 100, run = 100
el = n, run = n
O(n)==>linear complexcity
*/

//given an array, find the first element

function findFirstEl(arr) {
  return arr.at(0);
}

console.log(findFirstEl([10, 15, 20, 25, 30]));

/* 
el = 5, run = 1
el = n, run = 1
O(1) == constant
*/
