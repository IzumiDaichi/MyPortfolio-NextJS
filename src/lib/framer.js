
export const fadeIn = (direction, delay) => {
    return{
        hidden:{
            opacity:0,
        y: direction === 'up' ? 40: direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 240 : direction === 'right' ? -240 : 0,
        z: direction === 'fade' ? 40 : 0,
    },
    show: {
        y:0,
        x:0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.6,
            ease: [0, 0.25, 0.25, 0.75],
            
        }
    }
}
}

export const scaleVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  export const FlipVariant = {
    hidden: { 
      opacity: 0,
      rotateY: 90, // Initial state: flipped and invisible
    },
    show: {
      opacity: 1,
      rotateY: 0, // Final state: fully visible and unflipped
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  