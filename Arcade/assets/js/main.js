const champNom = document.querySelector("#nom");
const sectionJeux = document.querySelector("#section-jeux");
const template = document.querySelector("template");
const formRecherche = document.querySelector("#formRecherche");
const champRecherche = document.querySelector("#recherche");
const messageResultat = document.querySelector(".message-resultats");

const jeux = [
  {
    auteur: "Ihasina Joanna Jacky",
    nom: "Au pays des merveilles",
    image: "",
    description: "Sortez du pays des merveilles en aidant ses habitants!",
    genres: ["Conte de fées", "Logique", "Casse-têtes"],
    lien: "",
  },
  {
    auteur: "Cedryck Paquette",
    nom: "Billy & Mini",
    image: "assets/img/paquette-cedryck-vignette.jpg",
    description:
      "Billy & Mini est un jeu éducatif de logique, qui explore les thèmes de l'entraide et de l'amitié dans un ambiance ludique et amusante",
    genres: ["Casse-tête", "logique", "animaux"],
    lien: "https://h26-2j2.github.io/Paquette_Cedryck_TravailPratique/",
  },
  {
    auteur: "Cédric Leclerc",
    nom: "Bloc et sable",
    image: "assets/img/leclerc-cedric-vignette.jpg",
    description:
      "Un jeu calme portant sur des blocs de construction où la seule limite est la créativité",
    genres: ["Bloc", "créativité", "relaxant"],
    lien: "https://h26-2j2.github.io/Leclerc_Cedric_TP/",
  },
  {
    auteur: "Philippe Fauchon",
    nom: "Bobato",
    image: "assets/img/fauchon-philippe-vignette.webp",
    description:
      "Bobato est un jeu 2D éducatif et créatif destiné aux enfants de 2 à 5 ans, où ils conçoivent et personnalisent leur propre bateau grâce à des interactions simples sur tablette ou ordinateur. Le jeu se déroule en trois étapes : choisir la forme du bateau, le colorer librement, puis le voir prendre vie dans une animation interactive sur l’eau. L’expérience mise sur la créativité, l’exploration et le plaisir sans échec, avec des visuels colorés et des sons engageants.",
    genres: ["Créativité", "Éducatif", "Bateaux"],
    lien: "https://h26-2j2.github.io/Fauchon_Philippe_TP1_V2/",
  },
  {
    auteur: "Léonie Cantegrel",
    nom: "Boîte à gogo",
    image: "",
    description:
      "Aidez le livreur à remettre des colis de taille, forme et couleur différentes à ;a personne auquel il est destiné",
    genres: ["puzzle", "éducatif", "logique"],
    lien: "https://h26-2j2.github.io/CantegrelLeonie_TravailPratique/",
  },
  {
    auteur: "Minh-lee Ho",
    nom: "Choisis ta route",
    image: "assets/img/ho-minh-lee-vignette.png",
    description:
      "Choisis le chemin le plus court en cliquant sur le chemin qui a le moins de carré",
    genres: ["Voiture", "Choix", "Comptage"],
    lien: "https://h26-2j2.github.io/Tp1-volet-2/",
  },
  {
    auteur: "Véronika Vong",
    nom: "ChromaC",
    image: "",
    description:
      "Un nouveau scientifique de couleur doit étudier sur comment les couleurs se mélange. Le scientifique rentre dans son laboratoire pour apprendre sur les couleurs. Le supérieur du laboratoire donne différents objets de couleur au nouveau scientifique et laisse les effets des couleurs.",
    genres: ["Couleur", "exploration", "relaxe", "scientifique"],
    lien: "https://h26-2j2.github.io/vv_TravailPratique/",
  },
  {
    auteur: "Étienne Minville",
    nom: "Colorami",
    image: "",
    description:
      "Colorami est un jeu éducatif destiné aux enfants de 2 à 5 ans. Le jeu consiste à trier différentes formes dans leurs bacs de rangement appropriés en cliquant et glissant à l'aide de la souris. L'enfant est encouragé à continuer de mettre les efforts nécessaires pour accomplir la tâche sans pression.",
    genres: ["Éducatif", "Formes"],
    lien: "https://h26-2j2.github.io/Minville_Etienne_Colorami/",
  },
  {
    auteur: "Imane Mechali",
    nom: "Coul-mot",
    image: "assets/img/imane-mechali-vignette.png",
    description:
      "Retournez les poissons à leur famille ! Attrapez la bonne couleur de poisson grâce à l'hameçon pour le retourner à sa famille",
    genres: ["Correspondance", "couleurs", "Interactif"],
    lien: "Unity Web Player | TP1_Volet2",
  },
  {
    auteur: "Jad Razouani",
    nom: "Electro",
    image: "assets/img/razouani-jad-vignette.jpg",
    description:
      "Aligner des composantes éléctriques dans des circuits éléctriques.",
    genres: ["Électricité", "logique", "casse-tête"],
    lien: "https://h26-2j2.github.io/Razouani-Jad_TravailPratique",
  },
  {
    auteur: "Shen Dumas",
    nom: "Ferrallibra",
    image: "assets/img/dumas-shen-vignette.png",
    description:
      "Ferrallibra est un jeu éducatif destiné à un public de 8 ans dans lequel le joueur doit retrouver des animaux en cavale dans le but de les réahabiliter dans leurs habitats naturelles. S'inspirant du Gameplay de la licence pokemon, Ferrallibra reprend les codes du RPG classique dans un environnement joyeux et scientifiquement correct bien que romancé.",
    genres: ["Exploration", "Animaux", "RPG"],
    lien: "https://h26-2j2.github.io/ShenDumas_Tp1/?classId=6a032628-eccf-4887-8bd4-5f1e3256161f&assignmentId=dee04448-ff90-4a10-9507-4d91823238df&submissionId=e88bac1d-46e4-d567-a44f-4f478f2bbeec",
  },
  {
    auteur: "Nathaniel Ouellet",
    nom: "La Chasse aux Pommes",
    image: "assets/img/ouellet-nathaniel-vignette.webp",
    description:
      "La Chasse aux pommes est un jeu éducatif destiné aux enfants de 2 à 5 ans qui simule une sortie en famille dans un verger. L'enfant doit s'occuper de trouver, cueillir et laver les pommes.",
    genres: ["Découverte", "Coloré", "Motricité"],
    lien: "https://h26-2j2.github.io/OuelletNathaniel-TravailPratique/",
  },
  {
    auteur: "Cindy Phan",
    nom: "La saveur des fruits",
    image: "assets/img/tran-phan-cindy-vignette.webp",
    description:
      "La saveur des fruits est un jeu éducatif et de détente destiné à un public de 6 à 8 ans et sera déployée sur le web.",
    genres: ["Détente", "simulation de vie", "logique"],
    lien: "https://h26-2j2.github.io/PHAN_CINDY_TravailPratique/",
  },
  {
    auteur: "Nicolas Gavriliouk",
    nom: "Le Chaudron de Merlin",
    image: "",
    description:
      "Retrouvez les ingrédients manquants du chaudron de Merlin et maîtrisez la magie des multiplications ! Chaque ingrédient représente un nombre : combinez-les dans le chaudron pour créer de nouveaux matériaux et atteindre le nombre demandé à chaque niveau.",
    genres: ["Mathématiques / éducation / logique"],
    lien: "https://h26-2j2.github.io/Nicolas_Gavriliouk_h26-2j2_-Le_Chaudron_de_Merlin/",
  },
  {
    auteur: "Jaider Contreras",
    nom: "Le Fort de Thomas",
    image: "assets/img/contreras-jaider-vignette.png",
    description:
      "Jeu pour les enfants de 4 à 5 ans. Aidez Thomas à construire la maison de ses amis en prenant connaissance des outils de construction.",
    genres: ["Puzle", "créativité", "formes"],
    lien: "https://h26-2j2.github.io/ContrerasJaider_LeFortDeThomas/",
  },
  {
    auteur: "Arthur Vaccari Pereira",
    nom: "Le monstre affamée",
    image: "",
    description: "Nourrissez le monstre pour le rendre heureux.",
    genres: ["Éducatif", "Monstre", "Amusant"],
    lien: "https://h26-2j2.github.io/Arthur_Vaccari_TP/",
  },
  {
    auteur: "André Armendariz-Jasso",
    nom: "Le Repas de Ludo l'Alligator",
    image: "assets/img/jasso-andre-vignette.png",
    description: "Prepare le sandwich de Ludo!",
    genres: [
      "Jeu d'assemblage et de reconnaissance",
      "jeu de cuisine éducatif",
    ],
    lien: "https://h26-2j2.github.io/ARMENDARIZ-JASSO_ANDRE_TravailPratique/",
  },
  {
    auteur: "Angela Feng",
    nom: "Les Mathématiciens",
    image: "assets/img/feng-angela-vignette.jpg",
    description:
      "Les mathématiciens est un jeu éducatif destiné aux enfants 6 à 8. Le concept du jeu est d’aider les enfants à pratiquer leur math et développer leur vitesse de réflexion. Le joueur doit résoudre des mini opérations mathématiques pour avancer dans le jeu et gagner des points.",
    genres: ["Éducatif", "Casse-tête", "Logique"],
    lien: "https://h26-2j2.github.io/Feng_Angela_TravailPratique/",
  },
  {
    auteur: "Marianne Lemay",
    nom: "L'océan des lettres",
    image: "",
    description:
      "L'océan des lettres est un jeu éducatif destiné aux enfants de 6 à 8 ans dans lequel il faut placer des lettres données aléatoirement en ordre alphabétique.",
    genres: ["Coloré", "interactif", "alphabet", "océan", "tri."],
    lien: "https://h26-2j2.github.io/LEMAY_Marianne_TravailPratique/",
  },
  {
    auteur: "Angel Gabriel Medina Almonte",
    nom: "Math Shinobi",
    image: "assets/img/medina-almonte-angel-gabriel-vignette.webp",
    description:
      "Les mathématiciens est un jeu éducatif destiné aux enfants 6 à 8. Le concept du jeu est d’aider les enfants à pratiquer leur math et développer leur vitesse de réflexion. Le joueur doit résoudre des mini opérations mathématiques pour avancer dans le jeu et gagner des points.",
    genres: ["Math", "logique", "enfant"],
    lien: "https://h26-2j2.github.io/Medina-Almonte-Angel-Gabriel-tpVolet3/",
  },
  {
    auteur: "Mélyse Larissa Malo",
    nom: "Mon Petit Miaou",
    image: "assets/img/malo-mélyse-vignette.jpg",
    description:
      "Ludique tout en restant éducatif, Mon Petit Miaou offre la possibilité aux tout-petits (2 à 5 ans) d’apprendre à prendre soin d’un animal de compagnie à travers différentes actions.",
    genres: ["Simulation", "Exploration", "Ludique"],
    lien: "https://h26-2j2.github.io/MelyseMalo_TravailPratique/",
  },
  {
    auteur: "Marc-Alexandre Di Marco François",
    nom: "Nettoyer sa chambre",
    image: "assets/img/dimarco-francois-marc-alexandre-vignette.webp",
    description: "Aide tes parents à ramasser tes jouets dans ta chambre.",
    genres: ["Souris", "ménage", "motricité"],
    lien: "https://h26-2j2.github.io/DiMarcoFrancois_Marc-Alexandre_TravailPratique/",
  },
  {
    auteur: "Adriano Blaise",
    nom: "PixelMath",
    image: "",
    description:
      "PixelMath est un jeu éducatif voué à un public cible de 6 à 8 ans dans lequel le joueur doit répondre à plusieurs problèmes mathématiques en temps limité.",
    genres: [],
    lien: "https://h26-2j2.github.io/TP3/",
  },
  {
    auteur: "Brandon Ducheine",
    nom: "Quipro-Quoi?",
    image: "assets/img/ducheine-brandon-vignette.png",
    description:
      "Quipro-Quoi? est un jeu éducatif voué à un public cible de 6 à 8 ans à l'intérieur duquel le joueur doit trouver les éléments qui ne correspondent pas au thème de l'environnement.",
    genres: [],
    lien: "https://h26-2j2.github.io/Quipro-Quoi-/",
  },
  {
    auteur: "Izak Laberge",
    nom: "Raton Tout propre",
    image: "",
    description: "Aidez votre ami raton à trouver les dechets dans la ville.",
    genres: ["Cherche et trouve", "Animal", "Ménage"],
    lien: "",
  },
  {
    auteur: "Caleb Celestin",
    nom: "Trouve l'animal!",
    image: "assets/img/celestin-caleb-vignette.png",
    description:
      "Trouve l’animal ! est un jeu interactif avec des cartes d’animaux sur lesquelles il faudra cliquer lorsque la voix annoncera l’animal demandé.",
    genres: ["Réflexion / Éducatif / Puzzle"],
    lien: "https://h26-2j2.github.io/celestin-caleb_TravailPratique/",
  },
  {
    auteur: "Karl-Anthony Bastien-Bisson",
    nom: "Constructor",
    image: "",
    description:
      "Constructor: vous incarnez un castor qui traverse le monde, construit son chemin et détruit les structures sur son passage dans un univers fantastique.",
    genres: ["BAC À SABLE", "CASSE-TÊTE", "TACTIQUE"],
    lien: "https://h26-2j2.github.io/kbb_tp1/",
  },
  {
    auteur: "Théo Gilbert",
    nom: "Mille Marée",
    image: "",
    description: "vous devez attraper des poissons pour un aquarium.",
    genres: ["TACTIQUE", "CONCENTRATION", "GESTION"],
    lien: "https://h26-2j2.github.io/Gilbert_Théo_TP1/",
  },
  {
    auteur: "Alexandre Rémy",
    nom: "Insectissime! La Collection.",
    image: "",
    description:
      "Chenille apprend à compter. Fourmi s'oriente dans labyrinthe. Coccis Connect 4.",
    genres: ["Insectes", "Aventure", "Interactivité Souris-Clavier"],
    lien: "https://ialexandrem.github.io/2J2-Insectissime-LaCollection/",
  },
  {
    auteur: "Camila Tiemi Shiozuka Rezende",
    nom: "Mission Drapeaux",
    image: "",
    description:
      "Un jeu de memoire portant sur quelques drapeaux du monde. Ce jeu est destiné aux enfants (6-8 ans) afin de les aider à apprendre et reconnaitre différents drapeaux",
    genres: [
      "Mémoire",
      "drapeau",
      "monde",
      "géographie",
      "pays",
      "découverte et culture",
    ],
    lien: "https://h26-2j2.github.io/Shiozuka_Rezende_Camila_Tieimi_TP1_Remise2",
  },
  {
    auteur: "Rose Hins",
    nom: "Les Aventures des Petits Curieux",
    image: "",
    description:
      "Le but du jeu est d'aider les enfants à développer leur mémoire, les aider à observer et à compter. C'est un jeu pour les 6-8 ans.",
    genres: ["Éducatif", "Mémoire", "Apprendre"],
    lien: "https://h26-2j2.github.io/hins_rose_TravailPratique/",
  },
  {
    auteur: "Elie Kozaily",
    nom: "Ramassez-les tous",
    image: "",
    description:
      "Le but du jeu est d'aider les enfants de 6 à 8 ans à percevoir la différence entre les différents déchets (recyclable, compostable et jeter directement à la poubelle). Un jeu contenant 3 niveaux interatifs et amusants qui aideront les jeunes à desseler les différents typoes de bacs.",
    genres: [
      "Action / Jeu d’adresse / écologique / catastrophe naturelle / sensibilisation / éducatif",
    ],
    lien: "https://h26-2j2.github.io/KozailyElie_TravailPrartique/",
  },
  {
    auteur: "David Hwang",
    nom: "Bulles de jouets",
    image: "",
    description:
      "Un jeu de vise avec plusieurs niveaux de différents difficultés.",
    genres: [],
    lien: "https://h26-2j2.github.io/Hwang_David_TravailPratique/",
  },
  {
    auteur: "Matheo Sousa",
    nom: "Plomblime",
    image: "",
    description:
      "Un jeu de logique qui vise à stimuler leur cerveau. Utilisant seulement le méchanique glisser-déposer, le joueur completera différents tâches chaque niveau pour aider un petit slime.",
    genres: ["Casse-tête", "Logique"],

    lien: "https://h26-2j2.github.io/MatheoSousa_volet2/",
  },
];

function afficherJeux(jeu) {
  const fragmentJeux = document.importNode(template.content, true);
  const carteJeux = fragmentJeux.querySelector(".carte");

  const carteImage = carteJeux.querySelector(".image");
  const lienCarte = fragmentJeux.querySelector(".lien-carte");
  const carteNom = carteJeux.querySelector(".nom");
  const carteDescription = carteJeux.querySelector(".description");
  const carteGenre = carteJeux.querySelector(".genre");
  const carteAuteur = carteJeux.querySelector(".auteur");

  carteNom.textContent = jeu.nom;
  carteImage.src = jeu.image;
  carteDescription.textContent = jeu.description;
  carteGenre.textContent = jeu.genres.join(", ");
  carteAuteur.textContent = jeu.auteur;
  lienCarte.href = jeu.lien;

  if (jeu.image) {
    carteImage.src = jeu.image;
  } else {
    carteImage.src = "assets/img/SNES.png";
  }

  sectionJeux.appendChild(fragmentJeux);
}

function rechercherJeux() {
  const termeRecherche = champRecherche.value.trim().toLowerCase();
  const cartesJeux = document.querySelectorAll(".lien-carte");
  let nombreResultats = 0;

  cartesJeux.forEach((carte) => {
    const texteJeu = carte.textContent.toLowerCase();

    if (texteJeu.includes(termeRecherche)) {
      carte.classList.remove("est-cache");
      nombreResultats++;
    } else {
      carte.classList.add("est-cache");
    }
  });

  if (nombreResultats === 0) {
    messageResultat.classList.remove("est-cache");
  } else {
    messageResultat.classList.add("est-cache");
  }
}

jeux.forEach((jeu) => {
  afficherJeux(jeu);
});

champRecherche.addEventListener("input", () => {
  document.startViewTransition(() => {
    rechercherJeux();
  });
});

formRecherche.addEventListener("reset", () => {
  const cartes = document.querySelectorAll(".carte");
  cartes.forEach((carte) => {
    carte.classList.remove("est-cache");
  });

  messageResultat.classList.add("est-cache");
});

const ecranTitre = document.querySelector(".ecran-titre ");

window.addEventListener("animationend", (event) => {
  ecranTitre.classList.add("cache");
});
