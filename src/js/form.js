const form = document.querySelector(".contact-form");
const button = form.querySelector(".contact-form-submit");

form.addEventListener("submit", function (event) {
  button.innerHTML =
    '<span class="bouncing-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
});
