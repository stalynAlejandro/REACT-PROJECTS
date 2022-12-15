const anchor = document.getElementById("anchor");
const rekt = anchor.getBoundingClientRect();

const anchorX = rekt.left + rekt.width / 2; // Midle of the box
const anchorY = rekt.top + rekt.height / 2;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX; //represent the position of the cursor
  const mouseY = e.clientY;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY); // Angle between cursor position and middle of the box

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${180 + angleDeg}deg)`;
    anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;

  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
