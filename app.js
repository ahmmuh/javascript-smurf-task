// Här har jag skapar globala variabler för att det ska vara tillgängliga i min kod för att kunna återanvända dem
var oldImages = document.querySelectorAll("img");
var cats = document.getElementsByTagName("span");
let headlines = document.querySelectorAll("h1,h2,h3");

const btn = document.querySelector(".btn");
btn.addEventListener("click", loadFunction);

(function () {
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
  btn.style.height = "35px";
  btn.style.borderRadius = "24px";
})();

// alert funktion med texten "Du har blivit smurfad"

function popupMessage() {
  alert("Du har blivit smurfad");
}
// jag vill ändra egenskaper på bilderna så att de har samma höjd och bredd
//innan man trycker på knappen och efter
// denna functionen körs direkt och inte behöver trycker/ hover over på någon
//(kallas Immediately Invoked Function Expressions)
(function () {
  oldImages.forEach(function (oldImage) {
    oldImage.width = "200";
    oldImage.height = "100";
  });
})();

// ska fixa till det....
function toggleContent() {
  if (btn.innerText === "Change Content") {
    btn.innerText = "Toggle Back";
  } else {
    btn.innerText = "Change Content";
  }
}

//Jag har skapat en funktion som loopar igenom alla Katt & katt
//och ersätter dem med ordet Smurf med respektive smurf
function changeCats() {
  for (var i = 0; i < cats.length; i++) {
    cats[i].innerHTML = cats[i].innerHTML.replace("Katt", "Smurf");
    cats[i].innerHTML = cats[i].innerHTML.replace("katt", "smurf");
  }
}

// här en funktion som jag lagt till knappen för att lyssna på ett klick
//och sen kalla dem alla funktioner som ligger i denna funktion
function loadFunction() {
  toggleContent();
  changeCats();
  changeImages();
  toUperCase();
  headlines.forEach(changeHeadlines);
  popupMessage();
}

// den här funktionen går igenom alla rubriker, ändrar färgen till röd och storleken till 25px
function changeHeadlines(element) {
  element.style.color = "red";
  element.style.fontSize = "25px";
}

// här är en funktion och i den har jag en array med nya bilder,
//loopar igenom nya men sen tog jag in gamla bilderna och sätt dem mot dem nya
function changeImages() {
  var newImages = [
    "images/smurf0.jpg",
    "images/smurf1.jpg",
    "images/smurf2.jpg",
    "images/smurf3.jpg",
  ];
  for (var i = 0; i < newImages.length; i++) {
    oldImages[i].src = newImages[i];
  }
}

// en funktion som loppar igenom alla rubriker och ändrar dem till varsaler när man klickar på knappen.
toUperCase = () => {
  headlines.forEach(function (toUper) {
    toUper.innerHTML = toUper.innerHTML.toUpperCase();
  });
};
