window.onload = () => 
	 
	{ 
		document.querySelector('#calculate').onclick = calculateTip; 
	} 

function calculateTip() 
{ 
	
	let amount = document.querySelector('#amount').value; 
	let persons = document.querySelector('#persons').value; 
	let service = document.querySelector('#service').value; 
	let total = (amount * service) / persons; 
	total = total.toFixed(2); 
	document.querySelector('.tip').style.display = 'block'; 
	document.querySelector('#total').innerHTML = total; 
}
