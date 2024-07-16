document.addEventListener("DOMContentLoaded", (e) => {
  var showButton = document.querySelector("#show");

  function handleScreenChange(e) {
    if (e.matches) {
      showButton.addEventListener("click", handleBiggerScreen);
    } else {
      showButton.addEventListener("click", handleSmallerScreen);
    }
  }
  const mediaQuery = window.matchMedia("(min-width: 1440px)");

  handleScreenChange(mediaQuery);

  mediaQuery.addEventListener("change", handleScreenChange);

  function handleSmallerScreen() {
    console.log(showButton);
    let links = document.querySelector(".links");
    console.log(links);
    let profile = document.querySelector(".profile");
    console.log(profile);
    let hideButton = document.querySelector("#hide");
    console.log(hideButton);
    showButton.addEventListener("click", (e) => {
      console.log("clicked");
      links.classList.remove("hidden");
      profile.classList.add("hidden");
    });
    hideButton.addEventListener("click", (e) => {
      profile.classList.remove("hidden");
      links.classList.add("hidden");
    });
  }

  function handleBiggerScreen() {
    let showButton = document.querySelector("#show");

    let links = document.querySelector(".links");

    showButton.addEventListener("click", (e) => {
      console.log("clicked");
      links.classList.toggle("hidden");
    });
  }
});
