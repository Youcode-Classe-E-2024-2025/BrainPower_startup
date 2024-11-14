// Declare afficherDetail globally, outside of DOMContentLoaded
function afficherDetail(num) {
  console.log("hi");
  // You need to fetch the data inside the fetch block when calling the function.
  fetch('../asset/admin/Data/DataMovie.json')
      .then(response => response.json())  // Convertir la réponse en JSON
      .then(data => {
          const film = data.DataMovie.find(f => f.id === num);
          console.log(film);
          if (film) {
              // Si le film existe, redirige vers la page de détail avec l'ID du film
              window.location.href = `detailMovie.html?id=${film.id}`;
          } else {
              // Si le film n'est pas trouvé, afficher une erreur
              console.error("Film non trouvé pour l'ID :", num);
          }
      })
      .catch(error => {
          console.error('Erreur lors du chargement des données JSON:', error);
      });
}


  // Charger les données depuis le fichier JSON
  fetch('../asset/admin/Data/DataMovie.json')
      .then(response => response.json())  // Convertir la réponse en JSON
      .then(data => {
          // Extraire l'ID du film depuis l'URL
          const params = new URLSearchParams(window.location.search);
          const filmId = parseInt(params.get("id"));

          // Trouver le film correspondant à l'ID dans les données chargées
          const film = data.DataMovie.find(f => f.id === filmId);  // Utiliser `data.DataMovie` pour accéder à la liste des films

          // Vérifier si le film a été trouvé
          if (film) {
              // Trouver le conteneur où afficher les détails du film
              const detailsContainer = document.getElementById("film-details");

              // Créer le HTML pour afficher les détails du film
              detailsContainer.innerHTML = `
                  <div class="film-info-container">
                      <div class="film-left">
                          <img src="${film.image}" alt="${film.name}" class="film-image">
                          <div id="movieAchat">   
                              <h3 style="color:aliceblue">9.5</h3>
                              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                              <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
                              <h3 style="color:aliceblue">${film.price} DH</h3>
                              <button style="width:100px; background-color: aliceblue;color:orange; border-radius:5px">Buy Now</button>
                              <i class="fa-solid fa-cart-plus" style="color: #ffffff; font-size: 20px;"></i>
                          </div> 
                      </div>
                      <div class="film-info">
                          <h1><b>${film.name}</b></h1>
                          <p><strong>Description:</strong> <br>${film.text}</p>
                          <p><strong>Genre:</strong><br> ${film.genre}</p>
                          <p><strong>Date de production:</strong><br> ${film.date}</p>
                          <p><strong>Durée:</strong><br> ${film.dure}</p>
                          <p><strong>Auteur:</strong><br> ${film.autheur}</p>
                          <iframe width="100%" height="300" src="${film.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                  </div>
              `;
          } else {
              // Si le film n'est pas trouvé, afficher un message
              document.getElementById("film-details").innerHTML = "<p>Film non trouvé.</p>";
          }
      })
      .catch(error => {
          console.error('Erreur lors du chargement des données JSON:', error);
          document.getElementById("film-details").innerHTML = "<p>Erreur lors du chargement des détails du film.</p>";
      });

