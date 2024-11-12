// details.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const filmId = parseInt(params.get("id"));
    const film = films.find(f => f.id === filmId);
  
    if (film) {
      const detailsContainer = document.getElementById("film-details");
  
      detailsContainer.innerHTML = `
        <div class="film-info-container">
          <img src="${film.image}" alt="${film.title}" class="film-image">
          <div class="film-info">
            <h1>${film.title}</h1>
            <p><strong>Description:</strong> ${film.description}</p>
            <p><strong>Genre:</strong> ${film.genre}</p>
            <p><strong>Date de production:</strong> ${film.releaseDate}</p>
            <iframe src="${film.video}" frameborder="0" allowfullscreen class="film-video"></iframe>
          </div>
        </div>
      `;
    } else {
      document.getElementById("film-details").innerHTML = "<p>Film non trouvé.</p>";
    }
  });