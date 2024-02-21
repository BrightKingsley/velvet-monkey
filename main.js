(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  const flake1 = document.querySelector("#flake1");
  const flake2 = document.querySelector("#flake2");
  const flake3 = document.querySelector("#flake3");
  const flake4 = document.querySelector("#flake4");

  const container = document.querySelector("#hero");

  const containerOffset = container.offset();
  const centerX = containerOffset.left + container.width / 2;

  // Magic happens here
  function parallax(e) {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let depth1 = `${20 - (mouseX - w) * 0.01}% ${10 - (mouseY - h) * 0.01}%`;
    let depth2 = `${80 - (mouseX - w) * 0.01}% ${10 - (mouseY - h) * 0.01}%`;
    let depth3 = `${80 - (mouseX - w) * 0.02}% ${80 - (mouseY - h) * 0.02}%`;
    let depth4 = `${20 - (mouseX - w) * 0.06}% ${80 - (mouseY - h) * 0.06}%`;

    flake1.style.backgroundPosition = depth1;
    flake2.style.backgroundPosition = depth2;
    flake3.style.backgroundPosition = depth3;
    flake4.style.backgroundPosition = depth4;
  }
})();
