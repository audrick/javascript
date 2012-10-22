$(function(){

// this is a single line comment

/*
* this is a multi-line comment 
*/

var balance = 1000;
var response = prompt('(d)eposit, (w)ithdraw or (q)uit?');
while(response != 'q')
{
	var amount = prompt('How much?');
	amount = parseInt(amount); 

	  //going in as string, coming out a number
	if(response =='d')
	{
	  balance = balance + amount;
	  console.log('You just deposited $' + amount + '.00 and your balance is $' + balance + '.00');
	}
    else
    {
	  balance = balance - amount;
	  console.log('You just withdrew $' + amount + '.00 and your balance is $' + balance + '.00');
	}
	response = prompt('(d)eposit, (w)ithdraw, or (q)uit?');
}

console.log('Thank you for ATMing with us, your balance is: $' + balance + '.00');


});