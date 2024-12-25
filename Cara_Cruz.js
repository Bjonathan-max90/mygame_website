/* Count how many times a user can guess heads or tails correctly. (Simulate a coin flip use  math.random 
 */
var N = 2;
var incorrectScore = 0;
var correctScore = 0;
let xplus = "";
let x = Math.trunc(Math.random()*2)
random();
 
function random() {
	x = Math.trunc(Math.random()*2);

	if (x === 1) {
	xplus = "head";
	} else if (x === 0) {
	xplus = "tail";
	} 
}

function testYourLuck() {
	document.getElementById('appear').classList.remove('hide');
  document.getElementById('corrects').innerText = "Corrects: " + correctScore;
  document.getElementById('incorrects').innerText = "Incorrects: " + incorrectScore;
  var anatomy = document.getElementsByName('anatomy');
  
  for (var i = 0; i < anatomy.length; i++) {
  	if (anatomy[i].checked) {
    
    	var myValue = anatomy[i].value;
      
      // Correct or incorect
      if (myValue === xplus) {
        document.getElementById('result').innerText = "Congrats, " + myValue + " is correct.";
        correctScore++;
        document.getElementById('corrects').innerText = "Corrects: " + correctScore;
        random()
      	return;
      } else {
      	document.getElementById('result').innerText = "Sorry, " + myValue + " is incorrect.";
        incorrectScore++;
        document.getElementById('incorrects').innerText = "Incorrects: " + incorrectScore;
        random()
        return;
      }
    }
  }
  document.getElementById('result').innerHTML = "Please select an anatomy!"
  
 } 

function appearance() {
	if (N % 2 === 0) {
  	console.log("even number");
    document.getElementById('appear').innerText = "Show";
    document.getElementById('corrects').classList.add("hide");
    document.getElementById('incorrects').classList.add('hide');
    N++
  } else {
  	console.log("odd number");
		document.getElementById('appear').innerText = "Hide";
    document.getElementById('corrects').classList.remove("hide");
    document.getElementById('incorrects').classList.remove('hide');    
    N++
  }
}