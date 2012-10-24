
var c_balance = 1000;
var s_balance = 1000;

$(function(){

	//execute the below after reading through the DOM tree

	$('#c_amount').focus();
	$('#c_deposit').click(c_deposit);
	$('#c_withdraw').click(c_withdraw);
	$('#c_deposit').click(s_deposit);
	$('#c_withdraw').click(s_withdraw);

});

function c_deposit()
{
	var amount = $('#c_amount').val();
	amount = parseInt(amount);
	c_balance = balance + amount;
	updateBalance();
	$('#c_balance').text(c_balance);
}

function c_withdraw()
{
	var amount = $('#c_amount').val();
	amount = parseInt(amount);

	if(amount <= c_balance)
	{

	c_balance = c_balance - amount;
	}
	else if (amount <= (c_balance + s_balance))
	{
		s_balance = c_balance + s_balance - amount;
		c_balance = 0;
	}

	$('#c_balance').text(c_balance);
	$('#s_balance').text(s_balance);

}

function s_deposit()
{
	var amount = $('#s_amount').val();
	amount = parseInt(amount);
	s_balance = balance + amount;
	updateBalance();
	$('#s_balance').text(s_balance);
}

function s_withdraw()
{
	var amount = $('#s_amount').val();
	amount = parseInt(amount);

	if(amount <= s_balance)
	{
	  s_balance = s_balance - amount;
	  $('#s_balance').text(s_balance);
	}
	
}
