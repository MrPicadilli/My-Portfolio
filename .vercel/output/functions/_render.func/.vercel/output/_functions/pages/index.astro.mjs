import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as addAttribute, e as renderComponent, f as renderHead } from '../chunks/astro/server_D01hsk84.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_CY769e0a.mjs';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <h1 id="home">Portfolio</h1> <nav class="nav"> <ul class="ul-nav"> <a href="#home"> <li class="li-nav">Home</li> </a> <a href="#proyectos"> <li class="li-nav">Projects</li> </a> <a href="#skills"> <li class="li-nav">Skills</li> </a> <a href="#education"> <li class="li-nav">Education</li> </a> <a href="#aboutme"> <li class="li-nav">About me</li> </a> <a href="#contact"> <li class="li-nav">Contact</li> </a> </ul> </nav> <div class="container-bnt-menu"> <div class="btn-menu"> <span class="linea-menu" id="linea1"></span> <span class="linea-menu" id="linea2"></span> <span class="linea-menu" id="linea3"></span> </div> </div> <div class="menu-drop"></div>  </header> `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/header/Header.astro", void 0);

const studies = [
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

const IconKeys = {
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

const skills = [

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

const projects = [
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

const $$IconAstro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg> </i>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconAstro.astro", void 0);

const $$IconHtml = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg> </i>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconHtml.astro", void 0);

const $$IconCss = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg> </i>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconCss.astro", void 0);

const $$IconReact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 228" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg> </i>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconReact.astro", void 0);

const $$IconGit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="45px" height="45px"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg> </i>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconGit.astro", void 0);

const $$IconGtiHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 250" width="45" height="45" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg> </i>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconGtiHub.astro", void 0);

const $$IconUnity = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="45px" height="45px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"> <title>Unity</title> <path d="M482.333 358.4V119.467L275.399 0v91.733l81.068 46.934c3.2 2.132 3.2 6.4 0 7.467l-96 55.467c-3.2 2.132-6.4 1.066-8.534 0l-96-55.467c-3.2-1.067-3.2-6.4 0-7.467L237 91.733V0L29 119.467V358.4v-1.067 1.067l78.933-45.867v-93.867c0-3.2 4.267-5.332 6.4-4.266l96 55.467c3.2 2.133 4.267 4.267 4.267 7.467v110.932c0 3.2-4.267 5.335-6.4 4.267L127.134 345.6 48.2 391.467 255.133 512l206.934-119.467-78.934-45.867-81.066 46.935c-3.2 2.132-6.4 0-6.4-4.268V278.4c0-3.2 2.132-6.4 4.266-7.467l96.001-55.467c3.199-2.132 6.399 0 6.399 4.267V313.6l80 44.8z" fill="#4c4c4c" fill-rule="nonzero"></path><path d="M255.133 512l206.934-119.467-78.934-45.867-81.066 46.935c-3.2 2.132-6.4 0-6.4-4.268V278.4c0-3.2 2.132-6.4 4.266-7.467l96.001-55.467c3.199-2.132 6.399 0 6.399 4.267V313.6l78.933 45.867v-240l-226.133 131.2V512z" fill-rule="nonzero"></path><path d="M275.4 0v91.733l81.067 46.934c3.2 2.132 3.2 6.4 0 7.467l-96 55.467c-3.2 2.132-6.4 1.066-8.534 0l-96-55.467c-3.2-1.067-3.2-6.4 0-7.467L237 91.733V0L29 119.467l226.133 131.2 226.133-131.2L275.4 0z" fill="gray" fill-rule="nonzero"></path><path d="M209.267 393.6l-81.068-46.934-78.933 45.867L256.2 512V250.667L29 119.467V358.4v-1.067 1.067l78.933-45.867v-93.867c0-3.2 4.267-5.332 6.4-4.266l96 55.467c3.2 2.133 4.267 4.267 4.267 7.467v110.932c1.067 4.267-2.133 7.467-5.333 5.335z" fill="#4c4c4c" fill-rule="nonzero"></path> </svg>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconUnity.astro", void 0);

const $$IconBlender = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="45px" height="45px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.77 405.98"> <defs><style>.cls-1{fill:#fff;}.cls-2{fill:#265787;}.cls-3{fill:#ea7600;}</style></defs> <title>blender</title> <path class="cls-1" d="M196.49,225.35c1.82-32.49,17.73-61.11,41.73-81.4,23.54-19.92,55.22-32.1,89.78-32.1S394.21,124,417.77,144c24,20.29,39.89,48.91,41.73,81.37,1.82,33.38-11.6,64.39-35.14,87.37-24,23.38-58.13,38.06-96.36,38.06s-72.43-14.68-96.41-38.06C208,289.71,194.66,258.7,196.49,225.35Z"></path><path class="cls-2" d="M260.53,228.27c.93-16.67,9.1-31.36,21.41-41.77a72.65,72.65,0,0,1,92.13,0c12.3,10.41,20.47,25.1,21.41,41.75.93,17.13-6,33-18,44.83-12.31,12-29.83,19.53-49.44,19.53s-37.16-7.53-49.47-19.53C266.45,261.29,259.59,245.38,260.53,228.27Z"></path><path class="cls-3" d="M153.08,262c.11,6.52,2.19,19.2,5.31,29.1a153.58,153.58,0,0,0,33.16,57.42,171.34,171.34,0,0,0,58,41.67A189.71,189.71,0,0,0,402,389.88,172.65,172.65,0,0,0,460,348a154.79,154.79,0,0,0,33.15-57.53,145.39,145.39,0,0,0,6.24-32.11,146.87,146.87,0,0,0-1-31.9,148.49,148.49,0,0,0-21.15-57.87,161.49,161.49,0,0,0-38.58-42.53l0,0L282.5,6.2c-.14-.11-.26-.22-.41-.32-10.24-7.86-27.47-7.83-38.73,0s-12.69,21.14-2.56,29.46l0,0,65.11,53-198.46.21h-.27C90.74,88.61,75,99.37,71.85,113c-3.21,13.86,7.93,25.36,25,25.42l0,.06,100.6-.19L17.9,276l-.69.51C.28,289.52-5.2,311.08,5.47,324.73c10.82,13.87,33.84,13.9,51,.08l98-80.18A152.15,152.15,0,0,0,153.08,262ZM404.82,298.2c-20.18,20.56-48.44,32.22-79,32.28s-58.89-11.5-79.07-32a93.92,93.92,0,0,1-21.58-33.78,87.69,87.69,0,0,1-5-37.74A89.11,89.11,0,0,1,231,191.39a98,98,0,0,1,24-28.55c19.62-16,44.6-24.65,70.73-24.68s51.12,8.54,70.76,24.48a97.5,97.5,0,0,1,24,28.46,89.19,89.19,0,0,1,10.86,35.52,87.81,87.81,0,0,1-5,37.72A94.33,94.33,0,0,1,404.82,298.2Z"></path> </svg>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconBlender.astro", void 0);

const $$IconOpenXR = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" encoding="UTF-8"?-->${maybeRenderHead()}<svg version="1.1" width="45px" height="45px" viewBox="0 0 1238 363.6" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><title>OpenXR logo</title><desc>An open standard for virtual reality by Khronos Group</desc><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type><dc:title></dc:title></cc:Work></rdf:RDF></metadata> <g id="vlpa" transform="translate(-94.78 -70.16)"> <path d="m281 243.7c4.2-12.8 10.5-24.1 18.8-34 8.4-9.8 18.8-17.7 31.2-23.6 12.5-5.9 27-8.8 43.5-8.8s31 2.9 43.5 8.8 22.9 13.7 31.2 23.6c8.4 9.8 14.6 21.2 18.8 34s6.3 26.1 6.3 39.9-2.1 27.1-6.3 39.9-10.5 24.1-18.8 34c-8.4 9.8-18.8 17.7-31.2 23.4-12.5 5.8-27 8.7-43.5 8.7s-31-2.9-43.5-8.7-22.9-13.6-31.2-23.4c-8.4-9.9-14.6-21.2-18.8-34s-6.3-26.1-6.3-39.9 2.1-27.1 6.3-39.9zm25.5 70.3c2.7 10 7 18.9 12.9 26.9 5.8 8 13.3 14.4 22.5 19.2s20.1 7.2 32.7 7.2c12.7 0 23.6-2.4 32.7-7.2 9.2-4.8 16.7-11.2 22.5-19.2s10.1-16.9 12.9-26.9c2.7-10 4.1-20.1 4.1-30.3s-1.4-20.3-4.1-30.3-7-18.9-12.9-26.9c-5.8-8-13.4-14.4-22.5-19.2-9.2-4.8-20.1-7.3-32.7-7.3-12.7 0-23.6 2.4-32.7 7.3-9.2 4.8-16.7 11.2-22.5 19.2s-10.1 16.9-12.9 26.9c-2.7 10-4.1 20-4.1 30.3s1.3 20.3 4.1 30.3z" fill="#782d8e"></path> <g fill="#782d8e"> <path d="m493.8 256.9h21v17.3h0.5c3.5-7.1 8.9-12.3 16.3-15.5s15.6-4.8 24.5-4.8c9.9 0 18.5 1.8 25.9 5.4 7.3 3.6 13.4 8.5 18.3 14.7s8.5 13.3 11 21.4 3.7 16.7 3.7 25.7c0 9.1-1.2 17.7-3.6 25.7-2.4 8.1-6 15.1-10.9 21.2-4.9 6-11 10.8-18.3 14.4-7.3 3.5-15.9 5.3-25.6 5.3-3.3 0-6.9-0.3-10.6-1-3.8-0.7-7.6-1.8-11.4-3.3-3.8-1.6-7.4-3.6-10.8-6.2s-6.2-5.7-8.5-9.5h-0.5v66.1h-21zm99.1 62.9c0-5.9-0.8-11.8-2.4-17.4-1.6-5.7-4-10.8-7.2-15.2-3.2-4.5-7.3-8-12.4-10.6-5-2.6-10.9-4-17.7-4-7.1 0-13.1 1.4-18.1 4.2s-9 6.5-12.1 11-5.4 9.7-6.8 15.5-2.1 11.6-2.1 17.6c0 6.3 0.7 12.3 2.2 18.2s3.8 11 7.1 15.5c3.2 4.5 7.4 8 12.5 10.8 5.1 2.7 11.3 4.1 18.6 4.1 7.1 0 13.1-1.4 18.1-4.2s8.9-6.5 11.9-11.1 5.1-9.9 6.4-15.8c1.3-6.2 2-12.3 2-18.6z"></path> <path d="m746.6 344.3c-2.8 14.2-9 25-18.6 32.4s-21.7 11.1-36.2 11.1c-10.3 0-19.1-1.7-26.7-5.1-7.5-3.4-13.9-8-19-14-5.1-5.9-9-13-11.5-21.3-2.6-8.3-4-17.2-4.3-27 0-9.6 1.5-18.4 4.5-26.6s7.1-15.2 12.5-21.2c5.4-5.9 11.7-10.6 19.1-13.9 7.3-3.3 15.4-5 24.1-5 11.4 0 20.8 2.4 28.3 7.1s13.5 10.7 18.1 17.9c4.5 7.3 7.7 15.2 9.4 23.8s2.4 16.8 2.1 24.5h-95.8c-0.2 5.6 0.5 10.9 2 16 1.5 5 3.9 9.5 7.2 13.4s7.5 7 12.6 9.3 11.1 3.5 18.1 3.5c8.7 0 16-2.1 21.8-6.2s9.6-10.4 11.4-18.8h20.9zm-20.5-35.6c-0.3-5-1.4-9.7-3.3-14.1-1.9-4.5-4.5-8.3-7.7-11.5s-7.1-5.8-11.5-7.7c-4.5-1.9-9.2-2.8-14.4-2.8-5.4 0-10.4 1-14.7 2.8-4.4 1.9-8.1 4.5-11.3 7.8-3.1 3.3-5.6 7.1-7.4 11.5s-2.9 9-3.2 14z"></path> <path d="m768.6 256.9h19.8v20.3h0.5c4.5-7.9 10.2-13.8 17.2-17.6s15.1-5.7 24.4-5.7c8.4 0 15.4 1.2 21 3.5s10.1 5.5 13.6 9.7c3.5 4.1 5.9 9 7.3 14.7s2.1 12 2.1 18.9v84.2h-21v-86.6c0-7.9-2.3-14.2-6.9-18.8s-11-6.9-19.1-6.9c-6.4 0-12 1-16.7 3s-8.6 4.8-11.8 8.4c-3.1 3.6-5.5 7.9-7.1 12.7-1.6 4.9-2.4 10.2-2.4 16v72.3h-21v-128.1z"></path> <path d="m1090 181.9h109.5c9.1 0 17.3 1.5 24.6 4.4s13.6 7 18.8 12.1 9.2 11.1 11.9 17.9 4.1 14 4.1 21.6c0 11.9-2.5 22.3-7.5 31s-13.2 15.4-24.6 19.9v0.6c5.5 1.5 10 3.8 13.7 7 3.6 3.1 6.5 6.9 8.8 11.2 2.3 4.4 3.9 9.1 5 14.1 1 5 1.8 10.1 2.1 15.2 0.2 3.2 0.4 7 0.6 11.4s0.5 8.8 1 13.2c0.5 4.5 1.2 8.8 2.3 12.9 1 4.2 2.6 7.7 4.7 10.5h-44.6c-1.3-3.2-2.3-6.8-3-10.7s-1.2-8-1.7-12.2c-0.5-4.3-0.9-8.6-1.1-13.1-0.3-4.5-0.7-8.7-1.3-12.7-1.5-10.6-4.7-18.4-9.7-23.3-4.9-4.9-13-7.4-24.2-7.4h-44.6v79.3h-44.6v-202.9zm44.7 91.9h48.9c10 0 17.7-2.3 22.9-6.8s7.8-11.9 7.8-22.2c0-9.9-2.6-17-7.8-21.5s-12.8-6.7-22.9-6.7h-48.9z"></path> </g><g fill="#782d8e"> <path d="m225.7 249.9c26.3-93.1 212.4-137.5 415.7-99.2 122 23 216 74.3 286.9 122.6-53.1-77.4-187.3-169.1-373.3-194.4-222.2-30.3-437.1 20.3-458.5 118.5-15.4 71 74.4 147.9 209.2 196.2-61.8-44-93.6-95.6-80-143.7z"></path> <polygon points="955 288.8 887.9 384.9 938.3 384.9 983.5 318 1028 384.9 1081 384.9 1014 288.8"></polygon> <path d="m973 273.7h40.7l61.7-91.8h-48.9l-40.6 63.9c-64.9-92.2-160.3-129.2-245.8-141.5 99.2 41.2 176.1 104 215 169.4z"></path> </g><g transform="translate(-2.761)" fill="#782d8e"> <polygon points="1281 360.1 1302 360.1 1302 365.7 1295 365.7 1295 385 1288 385 1288 365.7 1281 365.7"></polygon> <polygon points="1333 385 1327 385 1327 366.1 1322 385 1317 385 1311 366.1 1311 366.1 1311 385 1305 385 1305 360.1 1315 360.1 1319 376.7 1319 376.7 1323 360.1 1333 360.1"></polygon> </g> </g> </svg>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconOpenXR.astro", void 0);

const $$IconVsCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml 
version="1.0" 
encoding="utf-8"?-->${maybeRenderHead()}<svg width="45px" height="45px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256" xml:space="preserve"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;filter:url(#Adobe_OpacityMaskFilter);} 
.st1{mask:url(#mask0_1_);} .st2{fill:#0065A9;} .st3{fill:#007ACC;} .st4{fill:#1F9CF0;} .st5{opacity:0.25;} .st6{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}
</style> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-0.16" y="0.66" width="256.16" height="254.68"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter> </defs> <mask maskUnits="userSpaceOnUse" x="-0.16" y="0.66" width="256.16" height="254.68" id="mask0_1_"> <path class="st0" d="M181.53,254.25c4.03,1.57,8.63,1.47,12.7-0.49l52.71-25.36c5.54-2.66,9.06-8.27,9.06-14.42V42.02 c0-6.15-3.52-11.75-9.06-14.42L194.23,2.24c-5.34-2.57-11.59-1.94-16.28,1.47c-0.67,0.49-1.31,1.03-1.91,1.63L75.15,97.39 L31.2,64.02c-4.09-3.11-9.81-2.85-13.61,0.61L3.49,77.45c-4.65,4.23-4.65,11.54-0.01,15.77L41.59,128L3.48,162.77 c-4.64,4.24-4.64,11.55,0.01,15.78l14.1,12.82c3.8,3.46,9.52,3.71,13.61,0.61l43.95-33.36l100.9,92.05 C177.65,252.26,179.52,253.47,181.53,254.25z M192.04,69.89L115.48,128l76.56,58.12V69.89z"></path></mask><g class="st1"><path class="st2" d="M246.94,27.64l-52.75-25.4c-6.1-2.94-13.4-1.7-18.19,3.09L3.32,162.77c-4.64,4.24-4.64,11.55,0.01,15.78 l14.1,12.82c3.8,3.46,9.53,3.71,13.62,0.61L239,34.23c6.98-5.29,17-0.32,17,8.44v-0.61C256,35.91,252.48,30.3,246.94,27.64z"></path><g><path class="st3" d="M246.94,228.36l-52.75,25.4c-6.1,2.94-13.4,1.7-18.19-3.09L3.32,93.23c-4.64-4.23-4.64-11.55,0.01-15.77 l14.1-12.82c3.8-3.46,9.53-3.71,13.62-0.61L239,221.77c6.98,5.29,17,0.32,17-8.44v0.61C256,220.09,252.48,225.7,246.94,228.36z"></path></g><g><path class="st4" d="M194.2,253.76c-6.11,2.94-13.4,1.7-18.2-3.1c5.9,5.9,16,1.72,16-6.63V11.96c0-8.35-10.1-12.53-16-6.63 c4.79-4.79,12.09-6.03,18.2-3.1l52.74,25.36c5.54,2.67,9.07,8.27,9.07,14.42v171.97c0,6.15-3.52,11.75-9.07,14.42L194.2,253.76z"></path></g><g class="st5"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="127.8439" y1="257.34" x2="127.8439" y2="2.6598" gradientTransform="matrix(1 0 0 -1 0 258)"><stop offset="0" style="stop-color:#FFFFFF"></stop><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"></stop></linearGradient><path class="st6" d="M181.38,254.25c4.03,1.57,8.63,1.47,12.7-0.49l52.71-25.36c5.54-2.66,9.06-8.27,9.06-14.42V42.02 c0-6.15-3.52-11.75-9.06-14.42L194.08,2.24c-5.34-2.57-11.59-1.94-16.28,1.47c-0.67,0.49-1.31,1.03-1.91,1.63L74.99,97.39 L31.04,64.02c-4.09-3.11-9.81-2.85-13.61,0.61L3.33,77.45c-4.65,4.23-4.65,11.54-0.01,15.78L41.44,128L3.32,162.77 c-4.64,4.24-4.64,11.55,0.01,15.78l14.1,12.82c3.8,3.46,9.52,3.71,13.61,0.61l43.95-33.36l100.9,92.05 C177.49,252.26,179.36,253.47,181.38,254.25z M191.88,69.89L115.32,128l76.56,58.12V69.89z"></path> </g></g></svg>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconVsCode.astro", void 0);

const $$Astro$2 = createAstro();
const ICONS = {
  html: $$IconHtml,
  css: $$IconCss,
  react: $$IconReact,
  astro: $$IconAstro,
  git: $$IconGit,
  github: $$IconGtiHub,
  unity: $$IconUnity,
  blender: $$IconBlender,
  openxr: $$IconOpenXR,
  vscode: $$IconVsCode
  // add new icons here <--
  // Make sure that when calling the icon the key is the same
  // "optional" in the IconKeys const file adds the icon key for when you call IconKeys.nameIcon
  //you can go to https://simpleicons.org/ or https://www.flaticon.com/ or https://uxwing.com/ for color and dl or just copy the code of the svg then create a new file and insert the code 
};
function getIconComponent(iconName) {
  return ICONS[iconName] || null;
}
const $$IconAll = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IconAll;
  return renderTemplate``;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/icons/IconAll.astro", void 0);

const $$Astro$1 = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Project;
  const { technologies, title, img, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="li-project" data-astro-cid-zokcuhmf> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-zokcuhmf> <p class="title-project" data-astro-cid-zokcuhmf>${title}</p> <p class="description-project" data-astro-cid-zokcuhmf> ${description} </p> <p class="title-technologies" data-astro-cid-zokcuhmf>technology used</p> <div class="container-technologies" data-astro-cid-zokcuhmf> ${technologies.map(({ icon }) => {
    const IconComponent = getIconComponent(icon);
    return renderTemplate`<i data-astro-cid-zokcuhmf>${IconComponent && renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { "data-astro-cid-zokcuhmf": true })}`}</i>`;
  })} </div> <div class="container-link-project" data-astro-cid-zokcuhmf> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-zokcuhmf>See more</a> </div> </li> `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/main/projects/Project.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-projects" data-astro-cid-pmnxldje> <div class="linear-grandient-1" data-astro-cid-pmnxldje></div> <div class="container-projects" data-astro-cid-pmnxldje> <h2 class="title-projects" id="proyectos" data-astro-cid-pmnxldje>Projects</h2> <div data-astro-cid-pmnxldje> <ul class="ul-projects" data-astro-cid-pmnxldje> ${projects.map(({ description, img, link, technologies, title }) => renderTemplate`${renderComponent($$result, "Project", $$Project, { "img": img, "description": description, "link": link, "title": title, "technologies": technologies, "data-astro-cid-pmnxldje": true })}`)} </ul> </div> </div> </section> `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/main/projects/Projects.astro", void 0);

const $$Studies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section_studies" data-astro-cid-iiherd3g> <div class="linear-grandient-1" data-astro-cid-iiherd3g></div> <div class="content_studies" data-astro-cid-iiherd3g> <h3 class="title-studies" id="education" data-astro-cid-iiherd3g>Education</h3> <ul class="ul-studies" data-astro-cid-iiherd3g> ${studies.map(({ date, title, corporation }) => renderTemplate`<li class="li-studies" data-astro-cid-iiherd3g> <span class="circle" data-astro-cid-iiherd3g></span> <div data-astro-cid-iiherd3g> <h3 data-astro-cid-iiherd3g>${title}</h3> <p data-astro-cid-iiherd3g>${corporation}</p> <span data-astro-cid-iiherd3g>${date}</span> </div> </li>`)} </ul> </div> </section> `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/main/studies/Studies.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-about" data-astro-cid-s7v3hz27> <div class="linear-grandient-1" data-astro-cid-s7v3hz27></div> <div class="container-about" data-astro-cid-s7v3hz27> <div class="container-text-about" data-astro-cid-s7v3hz27> <h2 class="title-about" id="aboutme" data-astro-cid-s7v3hz27>About me</h2> <p data-astro-cid-s7v3hz27>
I am a professional in real-time 3D software development, specialized in virtual reality development.
        Since the beginning of my studies in programming, I discovered my passion for creating games and utility applications, particularly those that incorporate complex 3D concepts (3D modeling, VR, procedural generation, etc.).<br data-astro-cid-s7v3hz27><br data-astro-cid-s7v3hz27>
Every day, I dedicate myself to learning and practicing new technologies to refine my skills.
        I consider myself a responsible, dynamic person with a great ability to adapt, always striving for improvement.<br data-astro-cid-s7v3hz27><br data-astro-cid-s7v3hz27>
I take the initiative to solve technical problems, and my goal is to create increasingly immersive applications where users can experience intense sensations.
        In the future, I plan to expand my knowledge and master a wider range of tools and techniques in 3D development, including 3D modeling and shader creation.
</p> </div> <div class="container-svg-about" data-astro-cid-s7v3hz27> <div class="container-svg" data-astro-cid-s7v3hz27> ${renderComponent($$result, "lottie-player", "lottie-player", { "src": "https://assets8.lottiefiles.com/packages/lf20_sg18igu8.json", "background": "transparent", "speed": "1", "style": "width: 380px; height: 380px; position:relative;", "loop": true, "autoplay": true, "data-astro-cid-s7v3hz27": true })} </div> </div> </div> </section>  `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/main/about/About.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-skill" data-astro-cid-y3b77nrg> <div class="linear-grandient-1" data-astro-cid-y3b77nrg></div> <div class="container-skill" data-astro-cid-y3b77nrg> <h2 class="title-skills" id="skills" data-astro-cid-y3b77nrg>Skills</h2> <ul class="ul-skill" data-astro-cid-y3b77nrg> ${skills.map(({ icon, title }) => {
    const IconComponent = getIconComponent(icon);
    return renderTemplate`<li class="li-skills" data-astro-cid-y3b77nrg> ${IconComponent && renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { "data-astro-cid-y3b77nrg": true })}`} <p class="p-skill" data-astro-cid-y3b77nrg>${title}</p> </li>`;
  })} </ul> </div> </section> `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/main/skills/Skills.astro", void 0);

const photoperfil = new Proxy({"src":"/_astro/Florent.C96NGvaR.webp","width":1700,"height":1700,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/public/img/Florent.webp";
							}
							
							return target[name];
						}
					});

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-presentation" data-astro-cid-q5kz5pjk> <div class="linear-gradient-2" data-astro-cid-q5kz5pjk></div> <div class="linear-gradient-1" data-astro-cid-q5kz5pjk></div> <dir class="container-persentation" data-astro-cid-q5kz5pjk> <div class="container-text" data-astro-cid-q5kz5pjk> <!-- <h2 class="text-hello">Hola <strong>soy</strong></h2> --> <h2 class="text-name" data-astro-cid-q5kz5pjk>Florent Diet</h2>  <div class="container-profession" data-astro-cid-q5kz5pjk> <div data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>D</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>v</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>p</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> </div> <div class="" data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>3</span> <span class="p-profession" data-astro-cid-q5kz5pjk>D</span> <span class="p-profession" data-astro-cid-q5kz5pjk> / </span> <span class="p-profession" data-astro-cid-q5kz5pjk>V</span> <span class="p-profession" data-astro-cid-q5kz5pjk>R</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> <span class="p-profession" data-astro-cid-q5kz5pjk>J</span> <span class="p-profession" data-astro-cid-q5kz5pjk>u</span> <span class="p-profession" data-astro-cid-q5kz5pjk>n</span> <span class="p-profession" data-astro-cid-q5kz5pjk>i</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> </div> </div> <p class="p-presentation" data-astro-cid-q5kz5pjk>
Passionate about virtual reality (VR), I hold a Master's degree in Image, Development, and 3D Technology and have over a year of experience in creating real-time 3D and VR software.<br data-astro-cid-q5kz5pjk><br data-astro-cid-q5kz5pjk>
An expert in C++ and C# development on Unity, I am also refining my skills in shader creation and 3D modeling using Blender. <br data-astro-cid-q5kz5pjk><br data-astro-cid-q5kz5pjk>
My approach is based on an ability to efficiently solve technical challenges related to gameplay or 3D, leveraging my expertise and ingenious solutions drawn from experience.
</p> <div class="container-curriculum" data-astro-cid-q5kz5pjk> <a href="https://wa.me/33786034196?text=Bonjour%20!" target="_blank" class="a-action" data-astro-cid-q5kz5pjk>Let’s Talk</a> <a href="https://drive.google.com/file/d/19OXgx8Pvw2C9yORGpoIOEa5P9MBJcnvN/view?usp=sharing" class="a-curriculum" target="_blank" data-astro-cid-q5kz5pjk>Resume/CV</a> </div> <div class="container-social" data-astro-cid-q5kz5pjk> <p class="" data-astro-cid-q5kz5pjk>Check Out My</p> <a href="https://github.com/MrPicadilli" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-github" data-astro-cid-q5kz5pjk></i> </li> </a> <a href="https://www.linkedin.com/in/florent-diet-29896629b/" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-linkedin" data-astro-cid-q5kz5pjk></i> </li> </a> <a href="https://fdiet.itch.io/" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-itch-io" data-astro-cid-q5kz5pjk></i> </li> </a> </div> </div> <div class="container-photo-profile" data-astro-cid-q5kz5pjk> <div class="photo-perfil" data-astro-cid-q5kz5pjk> <picture data-astro-cid-q5kz5pjk>  ${renderComponent($$result, "Image", $$Image, { "src": photoperfil, "alt": "Florent Diet", "id": "home", "data-astro-cid-q5kz5pjk": true })} </picture> </div> </div> </dir> </div>  `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/main/home/Home.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> <div class="container_p"> ${renderComponent($$result, "Home", $$Home, {})} ${renderComponent($$result, "Projects", $$Projects, {})} ${renderComponent($$result, "Skills", $$Skills, {})} ${renderComponent($$result, "Studies", $$Studies, {})} ${renderComponent($$result, "About", $$About, {})} </div> </main>`;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/main/main.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-dwl4onjj> <section class="section-footer" data-astro-cid-dwl4onjj> <div class="linear-grandient-1" data-astro-cid-dwl4onjj></div> <div class="container-footer" data-astro-cid-dwl4onjj> <h2 class="title-contact" id="contact" data-astro-cid-dwl4onjj>Contact</h2> <div class="container-redes" data-astro-cid-dwl4onjj> <a href="https://wa.me/33786034196?text=Bonjour%20!" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-whatsapp icon-whatsapp" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Whatsapp</p> </li> </a> <a href="https://github.com/MrPicadilli" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-github" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Github</p> </li> </a> <a href="https://www.linkedin.com/in/florent-diet-29896629b/" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-linkedin" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Linkedin</p> </li> </a> <a href="https://fdiet.itch.io/" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-itch-io" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Itch.io</p> </li> </a> </div> </div> </section> </footer> `;
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/components/footer/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description" content="Osnaider Martinez de desarrollador web Frontend React Js , Astro , \n      Next Js Con m\xE1s de 1 a\xF1o de experiencia en la creaci\xF3n de experiencias web\n      atractivas y funcionales."><meta property="og:type" content="website"><meta property="og:url" content="https://osnaidermartinez.vercel.app/"><meta property="og:site_name" content="Osnaider Martinez"><meta property="og:title" content="Osnaider Martinez Portafolio"><meta property="og:image" content="https://osnaidermartinez.vercel.app/img/preview-page.webp"><script src="https://kit.fontawesome.com/2898a0ac51.js" crossorigin="anonymous"><\/script><title>Portfolio | Florent Diet</title>', "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Main", $$Main, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/dietf/OneDrive/Documents/Port/Portafolio-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
