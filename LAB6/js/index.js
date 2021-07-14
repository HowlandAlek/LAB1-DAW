let agregarBtn = $(".agregar");
let newText = $("#newText");
let lista = $(".Lista");

agregarBtn.on("click", function (e) {
	e.preventDefault();

	if (newText.val() !== "") {
		lista.append(`
            <div class="lis">
                <li>
                    <p>${newText.val()}</p>
                    <button class="checar" type="submit">
                        check
                    </button>
                    <button class="del" type="submit">
                        delete
                    </button>
                </li>
            </div>`);
		newText.val("");
	} else {
		alert("Se debe ingresar un elemento.");
	}
});

lista.on("click", "button.checar", function () {
	let text = $(this).siblings("p");
	text.toggleClass("line-through");
});

lista.on("click", "button.del", function () {
	$(this).parent().parent().remove();
});
