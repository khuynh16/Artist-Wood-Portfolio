const ArtworksData = [
  {
    name: "Beginning-Ending",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/beginning-ending.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/beginning-ending.jpg"),
        isCategoryPic: true,
      },
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/1.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/1.jpg"),
        isCategoryPic: false,
      },
    ],
  },
  {
    name: "Bud",
    year: "2022.",
    medium: "Wood.",
    dimension: '50" x 100".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/Bud.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Bud.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "Forma",
    year: "2022.",
    medium: "Wood.",
    dimension: '18" x 24".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/forma.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/forma.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "How?",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/how.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/how.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "Where?",
    year: "2022.",
    medium: "Wood.",
    dimension: '20" x 24".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/where.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/where.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "What?",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/what.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/what.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "Why?",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',

    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/why.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/why.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "Reminiscence",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/reminiscence.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/reminiscence.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "Harmonizing",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',

    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/harmonizing.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/harmonizing.jpg"),
        isCategoryPic: true,
      },
    ],
  },
  {
    name: "Ordinary, Yet Original",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',
    collectionOfPics: [
      {
        url: require("../../Assets/Images/ArtImages/Thumbnails/ordinary-yet-original.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/ordinary-yet-original.jpg"),
        isCategoryPic: true,
      },
    ],
  },

  // BEGINNING-ENDING GALLERY PICTURES
];

const justPictures = [];

// logic that takes the above array of gallery image data and just includes the image objects
ArtworksData.map((artwork) =>
  artwork.collectionOfPics.map((currentPicture, i) => {
    console.log(artwork.year);
    currentPicture["name"] = artwork.name;
    currentPicture["year"] = artwork.year;
    currentPicture["medium"] = artwork.medium;
    currentPicture["dimension"] = artwork.dimension;
    justPictures.push(currentPicture);
  })
);

export default justPictures;
