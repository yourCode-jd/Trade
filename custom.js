const typingText = document.getElementById("typing-text");
const roles = ["Frontend Developer", "UI/UX Designer", "Freelancer"];
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

function typeEffect() {
  const current = roles[roleIndex];
  typingText.textContent = typingForward
    ? current.slice(0, ++charIndex)
    : current.slice(0, --charIndex);

  if (typingForward && charIndex === current.length) {
    typingForward = false;
    setTimeout(typeEffect, 1500);
  } else if (!typingForward && charIndex === 0) {
    typingForward = true;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, typingForward ? 100 : 50);
  }
}

typeEffect();
