const calculateButton = document.querySelector("#calculateBtn");
calculateButton.addEventListener("click", calculateAmount);
const tipButton = document.querySelector("#addTip");
tipButton.addEventListener("click", showTip);

function showTip(event) {
	event.preventDefault();
	tip.style.display = "block";
}

function calculateAmount(event) {
	event.preventDefault();
	const billInput = document.querySelector("#billInput").value;
	const numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value;
	const tipInput = document.querySelector("#tip").value;

	if (billInput === "" || numberOfPeopleInput === "" || billInput < 1 || numberOfPeopleInput < 1){
		Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please, enter information about your trip!",
    });
	}

	let amountPerPerson = billInput/numberOfPeopleInput;
	let tipPerPerson = (billInput * tipInput)/numberOfPeopleInput;
	let totalSum = amountPerPerson + tipPerPerson;

	amountPerPerson = amountPerPerson.toFixed(2);
	tipPerPerson = tipPerPerson.toFixed(2);
	totalSum = totalSum.toFixed(2);

	document.querySelector("#dividedBill").textContent = amountPerPerson;
	document.querySelector("#dividedTip").textContent = tipPerPerson;
	document.querySelector("#billAndTip").textContent = totalSum;
}