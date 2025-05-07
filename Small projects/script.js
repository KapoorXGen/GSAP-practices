const box = document.querySelector(".box");
const radios = document.querySelectorAll(".anim-radio");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    // Reset position and color before applying new animation
    gsap.set(box, { x: 0, backgroundColor: "#0AE448" });

    switch (radio.value) {
      case "from":
        gsap.from(box, { x: -200, duration: 1 }); // from - starts from left -200px to mid 0
        break;

      case "to":
        gsap.to(box, { x: 200, duration: 1 }); // to - starts from mid 0 to right 200px
        break;

      case "fromTo": // fromTo - starting from -200 to 200
        gsap.fromTo(box, { x: -200 }, { x: 200, duration: 1 });
        break;

      case "set": // set - set it to the right 200px without animtion and set its colour to blue
        gsap.set(box, { x: 200, backgroundColor: "blue" });
        break;
    }
  });
});
