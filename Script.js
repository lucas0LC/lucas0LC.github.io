document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.classList.remove("active");
    });

    this.classList.add("active");

    // Previne o comportamento padrão para links
    window.location.href = this.href;
  });
});

/*======ScrollPosition_Test======== */

function activateNavLink(sectionId) {
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.remove("active");
  });

  // Adiciona a classe "active" ao link correspondente a section
  document
    .querySelector(`.nav-link[href="#${sectionId}"]`)
    .classList.add("active");
}

// Função para verificar a posição do scroll e ativar o link correspondente
function checkScrollPosition() {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    // Verifica se a section está na viewport
    if (
      sectionTop <= windowHeight / 2 &&
      sectionTop + sectionHeight >= windowHeight / 2
    ) {
      activateNavLink(section.id);
    }
  });
}

window.addEventListener("scroll", checkScrollPosition);

// Chama a função para garantir que a classe "active" esteja corretamente ativado no inicio da página
checkScrollPosition();
