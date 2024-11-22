document.addEventListener("DOMContentLoaded", () => {
  const card2 = document.querySelector(".card2");
  const skillItems = document.querySelectorAll(".skills .skill li");
  const skillColors = {
    "skill-html": "#E34F26",
    "skill-css": "#1572B6",
    "skill-js": "#F7DF1E",
    "skill-ts": "#3178C6",
    "skill-react": "#61DAFB",
    "skill-lua": "#000080",
    "skill-node": "#339933",
    "skill-firebase": "#FFCA28",
    "skill-appwrite": "#F02E65",
    "skill-figma": "#F24E1E",
    "skill-git": "#F05033",
    "skill-vs": "#007ACC",
    "skill-cmd": "#000000",
    "skill-trello": "#0079BF",
  };

  skillItems.forEach((skill) => {
    skill.addEventListener("mouseover", () => {
      const skillClass = Array.from(skill.classList).find(
        (cls) => skillColors[cls]
      );
      if (skillClass) {
        const color = skillColors[skillClass];
        card2.style.borderColor = color;
        card2.style.background = `linear-gradient(to left, ${color}30, transparent)`;
        skill.style.color = color;
      }
    });

    skill.addEventListener("mouseout", () => {
      card2.style.borderColor = "";
      card2.style.background =
        "linear-gradient(to right, #00000025, #00000025)";
      skill.style.color = "";
    });
  });
});
