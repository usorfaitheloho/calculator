//var a = '' ;
//var b = '' ;
//var num = [] ;
//var ans;

//all the numbers and operators input will be storedin an array "num" using function "sendNum()"
//function sendNum(digit){

//	num.push(digit);

//	if (num.length != 1) {
//		a='3' ;
//		document.getElementById('screen').innerText = a ;

//	}
//} 
//select allbuttons
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.screen') ;

//add event
buttons.forEach(function(button){
	button.addEventListener('click',calculate);
});

//calculate function
function calculate(event){
	//current clicked buttons value
	const clickedButtonValue = event.target.value;

	if(clickedButtonValue === "="){
		//check if display is not empty then do the calculation
		if(display.value != ''){
			display.value = eval(display.value);
		}
	}
	else if(clickedButtonValue == 'c')
	{
		display.value = '' ;
	}

	else
		{display.value +=clickedButtonValue ;}
}


