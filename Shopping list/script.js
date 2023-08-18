var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.getElementsByTagName("span");

function delButton(){
	var Delete = document.querySelectorAll(".delete");

	for(var i=0; i<Delete.length; i++)
	{
		Delete[i].addEventListener("click", function(){
			var listItem = this.parentElement;
			ul.removeChild(listItem);
		});
	}
}

for(var i=0; i<list.length; i++)
{
	list[i].addEventListener("click", function(event){
		event.target.classList.toggle('done');
	});
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(deleteButton);
	deleteButton.classList.add('delete');
	delButton();

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

delButton();