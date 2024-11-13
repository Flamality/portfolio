function updateESTTime() {
  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("est-time").textContent = `${time}`;
}
setInterval(updateESTTime, 1000);
updateESTTime();
