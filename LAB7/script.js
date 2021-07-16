$(document).ready(function () {
	// Start your code from here

	let characters = [
		"Anakin Skywalker",
		"Ahsoka Tano",
		"Obi-Wan Kenobi",
		"Yoda",
		"Admiral Ackbar",
		"Grogu",
		"Padme Amidala",
		"BB-8",
		"Boba Fett",
	];

	const populateButtons = (arr) => {
		$("#animal-buttons").empty();
		arr.forEach((element) => {
			let a = $("<button>");
			a.text(element);
			a.addClass("animal-button");
			a.attr("data-type", element);
			$("#animal-buttons").append(a);
		});
	};

	populateButtons(characters);

	// Click botones superiores
	$("#animal-buttons").on("click", ".animal-button", function () {
		$("#animals").empty();

		let elementType = $(this).attr("data-type");
		let queryURL =
			"https://api.giphy.com/v1/gifs/search?q=" +
			elementType +
			"&api_key=7OIQrr1lH7D2bfR6gYgeaVOTWP29iGxx&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET",
		}).then((response) => {
			response.data.forEach((gif) => {
				let characterDiv = $(`<div class="animal-item">`);
				let rating = gif.rating;

				let p = $(`<p>`).text("Rating: " + rating);

				let animated = gif.images.fixed_height.url;
				let still = gif.images.fixed_height_still.url;

				let characterImage = $(`<img>`);
				characterImage.attr("src", still);
				characterImage.attr("data-still", still);
				characterImage.attr("data-animate", animated);
				characterImage.attr("data-state", "still");
				characterImage.addClass("character-image");

				characterDiv.append(p);
				characterDiv.append(characterImage);

				$("#animals").append(characterDiv);
			});
		});
	});

	// Click en imagenes
	$("#animals").on("click", ".character-image", function () {
		let state = $(this).attr("data-state");
		if (state === "still") {
			$(this).attr("src", $(this).attr("data-animate"));
			$(this).attr("data-state", "animate");
		} else {
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-state", "still");
		}
	});

	// Click boton agregar
	$("#add-animal").on("click", function (e) {
		e.preventDefault();
		let newItem = $("input").val();
		characters.push(newItem);
		populateButtons(characters);
	});
});
