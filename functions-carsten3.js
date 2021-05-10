// # Recursion

// #### Find the nth Fibonacci number
// * Write a JavaScript program to get the first n Fibonacci numbers.

// * Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
// Each subsequent number is the sum of the previous two.
// - fibonnaci(0)=> [0]
// - fibonnaci(1)=> [0,1]
// - fibonnaci(2)=> [0,1,1]
// - fibonnaci(8)=> [0, 1, 1, 2, 3, 5, 8, 13,21]

// ```javascript
//     fibonnaci(8) //  [0, 1, 1, 2, 3, 5, 8, 13,21]
// ```

let fib = [];
fib[0] = 0;
fib[1] = 1;

function fibonacci(iterator) {
  if (iterator >= 8) {
    return;
  }
  for (let j = 2; j <= 8; j++) {
    fib[j] = fib[j - 2] + fib[j - 1];
    console.log(fib[j]);
  }
}

fibonacci(8);
