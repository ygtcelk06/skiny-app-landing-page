import { Easing } from "framer-motion"

type Direction = "up" | "down" | "left" | "right"

// Fade In Animation
export function fadeIn(direction: Direction, delay = 0) {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  }
}

// Slide In Animation
export function slideIn(direction: Direction, delay = 0) {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
  }
}

// Scale Animation
export function scaleIn(delay = 0) {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: delay,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
  }
}

// Stagger Container
export function staggerContainer(staggerChildren = 0.1, delayChildren = 0) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  }
}

// Stagger Item
export function staggerItem(delay = 0) {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: delay,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
  }
}

// Float Animation (for continuous floating effect)
export function floatAnimation(duration = 6) {
  return {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
  }
}

// Rotate Animation
export function rotateIn(delay = 0) {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
  }
}

// Bounce Animation
export function bounceIn(delay = 0) {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
  }
}

// Card Hover Animation
export function cardHover() {
  return {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }
}

// Button Hover Animation
export function buttonHover() {
  return {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  }
}

// Gradient Blob Animation
export function gradientBlob(duration = 8) {
  return {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }
}

// Text Reveal Animation
export function textReveal(delay = 0) {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
  }
}

// Modal Animation
export function modalAnimation() {
  return {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as Easing,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  }
}

// Mobile Menu Animation
export function mobileMenuAnimation() {
  return {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }
}
