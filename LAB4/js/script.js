let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
deñ.addEventListener("click", TodoDel);

function TodoPost(e) {
	e.preventDefault();

	let to_do = document.getElementById("todoText");
	let list = document.getElementById("todoList");

	let currentlistHTML = list.innerHTML;

	list.innerHTML =
		currentlistHTML + `<input type="checkbox" name="todo"/>${to_do.value}<br>`;

	to_do.value = "";
}

const TodoClear = () => {};
const TodoMark = () => {};
const TodoDel = () => {};
