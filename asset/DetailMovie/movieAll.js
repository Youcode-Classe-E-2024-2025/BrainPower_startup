fetch('../asset/admin/Data/DataMovie.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Ensure data is coming in as expected

    // Make sure the gallery element exists
    const gallery = document.getElementById("film-gallery");
    if (gallery) {
      data.DataMovie.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;  // Ensure this path is correct
        filmElement.alt = film.name;
        filmElement.classList.add("film-thumbnail");

        // Redirect on image click
        filmElement.addEventListener("click", () => {
          window.location.href = `detailMovie.html?id=${film.id}`;
        });

        gallery.appendChild(filmElement);  // Add the image to the gallery
      });
    }
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON:', error);
  });
