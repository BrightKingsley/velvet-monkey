const flakesContainer = document.querySelector(".flakes-container");

(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  const flake1 = document.querySelector("#flake1");
  const flake2 = document.querySelector("#flake2");
  const flake3 = document.querySelector("#flake3");
  const flake4 = document.querySelector("#flake4");
  const flakes = document.querySelectorAll(".flake");

  let mouseStoppedTimeout;

  // Magic happens here
  function parallax(e) {
    // clearTimeout(mouseStoppedTimeout);
    // flakesContainer.classList.remove("inertia");

    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // let depth1 = `${20 - (mouseX - w) * 0.01}% ${10 - (mouseY - h) * 0.01}%`;
    // let depth2 = `${80 - (mouseX - w) * 0.01}% ${10 - (mouseY - h) * 0.01}%`;
    // let depth3 = `${80 - (mouseX - w) * 0.02}% ${80 - (mouseY - h) * 0.02}%`;
    // let depth4 = `${20 - (mouseX - w) * 0.06}% ${80 - (mouseY - h) * 0.06}%`;

    // flake1.style.backgroundPosition = depth1;
    // flake2.style.backgroundPosition = depth2;
    // flake3.style.backgroundPosition = depth3;
    // flake4.style.backgroundPosition = depth4;

    // flake1.style.translate = "";
    // flake2.style.translate = "";
    // flake3.style.translate = "";
    // flake4.style.translate = "";

    // flakes.forEach((flake) => {
    //   const { left, top } = flake.getBoundingClientRect();

    //   const centerX = left + window.scrollX + flake.clientWidth / 2;
    //   const centerY = top + window.scrollY + flake.clientHeight / 2;

    //   const deltaX = mouseX - centerX;
    //   const deltaY = mouseY - centerY;

    //   const translateX = deltaX * 0.5;
    //   const translateY = deltaY * 0.5;

    //   flake.style.transform = `translate(${translateX}px, ${translateY}px)`;

    //   mouseStoppedTimeout = setTimeout(() => {
    //     flake.classList.add("inertia");
    //   }, 100);
    // });

    const { left, top } = flakesContainer.getBoundingClientRect();

    const centerX = left + window.scrollX + flakesContainer.clientWidth / 2;
    const centerY = top + window.scrollY + flakesContainer.clientHeight / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const translateX = deltaX * -0.1;
    const translateY = deltaY * -0.1;

    flakesContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;

    // mouseStoppedTimeout = setTimeout(() => {
    //   console.log("inertia applied");
    //   applyInertia();
    // }, 100);
  }

  function applyInertia() {
    // images.forEach((image) => {
    //   const transformValue = image.style.transform;
    //   const [translateX, translateY] = transformValue.match(/(-?\d+)px/g).map(Number);

    //   const inertiaX = translateX * 0.9; // Adjust the inertia factor as needed
    //   const inertiaY = translateY * 0.9;

    //   image.style.transform = `translate(${inertiaX}px, ${inertiaY}px)`;
    // });

    const transformValue = flakesContainer.style.transform;
    const [translateX, translateY] = transformValue
      .match(/(-?\d+)px/g)
      .map(Number);

    const inertiaX = translateX * 0.9; // Adjust the inertia factor as needed
    const inertiaY = translateY * 0.9;

    flakesContainer.style.transform = `translate(${inertiaX}px, ${inertiaY}px)`;
  }

  // document.addEventListener("mouseleave", () => {
  //   console.log("inertia applied");
  //   mouseStoppedTimeout = setTimeout(() => {
  //     applyInertia();
  //   }, 100);
  // });
})();

// setTimeout(() => {
//   console.log("test");
//   flakesContainer.classList.add("inertia");
// }, 6000);
