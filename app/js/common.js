var arrayColor = ['#E00000', '#FFD801', '#2E9AFE', '#04B431', '#FFA500'];
var arrayColorText = ['Red', 'Yellow', 'Blue', 'Green', 'Orange'];

var point = 0;
var randomColor = new Random();
var randomColorText = new Random();
var randomColorNumber = randomColor.integer(0,4);
if(randomColorNumber < 3) {var randomColorTextNumber = randomColorText.integer(randomColorNumber,randomColorNumber + 2);} else {var randomColorTextNumber = randomColorText.integer(randomColorNumber - 2,randomColorNumber);}
var time = 0;
var deg = 0;
var $ppc = $('.progress-pie-chart');
var trueButton = $(".btn-success");
var falseButton = $(".btn-danger");
var tryButton = $(".btn-warning");
var startButton = $(".btn-primary");
var limit = 20;
$(".game-over").hide();
$(document).ready(function(){$(".load").remove();});

function startGame () {
	$(".welcome").remove();
	$(".point").html(point);
	$(".pcc-percents-wrapper").html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$(".color").css("color", arrayColor[randomColorNumber]);
	$(".addColor").html("<style>.progress-pie-chart.gt-50{background-color:" + arrayColor[randomColorNumber] + ";}.ppc-progress .ppc-progress-fill{background:" + arrayColor[randomColorNumber] + ";position: absolute;border-radius: 50%;left: calc(50% - 150px);top: calc(50% - 150px);width: 300px;height: 300px;clip: rect(0, 150px, 300px, 0);transform: rotate(0deg);}</style>");
	
	if(randomColorTextNumber == randomColorNumber) {statusPoint = 0;} else {statusPoint = 1;}
	var timerId = setInterval(function() { $('.ppc-progress-fill').css('transform','rotate('+ time +'deg)'); if (time > 180) { $ppc.addClass('gt-50'); }
	  if (time == 360) {time = 0;clearInterval(timerId);endGame();}; time = time+3; }, 22);
	trueButton.click(function() {if(statusPoint == 0 ) {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');} else {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');}});
	falseButton.click(function() {if(statusPoint == 1) {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');} else {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');}});
}

function newGame () {
	time = 0;
	limit = 22;
	point = 0;
	$ppc.removeClass('gt-50');
	$(".game-over").hide();
	var randomColorNumber = randomColor.integer(0,4);
	if(randomColorNumber < 3) {var randomColorTextNumber = randomColorText.integer(randomColorNumber,randomColorNumber + 2);} else {var randomColorTextNumber = randomColorText.integer(randomColorNumber - 2,randomColorNumber);}
	$(".pcc-percents-wrapper").html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$(".color").css("color", arrayColor[randomColorNumber]);
	$(".addColor").html("<style>.progress-pie-chart.gt-50{background-color:" + arrayColor[randomColorNumber] + ";}.ppc-progress .ppc-progress-fill{background:" + arrayColor[randomColorNumber] + ";position: absolute;border-radius: 50%;left: calc(50% - 150px);top: calc(50% - 150px);width: 300px;height: 300px;clip: rect(0, 150px, 300px, 0);transform: rotate(0deg);}</style>");
	
	if(randomColorTextNumber == randomColorNumber) {statusPoint = 0;} else {statusPoint = 1;}
	var timerId = setInterval(function() { $('.ppc-progress-fill').css('transform','rotate('+ time +'deg)'); if (time > 180) { $ppc.addClass('gt-50'); }
	if (time == 360) {clearInterval(timerId);endGame();$ppc.removeClass('gt-50');}; time = time+3; }, 22);
	trueButton.click(function() {if(statusPoint == 0 ) {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');} else {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');}});
	falseButton.click(function() {if(statusPoint == 1) {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');} else {clearInterval(timerId);time = 0; $ppc.removeClass('gt-50');}});
}

function trueAnswer() {
	time = 0; 
	$ppc.removeClass('gt-50');
	point++;
  	$(".point").html(point);
  	limit = limit-0.3;
  	// console.log('point ' + point);
	randomColorNumber = randomColor.integer(0,4);
	if(randomColorNumber < 2) {randomColorTextNumber = randomColorText.integer(randomColorNumber,randomColorNumber + 2);} else {randomColorTextNumber = randomColorText.integer(randomColorNumber,randomColorNumber - 2);}
	if(randomColorTextNumber == randomColorNumber) {statusPoint = 0;} else {statusPoint = 1;}
  	$(".pcc-percents-wrapper").html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$(".color").css("color", arrayColor[randomColorNumber]);
	$(".addColor").html("<style>.progress-pie-chart.gt-50{background-color:" + arrayColor[randomColorNumber] + ";}.ppc-progress .ppc-progress-fill{background:" + arrayColor[randomColorNumber] + ";position: absolute;border-radius: 50%;left: calc(50% - 150px);top: calc(50% - 150px);width: 300px;height: 300px;clip: rect(0, 150px, 300px, 0);transform: rotate(0deg);}</style>");
	
	if(randomColorTextNumber == randomColorNumber) {statusPoint = 0;} else {statusPoint = 1;}
	var timerId = setInterval(function() { $('.ppc-progress-fill').css('transform','rotate('+ time +'deg)'); if (time > 180) { $ppc.addClass('gt-50'); }
	  if (time == 360) {clearInterval(timerId);endGame();$ppc.removeClass('gt-50');}; time = time+3; }, limit);
	trueButton.click(function() {if(statusPoint == 0 ) {clearInterval(timerId);} else {clearInterval(timerId); time = 0;}});
	falseButton.click(function() {if(statusPoint == 1) {clearInterval(timerId);} else {clearInterval(timerId); time = 0;}});
}

function endGame() {
	time = 0;
	$(".score").html("Score: " + point);
	$(".game-over").show();
  	// console.log('end');
}


startButton.click(function() {startGame();trueButton.show();falseButton.show();$(".point").show();});
trueButton.click(function() {if(statusPoint == 0) {trueAnswer(); time = 0; } else {endGame(); $ppc.removeClass('gt-50');}});
falseButton.click(function() {if(statusPoint == 1) {trueAnswer(); time = 0;} else {endGame(); $ppc.removeClass('gt-50');}});
tryButton.click(function() {newGame();});