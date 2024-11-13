const DataMovie = [
    {
        id: 1,
        name: "Inception",
        text: "A mind-bending thriller about dreams within dreams.",
        price: 15,
        genre: "Sci-Fi",
        date: "2010-07-16",
        dure: "148 min",
        autheur: "Christopher Nolan",
        image: "../asset/admin/images/imgMovie/AttackOnTitan_movie.jpg",
        video: "https://www.youtube.com/embed/8OkpRK2_gVs?si=NcS4CkzR-PXANXDI"
    },
    {
        id: 2,
        name: "The Matrix",
        text: "A computer hacker learns about the true nature of reality.",
        price: 12,
        genre: "Action",
        date: "1999-03-31",
        dure: "136 min",
        autheur: "The Wachowskis",
        image: "../asset/admin/images/imgMovie/Bleachanime-22.webp",
        video: "https://www.youtube.com/embed/ECWciPlUt0s?si=A445ks_SsRkYeti8"
    },
    {
        id: 3,
        name: "Interstellar",
        text: "An astronaut ventures into space to save humanity.",
        price: 18,
        genre: "Sci-Fi",
        date: "2014-11-07",
        dure: "169 min",
        autheur: "Christopher Nolan",
        image: "../asset/admin/images/imgMovie/DeathNote_movie.webp",
        video: "https://www.youtube.com/embed/kNyR46eHDxE?si=pnd660xogDwJwP81"
    },
    {
        id: 4,
        name: "The Dark Knight",
        text: "Batman faces the Joker in a battle for Gotham.",
        price: 10,
        genre: "Action",
        date: "2008-07-18",
        dure: "152 min",
        autheur: "Christopher Nolan",
        image: "../asset/admin/images/imgMovie/DemonSlayer_movie.jpg",
        video: "https://www.youtube.com/embed/pmanD_s7G3U?si=4Hz9RA9gfjtroFMA"
    },
    {
        id: 5,
        name: "Pulp Fiction",
        text: "Interwoven stories of crime and redemption.",
        price: 14,
        genre: "Crime",
        date: "1994-10-14",
        dure: "154 min",
        autheur: "Quentin Tarantino",
        image: "../asset/admin/images/imgMovie/DragonBallZ_movie.png",
        video: "https://www.youtube.com/embed/gJCY9IIZBx8?si=QT9h1rDoyfjFG2ZI"
    },
    {
        id: 6,
        name: "Forrest Gump",
        text: "The life story of a simple man with an extraordinary journey.",
        price: 11,
        genre: "Drama",
        date: "1994-07-06",
        dure: "142 min",
        autheur: "Robert Zemeckis",
        image: "../asset/admin/images/imgMovie/MyHeroAcademia_movie.jpg",
        video: "https://www.youtube.com/embed/-77UEct0cZM?si=_Lo7ZvCVbCiHGp8y"
    },
    {
        id: 7,
        name: "Gladiator",
        text: "A betrayed Roman general seeks revenge.",
        price: 13,
        genre: "Action",
        date: "2000-05-05",
        dure: "155 min",
        autheur: "Ridley Scott",
        image: "../asset/admin/images/imgMovie/naruto_movie.jpg",
        video: "https://www.youtube.com/embed/2upuBiEiXDk?si=Vuv4FAuHbtOMPiFv"
    },
    {
        id: 8,
        name: "Avatar",
        text: "A marine on an alien planet must choose a side.",
        price: 20,
        genre: "Sci-Fi",
        date: "2009-12-18",
        dure: "162 min",
        autheur: "James Cameron",
        image: "../asset/admin/images/imgMovie/OnePiece_movie.jpg",
        video: "https://www.youtube.com/embed/zvJ4DCPRI74?si=v4jE_2W41waMlhYl"
    }
];


localStorage.setItem("movie", JSON.stringify(DataMovie));
JSON.parse(localStorage.getItem('movie'));
