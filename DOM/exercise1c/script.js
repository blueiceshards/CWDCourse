var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var createButton = document.createElement("button");
	createButton.innerHTML = "Delete";
	createButton.className = "button2";
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createButton);
	createButton.addEventListener ("click", function() {
		createButton.parentNode.parentNode.removeChild(li);
	  });
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var listElements = document.querySelectorAll("li");
/* 
listElements[0].addEventListener("click", function () {
	listElements[0].classList.toggle("done"); 
})

function toggleDone(listElement) {
	listElement.classList.toggle("done")	
}
 */


listElements.forEach(function (x) {
    x.addEventListener("click", function(){
		x.classList.toggle("done");
	})
})


listElements.forEach(function (x) {
	var createButton = document.createElement("button");
	createButton.innerHTML = "Delete";
	createButton.className = "button2";
	x.appendChild(createButton);
	createButton.addEventListener ("click", function() {
		createButton.parentNode.parentNode.removeChild(x);
	  });
})

