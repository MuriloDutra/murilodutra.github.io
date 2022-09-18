const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ellie.jpg") {
    myImage.setAttribute(
      "src",
      "images/aaron-limonick-street-barricades-new-web.jpg"
    );
  } else myImage.setAttribute("src", "images/ellie.jpg");
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) setUserName();
  else {
    localStorage.setItem("name", myName);
    changeHeaderText(myName);
  }
}

function changeHeaderText(text) {
  myHeading.textContent = `Mozilla is cool, ${text}`;
}

if (!localStorage.getItem("name")) setUserName();
else {
  const storedName = localStorage.getItem("name");
  changeHeaderText(storedName);
}

myButton.onclick = () => {
  setUserName();
};
