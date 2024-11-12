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
        image: "inception.jpg",
        video: "inception_trailer.mp4"
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
        image: "matrix.jpg",
        video: "matrix_trailer.mp4"
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
        image: "interstellar.jpg",
        video: "interstellar_trailer.mp4"
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
        image: "dark_knight.jpg",
        video: "dark_knight_trailer.mp4"
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
        image: "pulp_fiction.jpg",
        video: "pulp_fiction_trailer.mp4"
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
        image: "forrest_gump.jpg",
        video: "forrest_gump_trailer.mp4"
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
        image: "gladiator.jpg",
        video: "gladiator_trailer.mp4"
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
        image: "avatar.jpg",
        video: "avatar_trailer.mp4"
    }
];


localStorage.setItem("movie", JSON.stringify(DataMovie));

JSON.parse(localStorage.getItem('movie'));