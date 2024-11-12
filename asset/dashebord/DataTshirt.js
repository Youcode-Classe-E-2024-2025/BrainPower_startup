const DataTshirt = [
    {
      id : "1",
      name: "T-shirt classique",
      text: "Un t-shirt en coton confortable.",
      price: 20.99,
      images: ["./img/images (1).jpg", "./img/images (2).jpg", "./img/images (3).jpg"]
    },
    {
      id : "2",  
      name: "T-shirt sport",
      text: "Parfait pour les activités sportives.",
      price: 25.99,
      images: ["sport1.jpg", "sport2.jpg", "sport3.jpg"]
    },
    {
      id: "3" , 
      name: "T-shirt fashion",
      text: "Design tendance et moderne.",
      price: 30.99,
      images: ["fashion1.jpg", "fashion2.jpg", "fashion3.jpg"]
    },
    {
      id : "4",
      name: "T-shirt casual",
      text: "Décontracté pour un usage quotidien.",
      price: 18.99,
      images: ["casual1.jpg", "casual2.jpg", "casual3.jpg"]
    },
    {
      id : "5",
      name: "T-shirt streetwear",
      text: "Style urbain et cool.",
      price: 27.99,
      images: ["street1.jpg", "street2.jpg", "street3.jpg"]
    },
    {
      id : "6",
      name: "T-shirt vintage",
      text: "Un look rétro unique.",
      price: 22.99,
      images: ["vintage1.jpg", "vintage2.jpg", "vintage3.jpg"]
    },
    {
      id : "7",
      name: "T-shirt minimaliste",
      text: "Simple et élégant.",
      price: 19.99,
      images: ["minimal1.jpg", "minimal2.jpg", "minimal3.jpg"]
    },
    {
      id : "8",
      name: "T-shirt graphique",
      text: "Design audacieux pour se démarquer.",
      price: 24.99,
      images: ["graphic1.jpg", "graphic2.jpg", "graphic3.jpg"]
    },
    {
      id : "9",
      name: "T-shirt en lin",
      text: "Léger et respirant.",
      price: 29.99,
      images: ["linen1.jpg", "linen2.jpg", "linen3.jpg"]
    },
    {
      id : "10",
      name: "T-shirt oversize",
      text: "Pour un look décontracté.",
      price: 21.99,
      images: ["oversize1.jpg", "oversize2.jpg", "oversize3.jpg"]
    },
    {
      id : "11",
      name: "T-shirt à poche",
      text: "Avec une poche pratique.",
      price: 23.99,
      images: ["pocket1.jpg", "pocket2.jpg", "pocket3.jpg"]
    },
    {
      id : "12",
      name: "T-shirt écologique",
      text: "Fabriqué avec des matériaux durables.",
      price: 26.99,
      images: ["eco1.jpg", "eco2.jpg", "eco3.jpg"]
    },
    {
      id : "13",
      name: "T-shirt sans manches",
      text: "Idéal pour les journées chaudes.",
      price: 17.99,
      images: ["sleeveless1.jpg", "sleeveless2.jpg", "sleeveless3.jpg"]
    },
    {
      id : "14",
      name: "T-shirt de sport",
      text: "Conçu pour l'efficacité sportive.",
      price: 28.99,
      images: ["sport2-1.jpg", "sport2-2.jpg", "sport2-3.jpg"]
    },
    {
      id : "15",
      name: "T-shirt rayé",
      text: "Un motif classique à rayures.",
      price: 19.99,
      images: ["striped1.jpg", "striped2.jpg", "striped3.jpg"]
    },
    {
      id : "16",
      name: "T-shirt à manches longues",
      text: "Idéal pour la mi-saison.",
      price: 24.99,
      images: ["longsleeve1.jpg", "longsleeve2.jpg", "longsleeve3.jpg"]
    },
    {
      id : "17",
      name: "T-shirt coloré",
      text: "Pour apporter de la couleur.",
      price: 20.99,
      images: ["colorful1.jpg", "colorful2.jpg", "colorful3.jpg"]
    },
    {
      id : "18",
      name: "T-shirt en laine",
      text: "Parfait pour les journées fraîches.",
      price: 32.99,
      images: ["wool1.jpg", "wool2.jpg", "wool3.jpg"]
    },
    {
      id : "19",
      name: "T-shirt en soie",
      text: "Léger et luxueux.",
      price: 34.99,
      images: ["silk1.jpg", "silk2.jpg", "silk3.jpg"]
    },
    {
      id : "20",
      name: "T-shirt à capuche",
      text: "T-shirt avec capuche intégrée.",
      price: 31.99,
      images: ["hooded1.jpg", "hooded2.jpg", "hooded3.jpg"]
    }
  ];


  localStorage.setItem("Tshirt", JSON.stringify(DataTshirt));

  const storedData = JSON.parse(localStorage.getItem('Tshirt'));

