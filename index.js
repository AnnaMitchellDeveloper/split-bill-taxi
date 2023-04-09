const calculateButton = document.querySelector("#calculateBtn");
calculateButton.addEventListener("click", calculateAmount);

function calculateAmount(event) {
	event.preventDefault();
	const billInput = document.querySelector("#billInput").value;
	const numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value;
	const tipInput = document.querySelector("#tip").value;

	
}