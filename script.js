//your JS code here. If required.
const mul = (let val1, val2) => {
	let sum = val1*2;
	let ans = sum + val2;
	return ans;
}
const val1 = prompt("Enter value 1");
const val2 = prompt("Enter value 2");
alert(mul(val1,val2));