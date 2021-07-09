let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e) {
	e.preventDefault();

	let to_do = document.getElementById("todoText");
	let list = document.getElementById("todoList");

	/*
	let currentlistHTML = list.innerHTML;

	list.innerHTML =
		currentlistHTML + `<input type="checkbox" name="todo"/>${to_do.value}<br>`;

	*/

	let div = document.createElement("div");
	let checkbox = document.createElement("input");
	let label = document.createElement("label");

	checkbox.type = "checkbox";
	checkbox.name = "todo";

	label.textContent = to_do.value;

	div.appendChild(checkbox);
	div.appendChild(label);
	list.appendChild(div);

	// to_do.value = "";
}

function TodoMark() {
	let todos = document.getElementsByName("todo");

	for (let i = 0; i < todos.length; i++) {
		todos[i].checked = true;
	}
}

function TodoClear() {
	let todos = document.getElementsByName("todo");

	for (let i = 0; i < todos.length; i++) {
		todos[i].checked = false;
	}
}

function TodoDel() {
	//Elimina todo
	// let list = document.getElementById("todoList");
	// list.innerHTML = "";

	let todos = document.getElementsByName("todo");

	// Elimina lo marcado SOLUCION 1

	// const checkMissing = () => {
	// 	for (let i = 0; i < todos.length; i++) {
	// 		if (todos[i].checked) {
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// };

	// const deleteMissing = () => {
	// 	for (let i = 0; i < todos.length; i++) {
	// 		if (todos[i].checked) {
	// 			todos[i].parentElement.remove();
	// 		}
	// 	}
	// };

	// let missing = checkMissing();

	// while (missing) {
	// 	deleteMissing();
	// 	missing = checkMissing();
	// }

	// Elimina lo marcado SOLUCION 2

	const deleteChecked = () => {
		for (let i = todos.length - 1; i >= 0; i--) {
			console.log(todos);
			console.log(i);
			if (todos[i].checked) {
				todos[i].parentElement.remove();
			}
		}
	};

	deleteChecked();
}
