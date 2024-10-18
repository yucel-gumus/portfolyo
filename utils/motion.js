export const textVariant = (delay = 0) => {
	return {
	  hidden: {
		y: -50,
		opacity: 0,
	  },
	  show: {
		y: 0,
		opacity: 1,
		transition: {
		  type: "spring",
		  duration: 1.25,
		  delay: delay,
		  stiffness: 120,
		},
	  },
	};
  };
  
  export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 1) => {
	const axis = direction === "up" || direction === "down" ? "y" : "x";
	const axisValue = direction === "up" ? 100 : direction === "down" ? -100 : direction === "left" ? 100 : -100;
  
	return {
	  hidden: {
		[axis]: axisValue,
		opacity: 0,
	  },
	  show: {
		[axis]: 0,
		opacity: 1,
		transition: {
		  type: type,
		  delay: delay,
		  duration: duration,
		  ease: "easeOut",
		},
	  },
	};
  };
  
  export const zoomIn = (delay = 0.5, duration = 0.75) => {
	return {
	  hidden: {
		scale: 0.8, // Slightly zoomed out for a more subtle effect
		opacity: 0,
	  },
	  show: {
		scale: 1,
		opacity: 1,
		transition: {
		  type: "spring",
		  delay: delay,
		  duration: duration,
		  stiffness: 70, // A bit softer zoom with spring for a natural pop
		  ease: "easeOut",
		},
	  },
	};
  };
  
  export const slideIn = (direction = "left", type = "spring", delay = 0, duration = 0.8) => {
	const axis = direction === "up" || direction === "down" ? "y" : "x";
	const axisValue = direction === "up" ? "100%" : direction === "down" ? "-100%" : direction === "left" ? "100%" : "-100%";
  
	return {
	  hidden: {
		[axis]: axisValue,
		opacity: 0,
	  },
	  show: {
		[axis]: 0,
		opacity: 1,
		transition: {
		  type: type,
		  delay: delay,
		  duration: duration,
		  ease: "easeOut",
		},
	  },
	};
  };
  
  export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => {
	return {
	  hidden: {},
	  show: {
		transition: {
		  staggerChildren: staggerChildren,
		  delayChildren: delayChildren,
		  ease: "easeInOut",
		},
	  },
	};
  };
  