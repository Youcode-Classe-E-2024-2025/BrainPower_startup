// Declare afficherDetail globally, outside of DOMContentLoaded
function afficherDetail(num) {
    console.log("hi");
    // Retrieve data from local storage instead of fetching
    const data = JSON.parse(localStorage.getItem('movie'));
    // console.log(data)
    
    if (data) {
        const film = data.find(f => f.id === num);
        console.log(film);
        if (film) {
            // If the film exists, redirect to the detail page with the film's ID
            window.location.href = `detailMovie.html?id=${film.id}`;
        } else {
            // If the film is not found, log an error
            console.error("Film non trouvé pour l'ID :", num);
        }
    } else {
        console.error("Données de film non disponibles dans le localStorage");
    }
}

// Retrieve data from local storage for displaying film details
const data = JSON.parse(localStorage.getItem('movie'));

if (data ) {
    // Extract the film ID from the URL
    const params = new URLSearchParams(window.location.search);
    const filmId = parseInt(params.get("id"));

    // Find the corresponding film by ID in the loaded data
    const film = data.find(f => f.id === filmId);

    // Check if the film is found
    if (film) {
        // Find the container where to display film details
        const detailsContainer = document.getElementById("film-details");

        // Create HTML to display the film's details
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
                    <div class="film-infos">
                    <h1><b>${film.name}</b></h1>
                    <p><strong>Description:</strong> <br>${film.text}</p>
                    <p><strong>Genre:</strong><br> ${film.genre}</p>
                    <p><strong>Date de production:</strong><br> ${film.date}</p>
                    <p><strong>Durée:</strong><br> ${film.dure}</p>
                    <p><strong>Auteur:</strong><br> ${film.autheur}</p>
                    </div>
                    <iframe width="100%" height="300" src="${film.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        `;
    } else {
        // If the film is not found, display a message
        document.getElementById("film-details").innerHTML = "<p>Film non trouvé.</p>";
    }
} else {
    console.error("Données de film non disponibles dans le localStorage");
    document.getElementById("film-details").innerHTML = "<p>Erreur lors du chargement des détails du film.</p>";
}

