$(function(){
   
        $('.b2').click(withDraw);
        $('.b1').click(deposit1);
        $('.b4').click(withDraw2);
        $('.b3').click(deposit2);

});

var balance = 850;
var balance2 = 1000; 
var total = balance + balance2
// this is a global value

function withDraw()
{
    var withdraw = $('#form > input').val();
    withdraw = parseInt(withdraw);
    
    if (balance > withdraw)
    {
        balance = balance - withdraw;
    }

    else if (withdraw <= total)
    {
        var remainder = withdraw - balance;
        balance = 0;
        balance2 = balance2 - remainder;
        total = balance2;
    }

    $('#balance > h2').text('$' + balance); 
    $('#balance2 > h2').text('$' + balance2); 
}

function deposit1()
{
    var deposit = $('#form > input').val();
    deposit = parseInt(deposit);
    balance = balance + deposit;
    $('#balance > h2').text('$' + balance);  
}

function withDraw2()
{
    var withdraw = $('#form2 > input').val();
    withdraw = parseInt(withdraw);

    if (balance2 >= withdraw)
        balance2 = balance2 - withdraw;

    $('#balance2 > h2').text('$' + balance2); 
}

function deposit2()
{
    var deposit = $('#form2 > input').val();
    deposit = parseInt(deposit);
    balance2 = balance2 + deposit;
    $('#balance2 > h2').text('$' + balance2);  
}

