.................................................................................................................................

-1- Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
  
let convert = (usd) => {
  console.log (usd*8)
} ;
convert(2);

.................................................................................................................................

 -2- A function which returns reversed string.
  
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString('abc');

.................................................................................

-3- A function which prints the stair picture of size n

let printStairs = (n) => {
    for (let pyramid = 1; pyramid <= n; pyramid++) {
        console.log('#'.repeat(pyramid));
    }
}
printStairs(3);

...................................................................................

-4- A function which returns total sum of a range

function sumRange(arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let arr2 = [];

  for (let i=min; i<=max; i++)
  {
    arr2.push(i);
  }
  return arr2.reduce(function(sum, item){sum+=item; return sum;},0);
}

sumRange([-1, 3]);
sumRange([2, 4]);
  
.................................................................................

-5- Write a function which returns the smallest of three numbers.
  
let min=(a,b,c)=>{
    console.log(Math.min(a,b,c));}
min(10,5,11)
min(3,8,4)


.....................................................................................

-6- A function which prints the pyramid picture of size n

function printPyramid(n) { 
    for (let i = 1; i <= n; i++) {
      let s = "";
      for (let p = 1; p <= (2 * n - 1); p++) { 
         (p >= n + 1 - i && p <= n - 1 + i) ? s += "#" : s += " "; 
       }
      console.log(s);
     }
 }
 printPyramid(5);

-8- A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.

function cursorCheck (str) {
if (str = 'ironman' || 'cursor' || 'ostap') {
    return true;
} else {
    return false;
}
}
cursorCheck('Hello I am OstaP') 
cursorCheck('Superman is here')
