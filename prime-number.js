function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(11));
console.log(isPrime(10));

// O(n)==>linear time complexcity
