const toggleButton = document.getElementById(
  "toggleSkills"
) as HTMLButtonElement | null;

const skillsSection = document.querySelector(".skills") as HTMLElement | null;

toggleButton?.addEventListener("click", () => {
  if (skillsSection?.classList.contains("hidden")) {
    skillsSection.classList.remove("hidden");
  }
    else {
    skillsSection?.classList.add("hidden");
  }
});
