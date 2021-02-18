const data = [
  {
    image: "./designs/todo.png",
    title: "TODO App",
    url: "https://hariramjp777.github.io/frontend-todo-app/",
  },
  {
    image: "./designs/grid-component.png",
    title: "Grid Component",
    url: "https://hariramjp777.github.io/frontend-single-price-grid-component/",
  },
  {
    image: "./designs/social-proof.png",
    title: "Social Proof Section",
    url: "https://hariramjp777.github.io/frontend-social-proof-section/",
  },
  {
    image: "./designs/signup-form.png",
    title: "SignUp Form",
    url: "https://hariramjp777.github.io/frontend-intro-component-signup-form/",
  },
  {
    image: "./designs/testimonial-grid.png",
    title: "Testimonials Grid Layout Page",
    url: "https://hariramjp777.github.io/frontend-testimonials-grid-section/",
  },
  {
    image: "./designs/dashboard.png",
    title: "Social Media Dashboard",
    url:
      "https://hariramjp777.github.io/frontend-social-media-dashboard-theme-switcher/",
  },
  {
    image: "./designs/huddle.png",
    title: "Landing Page",
    url:
      "https://hariramjp777.github.io/frontend-huddle-landing-page-intro-section/",
  },
  {
    image: "./designs/fylo.png",
    title: "Landing Page",
    url: "https://hariramjp777.github.io/frontend-fylo-data-storage-component/",
  },
  {
    image: "./designs/404.png",
    title: "404 Page",
    url: "https://hariramjp777.github.io/frontend-404-page-challenge/",
  },
  {
    image: "./designs/team.png",
    title: "Team Page",
    url: "https://hariramjp777.github.io/frontend-team-page/",
  },
  {
    image: "./designs/recipe.png",
    title: "Recipe Page",
    url: "https://hariramjp777.github.io/frontend-recipe-page/",
  },
  {
    image: "./designs/card.png",
    title: "Cards",
    url: "https://hariramjp777.github.io/frontend-four-card-feature-section/",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  fillCards();
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  next.addEventListener("click", function () {
    let found = false;
    document.querySelectorAll(".card").forEach(function (card) {
      if (
        !found &&
        card.classList.contains("view") &&
        card.nextElementSibling
      ) {
        found = true;
        card.classList.remove("view");
        card.nextElementSibling.classList.add("view");
      }
    });
  });

  prev.addEventListener("click", function () {
    let found = false;
    document.querySelectorAll(".card").forEach(function (card) {
      if (
        !found &&
        card.classList.contains("view") &&
        card.previousElementSibling
      ) {
        found = true;
        card.classList.remove("view");
        card.previousElementSibling.classList.add("view");
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prev.click();
    else if (e.key === "ArrowRight") next.click();
    else return false;
  });

  document.querySelector(".btn").addEventListener("click", function () {
    const img = this.children[0];
    document.querySelector(".about").classList.toggle("view");
    setTimeout(function () {
      img.setAttribute(
        "src",
        img.getAttribute("src") === "./images/icon-cross.svg"
          ? "./images/icon-hamburger.svg"
          : "./images/icon-cross.svg"
      );
    }, 800);
  });
});

function fillCards() {
  const container = document.querySelector(".card-container");
  data.forEach((data) => {
    const card = document.createElement("div"),
      cardImage = document.createElement("div"),
      img = document.createElement("img"),
      url = document.createElement("a");
    img.setAttribute("src", data.image);
    img.setAttribute("alt", data.title);
    url.textContent = data.title;
    url.setAttribute("href", data.url);
    url.setAttribute("target", "_blank");
    card.classList.add("card");
    cardImage.classList.add("card-image");
    if (data.title === "TODO App") {
      card.classList.add("view");
    }
    cardImage.appendChild(img);
    card.appendChild(cardImage);
    card.appendChild(url);
    container.appendChild(card);
  });
}
