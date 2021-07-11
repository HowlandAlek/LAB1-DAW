let post = $("#ButtonPost");
let clear = $("#ButtonClear");
let mark = $("#ButtonMark");
let del = $("#ButtonDelete");

post.click(TodoPost);
clear.click(TodoClear);
mark.click(TodoMark);
del.click(TodoDel);

function TodoPost(e) {
	e.preventDefault();

	let to_do = $("#todoText");
	let list = $("#todoList");

	let div = $("<div>");
	let checkbox = $("<input>");
	let label = $("<label>");

	checkbox.attr("type", "checkbox");
	checkbox.attr("name", "todo");

	label.text(to_do.val());

	div.append(checkbox);
	div.append(label);
	list.append(div);

	to_do.val("");
}

function TodoMark() {
	let todos = $('input[name="todo"]');

	for (let i = 0; i < todos.length; i++) {
		todos[i].checked = true;
	}
}

function TodoClear() {
	let todos = $('input[name="todo"]');

	for (let i = 0; i < todos.length; i++) {
		todos[i].checked = false;
	}
}

function TodoDel() {
	let todos = $('input[name="todo"]');

	for (let i = todos.length - 1; i >= 0; i--) {
		if (todos[i].checked) {
			todos[i].parentElement.remove();
		}
	}
}
