.................................................................................................................................

-1-
  
<!DOCTYPE html>
<html>
<title>CurrencyConverter</title>
<body>

<h2>CurrencyConverter</h2>
<p>Function that does currency converter from USD to UAH:</p>

<p>
  <label>USD</label>
  <input id="inputUSD" type="number" placeholder="USD" oninput="CurrencyConverter(this.value)" onchange="CurrencyConverter(this.value)">
</p>
<p>UAH: <span id="outputUAH"></span></p>

<script>
function CurrencyConverter(valNum) {
  document.getElementById("outputUAH").innerHTML=valNum * 8;
}
</script>
</body>
</html>

.................................................................................................................................

 -2-
  
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString('abc');

.................................................................................

-3-



...................................................................................

-4- 
  
  
.................................................................................

-5- 
  
let a = 10, b = 5, c = 11

Math.min(a, b, c); 

a = 3, b = 8, c = 4

Math.min (a, b, c)


.....................................................................................

