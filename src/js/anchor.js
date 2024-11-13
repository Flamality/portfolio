function handleAnchorNavigation() {
  const urlHash = window.location.hash;
  if (urlHash) {
    const targetSection = document.querySelector(urlHash);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}
window.onload = handleAnchorNavigation;
window.onhashchange = handleAnchorNavigation;
