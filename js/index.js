//copyright vars
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("#footer");
const copyright = document.createElement("p");

//copyright logo
const logoCopyright = document.createElement("p");
logoCopyright.innerHTML = "&#9881";
logoCopyright.style.display = "inline";
footer.appendChild(logoCopyright);

copyright.innerHTML = "Cristian Moran" + "- " + thisYear;
copyright.style.display = "inline";
footer.appendChild(copyright);

var headings = document.querySelectorAll("h2");
headings.forEach(function (heading) {
  heading.style.color = "#000080";
});

//this is a variable refering to the buttonContainer
var container = document.querySelector("nav button");

container.addEventListener("click", function (event) {
  var clicked = event.target.id;
  if (clicked == "button" || "About") {
    alert("Welcome to my page!");
  } else if (clicked == "button" || "Experience") {
    alert("None lol");
  } else if (clicked == "button" || "button") {
    alert("Follow for follow?");
  }
});

//skills section
const skills = [
  "JavaScript",
  "HTML5",
  "Java",
  "Photoshop",
  "Bilingual in English & Spanish",
  "Communication",
  "Collaboration",
  "Creativity",
  "Growth Mindset",
];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}