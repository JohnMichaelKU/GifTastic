var animal;
var animals = ["tiger", "elephant", "penguin", "dog", "cat", "hippo"]
var pickedAnimal
makeButtons();
$(document).ready(function() {
	$("#add-button").click(function() {
		console.log("search is called");
    animal = $("#animal-input").val().trim().toLowerCase();
    checkArray();
  });
  $("#gif-buttons").on("click", ".animal-button", function() {
    pickedAnimal = $(this).val();
    console.log(pickedAnimal);
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + pickedAnimal + "&api_key=e09c00c1c4cc417797de0a10c2511739&limit=5",
      method: "GET"
    }).done(function(data) {
      console.log(data);
      for(i = 0; i< 5; i++) {
        image = $("<div style='display:inline-block;' class='has-text-centered' <p>" + data.data[i].rating + "</p><img src='" + data.data[i].images.fixed_height.url + "'></div>");
        $("#gif-location").prepend(image)
        console.log(data.data[i].rating)
      }
    });
  })
});
function checkArray() {
  if(animals.includes(animal) === true) {
    console.log("true")
  } else {
    animals.push(animal);
    makeButtons();
  }
}
function makeButtons() {
  $("#gif-buttons").empty();
  for(i = 0; i < animals.length; i++) {
    var a = $("<button value='" + animals[i] + "'> ")
    a.addClass("animal-button button is-info is-meduim")
    a.text(animals[i])
    $("#gif-buttons").append(a);
  }
  console.log("makeButtons called")
}
