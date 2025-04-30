let autoScrollInterval;
let currentDirection = 1;

function scrollContent(direction) {
  const container = document.getElementById("scrollContainer");
  const scrollAmount = container.offsetWidth;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    const container = document.getElementById("scrollContainer");

    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
      currentDirection = -1;
    }

    if (container.scrollLeft <= 10) {
      currentDirection = 1;
    }

    scrollContent(currentDirection);
  }, 5000); 
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

window.onload = function() {
  startAutoScroll();
};
