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
            <h1><b>${film.title}</b></h1>
            <p><strong>Description:</strong> <br>${film.description}</p>
            <p><strong>Genre:</strong><br> ${film.genre}</p>
            <p><strong>Date de production:</strong><br> ${film.releaseDate}</p>
            <p><strong>Time:</strong><br> ${film.time}</p>
            <p><strong>Author:</strong><br> ${film.author}</p>
            <video src="${film.video}"loop autoplay muted class="film-video"></video>
          </div>
        </div>
      `;
    } else {
      document.getElementById("film-details").innerHTML = "<p>Film non trouvé.</p>";
    }
  });