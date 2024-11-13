const outerRing = document.querySelector(".cursorouterring");
const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let outerRingX =
  mouseX - document.documentElement.scrollTop || document.body.scrollTop;
let outerRingY =
  mouseY - document.documentElement.scrollTop || document.body.scrollTop;
const speed = 0.2;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
  console.log(e.pageY);
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    outerRing.style.width = "30px";
    outerRing.style.height = "30px";
  });

  link.addEventListener("mouseleave", () => {
    outerRing.style.width = "50px";
    outerRing.style.height = "50px";
  });
});
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    outerRing.style.width = "30px";
    outerRing.style.height = "30px";
  });

  button.addEventListener("mouseleave", () => {
    outerRing.style.width = "50px";
    outerRing.style.height = "50px";
  });
});

function animate() {
  const distX = mouseX - outerRingX;
  const distY = mouseY - outerRingY;

  outerRingX += distX * speed;
  outerRingY += distY * speed;

  outerRing.style.left = `${outerRingX + window.scrollX}px`;
  outerRing.style.top = `${outerRingY + window.scrollY}px`;
  requestAnimationFrame(animate);
}

animate();
