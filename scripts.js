const friendButton = document.querySelector(".show-friend-button");
const friendContainer = document.querySelector(".friend-container")

friendButton.addEventListener("click", (e) => {
    friendContainer.classList.toggle("hidden");
});

// function hideElement() {

//     const friendContainer = document.querySelector(".friend-container")

//     friendContainer.classList.toggle("hidden");
// }
