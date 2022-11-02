let saveElement = document.getElementById("save-element")
let countElement = document.getElementById("count-element")
let count = 0
console.log(save-element)

function increment() {
	count = count + 1
	countElement.innerText = count
}

function save() {
	let countString = count + " - "
  saveElement.textContent += countString
  count = 0
  countElement.innerText = 0
}