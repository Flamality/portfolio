// Spring animation configuration
const springDefault = {
  stiffness: 0.1,
  damping: 0.5,
};
let spring = {
  stiffness: springDefault.stiffness,
  damping: springDefault.damping,
};

class AnimatedCursor {
  constructor() {
    this.outer = document.querySelector(".cursor-outer-ring");
    this.inner = document.querySelector(".cursor-inner-ring");

    // Current positions
    this.mouseX = 0;
    this.mouseY = 0;
    this.scrollX = window.scrollX;
    this.scrollY = window.scrollY;

    // Target positions for outer ring (with spring effect)
    this.outerX = 0;
    this.outerY = 0;

    // Velocity for spring animation
    this.velocityX = 0;
    this.velocityY = 0;

    this.init();
  }

  init() {
    // Show/hide cursor based on mouse entering/leaving window
    document.addEventListener("mouseenter", () => {
      this.outer.style.display = "block";
      this.inner.style.display = "block";
    });

    document.addEventListener("mouseleave", () => {
      this.outer.style.display = "none";
      this.inner.style.display = "none";
    });

    // Track mouse movement
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX + this.scrollX; // Include scroll position in the X axis
      this.mouseY = e.clientY + this.scrollY; // Include scroll position in the Y axis

      // Inner cursor follows mouse exactly
      this.inner.style.transform = `translate3d(${this.mouseX}px, ${this.mouseY}px, 0)`;
    });

    // Track scroll position
    document.addEventListener("scroll", () => {
      this.scrollX = window.scrollX;
      this.scrollY = window.scrollY;
    });

    // Handle click animations
    document.addEventListener("mousedown", () => {
      this.outer.classList.add("active");
      spring.stiffness = 0.2;
      spring.damping = 0.8;
    });

    document.addEventListener("mouseup", () => {
      this.outer.classList.remove("active");
      spring.stiffness = springDefault.stiffness;
      spring.damping = springDefault.damping;
    });

    // Start animation loop
    this.animate();
  }

  animate() {
    // Calculate spring physics for outer ring
    const dx = this.mouseX - this.outerX;
    const dy = this.mouseY - this.outerY;

    // Apply spring force
    this.velocityX += dx * spring.stiffness;
    this.velocityY += dy * spring.stiffness;

    // Apply damping
    this.velocityX *= 1 - spring.damping;
    this.velocityY *= 1 - spring.damping;

    // Update position
    this.outerX += this.velocityX;
    this.outerY += this.velocityY;

    // Apply transform, adjusting for scroll position
    this.outer.style.transform = `translate3d(${
      this.outerX - this.scrollX
    }px, ${this.outerY - this.scrollY}px, 0)`;

    // Continue animation loop
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize cursor
const cursor = new AnimatedCursor();
