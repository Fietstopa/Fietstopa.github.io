function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeWriter() {
  var bohdan = ["programátor", "grafický designér", "fotograf", "IT Student"];
  let i = 0;

  while (true) {
    let word = bohdan[i];
    let displayText = "";

    for (let j = 0; j < word.length; j++) {
      displayText += word[j];
      document.getElementById("whoami").innerHTML = displayText;
      await delay(100);
    }
    await delay(2000);
    for (let j = word.length; j >= 0; j--) {
      displayText = displayText.substring(0, j);
      document.getElementById("whoami").innerHTML = displayText;
      await delay(100);
    }
    i = (i + 1) % bohdan.length;
  }
}

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
const fieldHolders = document.querySelectorAll(".field-holder");

fieldHolders.forEach((fieldHolder) => {
  const input = fieldHolder.querySelector(".kontakt");

  // Move label up on focus
  input.addEventListener("focus", () => {
    fieldHolder.classList.add("clicked");
  });

  // Check input value on focus out
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      fieldHolder.classList.remove("clicked"); // Remove 'clicked' class if input is empty
    }
  });

  // If the input already has value, move label up
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      fieldHolder.classList.add("clicked"); // Keep label up if there's text
    } else {
      fieldHolder.classList.remove("clicked"); // Move label back if empty
    }
  });
});
