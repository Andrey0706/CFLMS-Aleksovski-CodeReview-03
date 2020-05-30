var calculate =document.getElementById("calculate");
var printText = document.getElementById("printText");
printText.style.display = 'none';
calculate.addEventListener("click", calculateInsurance, false);

function calculateInsurance() {
	var name = document.getElementById("name").value;
	var age = parseInt(document.getElementById("age").value);
	var country = document.getElementById("country").value;
	var horsePowers = document.getElementById("horsePowers").value;
	console.log(name);
	insurance = 0;
	var filled = true;
	var allInputs = document.getElementsByTagName("input");
	for(var i=0; i<allInputs.length; i++){
		if(allInputs[i].value==""){
			printText.style.display = 'block';
			printText.innerHTML = `Please fill all the required fields before we can calculate`;
			filled = false;
			break;
		}
	}
	if(filled){
	firstLetter = name.charAt(0).toUpperCase();
	name = name.slice(1);
	name = firstLetter + name;
	console.log(name);

	switch(country){
		case "Austria":
			insurance = Math.round(horsePowers*100/age + 50);
			break;
		case "Hungary":
			insurance = Math.round(horsePowers*100/age + 50);
			break;
		case "Greece":
			insurance = Math.round(horsePowers*100/age + 50);
	}
	printText.style.display = 'block';
	printText.innerHTML = `${name}, your insurance costs ${insurance} <span>&euro;</span>`;
}

}