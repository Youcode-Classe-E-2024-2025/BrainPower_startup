const DataMovie = [
    {
        id: 1,
        name: "Attaque des Titans",
        text: "Après la destruction de sa ville natale et la mort de sa mère, le jeune Eren Yeager promet de purger la terre",
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
        name: "Bleach",
        text: "Le lycéen Kurosaki Ichigo ne ressemble à aucun adolescent ordinaire, car il est capable de voir des fantômes",
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
        name: "Death Note",
        text: "Un lycéen intelligent se lance dans une croisade secrète afin d'éliminer les criminels",
        price: 18,
        genre: "Sci-Fi",
        date: "2014-11-07",
        dure: "169 min",
        autheur: "Christopher Nolan",
        image: "../asset/admin/images/imgMovie/DeathNote_movie.webp",
        video: "https://www.youtube.com/embed/kNyR46eHDxE?si=t7od5g7VngzjwAX1"
    },
    {
        id: 4,
        name: "Demon Slayer",
        text: "Tanjiro et sa soeur Nezuko, qui se transforme lentement en démon.",
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
        name: "Dragon Ball Z",
        text: "Après avoir appris qu'il était originaire d'une autre planète, le guerrier Goku",
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
        name: "My Hero Academia",
        text: "Un jeune garçon sans super pouvoirs fou de super-héros est bien déterminé à s'inscrire dans une prestigieuse académie.",
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
        name: "Naruto",
        text: "Naruto Uzumaki, un adolescent ninja, le chef du village et le ninja le plus fort.",
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
        name: "One Piece",
        text: "D. Luffy et de ses amis afin de trouver le plus grand trésor jamais laissé par le légendaire Pirate, Gol D Roger.",
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
