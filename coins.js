var amount = prompt("What is your amount?");

var number = parseFloat(amount) * 100;


var quarters;
var dimes;
var nickles;
var pennies;

var coinPurse = {quarters, dimes, nickles, pennies}

	

function coinCounter() {
	for (var i = 0; i <= 1; i++) {
//find out how many quarters and return
coinPurse.quarters = parseInt(number/25);
//pass on remainder
var postQuarter = parseInt(number%25);

//find out how many dimes and return
coinPurse.dimes = parseInt(postQuarter/10);
//pass on remainder
var postDimes = parseInt(postQuarter%10);
//find out how many nickles and return
coinPurse.nickles = parseInt(postDimes/5);
//pass on remainder
coinPurse.pennies = parseInt(postDimes%5);
//find out how many pennies and return

	}
}

coinCounter();
console.log(coinPurse);





