const DataTshirt = [
    {
      id : "1",
      name: "T-shirt classique",
      text: "Un t-shirt en coton confortable.",
      price: 20.99,
      images: ["./images/imgTshirts/AttackOnTitan_1.jpg", "./images/imgTshirts/AttackOnTitan_2.jpg", "./images/imgTshirts/AttackOnTitan_3.jpg"]
    },
    {
      id : "2",  
      name: "T-shirt sport",
      text: "Parfait pour les activités sportives.",
      price: 25.99,
      images: ["./images/imgTshirts/bleach_1.jpg", "./images/imgTshirts/bleach_2.jpg", "./images/imgTshirts/bleach_3.jpg"]
    },
    {
      id: "3" , 
      name: "T-shirt fashion",
      text: "Design tendance et moderne.",
      price: 30.99,
      images: ["./images/imgTshirts/DeathNote_1.jpg", "./images/imgTshirts/DeathNote_2.jpg", "./images/imgTshirts/DeathNote_3.jpg"]
    },
    {
      id : "4",
      name: "T-shirt casual",
      text: "Décontracté pour un usage quotidien.",
      price: 18.99,
      images: ["./images/imgTshirts/DemonSlayer_1.jpg", "./images/imgTshirts/DemonSlayer_2.jpg", "./images/imgTshirts/DemonSlayer_3.jpg"]
    },
    {
      id : "5",
      name: "T-shirt streetwear",
      text: "Style urbain et cool.",
      price: 27.99,
      images: ["./images/imgTshirts/DragonBallZ_1.jpg", "./images/imgTshirts/DragonBallZ_2.jpg", "./images/imgTshirts/DragonBallZ_3.jpg"]
    },
    {
      id : "6",
      name: "T-shirt vintage",
      text: "Un look rétro unique.",
      price: 22.99,
      images: ["./images/imgTshirts/MyHeroAcademia_1.jpg", "./images/imgTshirts/MyHeroAcademia_2.jpg", "./images/imgTshirts/MyHeroAcademia_3.jpg"]
    },
    {
      id : "7",
      name: "T-shirt minimaliste",
      text: "Simple et élégant.",
      price: 19.99,
      images: ["./images/imgTshirts/naruto_1.jpg", "./images/imgTshirts/naruto_2.jpg", "./images/imgTshirts/naruto_3.jpg"]
    },
    {
      id : "8",
      name: "T-shirt graphique",
      text: "Design audacieux pour se démarquer.",
      price: 24.99,
      images: ["./images/imgTshirts/OnePiece_1.jpg", "./images/imgTshirts/OnePiece_2.jpg", "./images/imgTshirts/OnePiece_3.jpg"]
    },
  ];


  localStorage.setItem("Tshirt", JSON.stringify(DataTshirt));

  JSON.parse(localStorage.getItem('Tshirt'));