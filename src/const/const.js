export const studies = [
  {
    title: "Master's degree in Image, Development, and 3D Technology",
    corporation: "Université claude bernard Lyon 1",
    date: "09/2021 – 06/2023",
  },
  {
    title: "DUT in Computer Science",
    corporation: "Université claude bernard Lyon 1",
    date: "09/2020 – 06/2021",
  },
  {
    title: "IUT Informatique",
    corporation: "Université claude bernard Lyon 1",
    date: "09/2018 – 06/2020",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  git: "git",
  github: "github",
  unity: "unity",
  blender: "blender",
  openxr: "openxr",
  vscode: "vscode",
  // here add more icon keys
};

export const skills = [

  {
    title: "Unity",
    icon: IconKeys.unity,
  },
  {
    title: "OpenXR",
    icon: IconKeys.openxr,
  },

  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Blender",
    icon: IconKeys.blender,
  },
  {
    title: "VS Code",
    icon: IconKeys.vscode,
  },

];

export const projects = [
  {
    img: "../../../img/RENFORCE.webp", /*TODO change Image*/
    title: "RENFORCE",
    link: "https://github.com/MrPicadilli/Job-Showcase",/*TODO put a system where on click make a new sort of page describing the project*/
    description: `A virtual reality serious game featuring a digital twin of a chemistry laboratory, where users engage in interactive activities related to pH.`,
    technologies: [
      {
        icon: IconKeys.unity,
      },
      {
        icon: IconKeys.openxr,
      },
      {
        icon: IconKeys.vscode,
      },
      {
        icon: IconKeys.git,
      },
      {
        icon: IconKeys.blender,
      },
    ],
  },
  {
    img: "../../../img/Soup.webp", /*TODO change Image*/
    title: "Soup",
    link: "https://github.com/MrPicadilli/Soup",/*TODO put a system where on click make a new sort of page describing the project*/
    description: `Cozy Games in 3D where you play as a soup enthusiast determined to share their passion with the entire village.`,
    technologies: [
      {
        icon: IconKeys.unity,
      },
      {
        icon: IconKeys.vscode,
      },
      {
        icon: IconKeys.git,
      },
      {
        icon: IconKeys.blender,
      },
    ],
  },
  {
    img: "../../../img/DALLE_BlindSamurai.webp", /*TODO change Image*/
    title: "BlindSamuraï",
    link: "https://github.com/MrPicadilli/Personnal-Project-Showcase/blob/main/Projects/BlindSamoura%C3%AF.md",/*TODO put a system where on click make a new sort of page describing the project*/
    description: `An action-packed virtual reality game focused on sound, challenging the player's reflexes and concentration.`,
    technologies: [
      {
        icon: IconKeys.unity,
      },
      {
        icon: IconKeys.openxr,
      },
      {
        icon: IconKeys.vscode,
      },
      {
        icon: IconKeys.git,
      },
      {
        icon: IconKeys.blender,
      },
    ],
  },


];
