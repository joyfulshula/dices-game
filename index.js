var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";

// for image on the left

var randomImageSrc1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);

// for the image on the right

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


// conditional statement to check for the winner

if (randomImageSrc1 > randomImageSrc2) {
	document.querySelector("h1").innerHTML = "Player one Wins, WOW!"
} else if (randomImageSrc2 > randomImageSrc1) {
	document.querySelector("h1").innerHTML = "Player two Wins, WOW!"
} else {
	document.querySelector("h1").innerHTML = "It's A Draw!"
}
