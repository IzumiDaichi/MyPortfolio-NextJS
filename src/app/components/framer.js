
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