const myRoutine = {
  id: "e236f6f6-d558-4cfd-83de-f3b4a7e9aee8",
  image:
    "https://www.triatlonnoticias.com/wp-content/uploads/2021/01/img_5ff01edf0f1f8.jpg.webp",
  title: "Rutina de fuerza y alta intensidad",
  owner: "8337e07b-0f36-4a91-aad6-35b33194b651",
  price: 55,
  disabled: false,
  description: "Rutina muy intensa para conseguir resultados en poco tiempo.",
};
const owner = {
  id: "8337e07b-0f36-4a91-aad6-35b33194b651",
  username: "Gera",
  email: "asd@outlook.com",
  profile_img: "https://images.hdqwalls.com/wallpapers/goku-beast-4k-69.jpg",
  is_personal_trainer: true,
  is_nutritionist: false,
  //accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4MzM3ZTA3Yi0wZjM2LTRhOTEtYWFkNi0zNWIzMzE5NGI2NTEiLCJyb2xlIjoiUFRyYWluZXIiLCJpYXQiOjE2NDY0MDE5MzAsImV4cCI6MTY0NjQ4ODMzMH0.pNnEdWHx9IkljL-f7bJeH8qQcJau-GDs8KVxvgl9CTk"
};
const Reviews = [
  {
    id: "9937e07b-0f36-4a91-aad6-35b33194b651",
    userId: null,
    productId: "e236f6f6-d558-4cfd-83de-f3b4a7e9aee8",
    points: 5,
    comments: "Muy buena rutina",
  },
  {
    id: "9837e07b-0f36-4a91-aad6-35b33194b651",
    userId: null,
    productId: "e236f6f6-d558-4cfd-83de-f3b4a7e9aee8",
    points: 2,
    comments: "No me gustó mucho, muy intensa",
  },
];

const exercises = [
  {
    id: "9837e07b-0f36-4a91-aad6-35b33194b100",
    title: "Sentadillas",
    description: "Trabaja cuadriceps, posteriores y muslos",
    video: "https://youtube.com/shorts/906nQ0SRboU?feature=share",
    image:
      "https://aprende.com/wp-content/uploads/2021/08/tipos-de-sentadillas-infografia.jpg",
    disabled: false,
  },

  {
    id: "9837e07b-0f36-4a91-aad6-35b33194b101",
    title: "Skipping",
    description: "Pefecto para incluir intensidad en las rutinas de salto",
    video: "https://youtube.com/shorts/ZZBcHArI58g?feature=share",
    image:
      "https://rufforosa.com.br/wp-content/uploads/2017/07/exercicio-power-skipping.png",
    disabled: false,
  },

  {
    id: "9837e07b-0f36-4a91-aad6-35b33194b102",
    title: "Flexiones",
    description: "Trabajo de pectorales, triceps y espalda",
    video: "https://youtube.com/shorts/cgkCzgE6tZg?feature=share",
    image: "https://i.imgur.com/oT4Uufo.jpg",
    disabled: false,
  },
];

export { myRoutine, owner, Reviews, exercises };
