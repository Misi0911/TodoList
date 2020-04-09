//Helpers
function createElement (type, className) {
	var element = document.createElement(type);
	if(className) {
		element.classList.add(className);
	}
	return element;
}
function createParagraph(text, className) {
	var p = createElement("p", className);
	p.innerText = text;
	return p;
}
function createUl(className) {
	var ul = createElement("ul", className);

	return ul;
}
function createDiv(className) {
	var div = createElement("div", className);
	return div;
}
function createButton(text, className) {
	var btn = createElement("button", className);
	btn.innerText = text;
	return btn;
}
function createTodo(text) {
	var li = createElement("li", "todo")
	var p = createParagraph(text)
	li.append(p);
	var buttonsContainer = createDiv("buttons");
	var upBtn = createButton("Up", "up");
	var downBtn = createButton("Down", "down");
	var removeBtn = createButton("Remove", "remove");
	buttonsContainer.append(upBtn);
	buttonsContainer.append(downBtn);
	buttonsContainer.append(removeBtn);
	li.append(buttonsContainer);
	return li;
}






// Select inputand button
var todoInput = document.getElementById("todo-input");

var addTodoBtn = document.getElementById("add-todo");



var mainContainer = document.getElementById("todo-main");

addTodoBtn.addEventListener("click", function() {
	if(todoInput.value.length > 1) {
	var todo = createTodo(todoInput.value);
		todoInput.value ="";
		}		
});

todoInput.addEventListener("keyup", function(e){

	if(todoInput.value.length > 1) {
		if(e.keyCode === 13) {
	var todo = createTodo(todoInput.value);
			mainContainer.append(todo)
		todoInput.value ="";
		}
	}
});









