$(document).ready()
var stoneOne = Math.floor(Math.random() *12 + 1)
var stoneTwo = Math.floor(Math.random() *12 + 1)
var stoneThree = Math.floor(Math.random() *12 + 1)
var stoneFour = Math.floor(Math.random() *12 + 1)
var computerGuess = Math.floor(Math.random() *101 + 19)
var total = 0
var wins = 0
var losses = 0
var reset = function(){
	total = 0; 
	stoneOne = Math.floor(Math.random() *12 + 1);
	stoneTwo = Math.floor(Math.random() *12 + 1);
	stoneThree = Math.floor(Math.random() *12 + 1);
	stoneFour = Math.floor(Math.random() *12 + 1);
	computerGuess = Math.floor(Math.random() *101 + 19);
	console.log(stoneOne)
	console.log(stoneTwo)
	console.log(stoneThree)
	console.log(stoneFour)
	console.log(computerGuess)
	$('#total').html('total: ' + total);
	};
console.log(stoneOne)
console.log(stoneTwo)
console.log(stoneThree)
console.log(stoneFour)
console.log(computerGuess)
console.log(total)

$('#stonepicker').html('The Magic Number ' + computerGuess);
total = 0;

//variable gets brought down for click events, gets shot to html if peramiters are a win if/else is a loss.

$('#stoneOne').on('click',function() {
	total = total + stoneOne;
	$('#total').html('Your Total Score: ' + total);
	if(total === computerGuess) {
		wins++;
		$('#wins').html('Wins<br>' + wins);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number ' + computerGuess);
	}
	else if(total > computerGuess) {
		losses++;
		$('#losses').html('Losses<br> '  + losses);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number ' + computerGuess);
	}});
$('#stoneTwo').on('click',function() {
	total = total + stoneTwo;
	$('#total').html('Your Total Score: ' + total);
	if(total === computerGuess) {
		wins++;
		$('#wins').html('Wins<br>' + wins);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number ' + computerGuess);
	}
	else if(total > computerGuess) {
		losses++;
		$('#losses').html('Losses<br>' + losses);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number ' + computerGuess);
	}
});
$('#stoneThree').on('click',function() {
	total = total + stoneThree;
	$('#total').html('Your Total Score: ' + total);
	if(total === computerGuess) {
		wins++;
		$('#wins').html('Wins<br>' + wins);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number: ' + computerGuess);
	}
	else if(total > computerGuess) {
		losses++;
		$('#losses').html('Losses<br>' + losses);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number: ' + computerGuess);
	}});
$('#stoneFour').on('click',function() {
	total = total + stoneFour;
	$('#total').html('Your Total Score: ' + total);
	if(total === computerGuess) {
		wins++;
		$('#wins').html('Wins<br>' + wins);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number: ' + computerGuess);
	}
	else if(total > computerGuess) {
		losses++;
		$('#losses').html('Losses<br> ' + losses);
		reset();
		$('#total').html('Your Total Score: ' + total);
		$('#stonepicker').html('The Magic Number: ' + computerGuess);
	}});







	



















