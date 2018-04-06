// 	Number to Roman
// 	A function that creates a Roman number from an normal input
// 
// 	Example:
// 	Input:  436
// 	Output: CDXXXVI
// 
// 	~AstoVidatu

var roman = {M:1000, CM:900, D:500, CD:400, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
var number = 436;
var result = "";

function convertRoman(n) {
	for( i in roman){
		while(n >= roman[i]){
			result += i;
			console.log('n: 	 ', n);
			n -= roman[i];
			console.log('result: ', result);

		}
	}
	console.log(result);
}

