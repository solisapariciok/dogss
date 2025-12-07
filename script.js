const API_KEY = "live_kTAxRtyRHOOgJv3bnqCVoSt7w1OuwnLPlOUr5BEjArB3zYZvQgDzeDRzKHsgNJXX";

document.addEventListener("DOMContentLoaded", () => {
  const breedsList = document.getElementById("breeds-list");
  const imagesList = document.getElementById("images-list");

  // Load Breeds Page
  if (breedsList) {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: { "x-api-key": API_KEY }
    })
      .then(res => res.json())
      .then(data => {
        breedsList.innerHTML = "";
        data.forEach(breed => {
          const div = document.createElement("div");
          div.classList.add("breed");
          div.innerHTML = `
            <h3>${breed.name}</h3>
            <p><strong>Life Span:</strong> ${breed.life_span}</p>
            <p><strong>Temperament:</strong> ${breed.temperament || "N/A"}</p>
          `;
          breedsList.appendChild(div);
        });
      });
  }

  // Load Images Page
  if (imagesList) {
    fetch("https://api.thedogapi.com/v1/images/search?limit=12", {
      headers: { "x-api-key": API_KEY }
    })
      .then(res => res.json())
      .then(data => {
        imagesList.innerHTML = "";
        data.forEach(img => {
          const div = document.createElement("div");
          div.classList.add("dog-image");
          div.innerHTML = `<img src="${img.url}" alt="Dog">`;
          imagesList.appendChild(div);
        });
      });
  }
});
