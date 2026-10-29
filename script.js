// Finds the About Me button.
const aboutButton = document.getElementById("aboutButton");

// Runs when the button is clicked.
aboutButton.addEventListener("click", () => {
    window.location.href = "about.html";
})

const projectsButton = document.getElementById("projectsButton");

// Opens the Projects page when clicked.
projectsButton.addEventListener("click", () => {
    window.location.href = "projects.html";
});