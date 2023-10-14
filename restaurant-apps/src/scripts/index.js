import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

// console.log("Hello Coders! :)");

document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/DATA.json")
    .then((response) => response.json())
    .then((JSON) => {
      let htmlRestoran = "";
      const respon = JSON.restaurants;
      for (let i in respon) {
        htmlRestoran += `
        <div class="cardRestoran">
        <a href="#">
        <img
          src="${respon[i]["pictureId"]}"
          alt="Gambar restoran ${respon[i]["name"]}"
        />
        <div class="kontenCard">
        <h2>${respon[i]["name"]}</h2>
        <p>${respon[i]["description"]}</p>
        <p>Kota: ${respon[i]["city"]}</p>
        <p>Rating: <b>${respon[i]["rating"]}</b></p>
        </div>
        </a>
      </div>
        `;
      }
      document.getElementById("kontenRestoran").innerHTML = htmlRestoran;
    });

  const tombolHamburger = document.getElementById("hamburger");
  const navBar = document.getElementById("navBar");
  const main = document.querySelector("main");

  tombolHamburger.addEventListener("click", () => {
    navBar.classList.toggle("draw");
  });

  main.addEventListener("click", () => {
    navBar.classList.add("draw");
  });
});
