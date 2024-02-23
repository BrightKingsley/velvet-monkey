(function () {
  flakesContainer = document.querySelector(".flakes-container");

  // Add event listener
  document.addEventListener("mousemove", parallax);

  let translateX = 0;
  let translateY = 0;
  // Magic happens here
  function parallax(e) {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    const { left, top } = flakesContainer.getBoundingClientRect();

    const centerX = left + window.scrollX + flakesContainer.clientWidth / 2;

    const centerY = top + window.scrollY + flakesContainer.clientHeight / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    translateX = deltaX * -0.5;
    translateY = deltaY * -0.5;
    flakesContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }
  6;
})();
