let autoScrollInterval;
let currentDirection = 1; // 1 = ke kanan, -1 = ke kiri

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
  }, 4000); // Ganti setiap 4 detik
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}


