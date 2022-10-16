const ArtworksData = [
  {
    name: "Beginning-Ending",
    year: "2022.",
    medium: "Wood.",
    dimension: '40" x 80".',
    collectionOfPics: [
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Beginning-Ending/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Beginning-Ending/categoryPic.jpg"),
        isCategoryPic: true,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Beginning-Ending/1.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Beginning-Ending/1.jpg"),
        isCategoryPic: false,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Beginning-Ending/2.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Beginning-Ending/2.jpg"),
        isCategoryPic: false,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Beginning-Ending/3.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Beginning-Ending/3.jpg"),
        isCategoryPic: false,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Beginning-Ending/4.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Beginning-Ending/4.jpg"),
        isCategoryPic: false,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Beginning-Ending/5.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Beginning-Ending/5.jpg"),
        isCategoryPic: false,
      },
      // {
      //   thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Beginning-Ending/5.jpg"),
      //   original: "https://vimeo.com/731738424",
      //   isCategoryPic: false,
      // },
    ],
  },
  {
    name: "Bud",
    year: "2022.",
    medium: "Wood.",
    dimension: '50" x 100".',
    collectionOfPics: [
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Bud/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Bud/categoryPic.jpg"),
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Forma/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Forma/categoryPic.jpg"),
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/How/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/How/categoryPic.jpg"),
        isCategoryPic: true,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/How/1.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/How/1.jpg"),
        isCategoryPic: false,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/How/2.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/How/2.jpg"),
        isCategoryPic: false,
      },
      {
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/How/3.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/How/3.jpg"),
        isCategoryPic: false,
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Where/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Where/categoryPic.jpg"),
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/What/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/What/categoryPic.jpg"),
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Why/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Why/categoryPic.jpg"),
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Reminiscence/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Reminiscence/categoryPic.jpg"),
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/Harmonizing/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/Harmonizing/categoryPic.jpg"),
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
        thumbnail: require("../../Assets/Images/ArtImages/Thumbnails/OrdinaryYetOriginal/categoryPic.jpg"),
        original: require("../../Assets/Images/ArtImages/Originals/OrdinaryYetOriginal/categoryPic.jpg"),
        isCategoryPic: true,
      },
    ],
  },

  // BEGINNING-ENDING GALLERY PICTURES
];

const justPictures = [];

// logic that takes the above array of gallery image data and just includes the image objects
ArtworksData.map((artwork) =>
  artwork.collectionOfPics.forEach((currentPicture, i) => {
    currentPicture["name"] = artwork.name;
    currentPicture["year"] = artwork.year;
    currentPicture["medium"] = artwork.medium;
    currentPicture["dimension"] = artwork.dimension;
    justPictures.push(currentPicture);
  })
);

export default justPictures;
