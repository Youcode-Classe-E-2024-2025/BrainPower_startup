// index.js
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("film-gallery");
  
    films.forEach(film => {
      const filmElement = document.createElement("img");
      filmElement.src = film.image;
      filmElement.alt = film.title;
      filmElement.classList.add("film-thumbnail");
  
      // Gérer le clic pour rediriger avec l'ID du film dans l'URL
      filmElement.addEventListener("click", () => {
        window.location.href = `detailMovie.html?id=${film.id}`;
      });
  
      gallery.appendChild(filmElement);
    });
  });