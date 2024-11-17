// Check if data exists in localStorage
let movieData = JSON.parse(localStorage.getItem('movie'));

if (!movieData) {
  // If not in localStorage, fetch it from the JSON file
  fetch('http://localhost:3000/DataMovie')
    .then(response => response.json())
    .then(data => {
      movieData = data.DataMovie;  // Assign data to movieData variable
      localStorage.setItem("movie", JSON.stringify(movieData));  // Store in localStorage
      displayMovies(movieData);  // Call function to display movies
    })
    .catch(error => console.error('Erreur:', error));
} else {
  // If data is in localStorage, use it directly
  displayMovies(movieData);
}

// Function to display movies in the gallery
function displayMovies(data) {
  const gallery = document.getElementById("film-gallery");
  if (gallery) {
    data.forEach(film => {
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
}
