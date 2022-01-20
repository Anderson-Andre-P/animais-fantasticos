// Navegação por Tab
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

// Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const classAtivo = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(classAtivo);
    accordionList[0].nextElementSibling.classList.add(classAtivo);

    function activeAccordion(event) {
      this.classList.toggle(classAtivo);
      this.nextElementSibling.classList.toggle(classAtivo);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

// Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // // Forma Alternativa
    //   const topo = section.offsetTop;
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth",
    //   });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initTabNav();
initAccordion();
initScrollSuave();
