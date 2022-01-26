import initScrollSuave from "./modules/scrollSuave.js";
import initAnimacaoScroll from "./modules/animarScroll.js";
import initAccordion from "./modules/accordionList.js";
import initTabNav from "./modules/tabNav.js";

initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();

// Navegação por Tab
// function initTabNav() {
//   const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
//   const tabContent = document.querySelectorAll("[data-tab='content'] section");

//   if (tabMenu.length && tabContent.length) {
//     tabContent[0].classList.add("ativo");

//     function activeTab(index) {
//       tabContent.forEach((section) => {
//         section.classList.remove("ativo");
//       });
//       const direcao = tabContent[index].dataset.anime;
//       tabContent[index].classList.add("ativo", direcao);
//     }

//     tabMenu.forEach((itemMenu, index) => {
//       itemMenu.addEventListener("click", () => {
//         activeTab(index);
//       });
//     });
//   }
// }

// Accordion List
// function initAccordion() {
//   const accordionList = document.querySelectorAll(
//     "[data-anime='accordion'] dt"
//   );
//   const classAtivo = "ativo";
//   if (accordionList.length) {
//     accordionList[0].classList.add(classAtivo);
//     accordionList[0].nextElementSibling.classList.add(classAtivo);

//     function activeAccordion(event) {
//       this.classList.toggle(classAtivo);
//       this.nextElementSibling.classList.toggle(classAtivo);
//     }

//     accordionList.forEach((item) => {
//       item.addEventListener("click", activeAccordion);
//     });
//   }
// }

// Scroll Suave
// function initScrollSuave() {
//   const linksInternos = document.querySelectorAll(
//     "[data-menu='suave'] a[href^='#']"
//   );

//   function scrollToSection(event) {
//     event.preventDefault();
//     const href = event.currentTarget.getAttribute("href");
//     const section = document.querySelector(href);

//     section.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });

//     // // Forma Alternativa
//     //   const topo = section.offsetTop;
//     //   window.scrollTo({
//     //     top: topo,
//     //     behavior: "smooth",
//     //   });
//   }

//   linksInternos.forEach((link) => {
//     link.addEventListener("click", scrollToSection);
//   });
// }

// Animação ao Scroll
// function initAnimacaoScroll() {
//   const sections = document.querySelectorAll('[data-anime="scroll"]');
//   const windowMetade = window.innerHeight * 0.2;

//   if (sections.length) {
//     function animaScroll() {
//       sections.forEach((section) => {
//         const sectionTop = section.getBoundingClientRect().top - windowMetade;
//         const isSectionVisible = sectionTop - windowMetade < 0;

//         if (isSectionVisible) {
//           section.classList.add("ativo");
//         } else {
//           section.classList.remove("ativo");
//         }
//       });
//     }

//     animaScroll();

//     window.addEventListener("scroll", animaScroll);
//   }
// }
