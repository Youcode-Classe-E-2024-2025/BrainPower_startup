const DataAccessoires = [
    {
      id : "1",
      name: "T-shirt classique",
      text: "Un t-shirt en coton confortable.",
      price: 20.99,
      images: ["./images/imgAccessoires/AttackOnTitan_1.jpg", "./images/imgAccessoires/AttackOnTitan_2.jpg", "./images/imgAccessoires/AttackOnTitan_3.jpg"]
    },
    {
      id : "2",  
      name: "T-shirt sport",
      text: "Parfait pour les activités sportives.",
      price: 25.99,
      images: ["./images/imgAccessoires/bleach_1.jpg", "./images/imgAccessoires/bleach_2.jpg", "./images/imgAccessoires/bleach_3.jpg"]
    },
    {
      id: "3" , 
      name: "T-shirt fashion",
      text: "Design tendance et moderne.",
      price: 30.99,
      images: ["./images/imgAccessoires/DeathNote_1.jpg", "./images/imgAccessoires/DeathNote_2.jpg", "./images/imgAccessoires/DeathNote_3.jpg"]
    },
    {
      id : "4",
      name: "T-shirt casual",
      text: "Décontracté pour un usage quotidien.",
      price: 18.99,
      images: ["./images/imgAccessoires/DemonSlayer_1.jpg", "./images/imgAccessoires/DemonSlayer_2.jpg", "./images/imgAccessoires/DemonSlayer_3.jpg"]
    },
    {
      id : "5",
      name: "T-shirt streetwear",
      text: "Style urbain et cool.",
      price: 27.99,
      images: ["./images/imgAccessoires/DragonBallZ_1.jpg", "./images/imgAccessoires/DragonBallZ_2.jpg", "./images/imgAccessoires/DragonBallZ_3.jpg"]
    },
    {
      id : "6",
      name: "T-shirt vintage",
      text: "Un look rétro unique.",
      price: 22.99,
      images: ["./images/imgAccessoires/MyHeroAcademia_1.jpg", "./images/imgAccessoires/MyHeroAcademia_2.jpg", "./images/imgAccessoires/MyHeroAcademia_3.jpg"]
    },
    {
      id : "7",
      name: "T-shirt minimaliste",
      text: "Simple et élégant.",
      price: 19.99,
      images: ["./images/imgAccessoires/naruto_1.jpg", "./images/imgAccessoires/naruto_2.jpg", "./images/imgAccessoires/naruto_3.jpg"]
    },
    {
      id : "8",
      name: "T-shirt graphique",
      text: "Design audacieux pour se démarquer.",
      price: 24.99,
      images: ["./images/imgAccessoires/OnePiece_1.jpg", "./images/imgAccessoires/OnePiece_2.jpg", "./images/imgAccessoires/OnePiece_3.jpg"]
    },
  ];


  localStorage.setItem("Accessoire", JSON.stringify(DataAccessoires));

 JSON.parse(localStorage.getItem('Accessoire'));
