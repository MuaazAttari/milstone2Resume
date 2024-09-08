var toggleButton = document.getElementById('toggleSkills');
var skillsSection = document.querySelector('.skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
    }
    else {
        skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.add('hidden');
    }
});
