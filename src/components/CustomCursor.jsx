import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring tracking for trailing effect
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10); // Center adjustment
      cursorY.set(e.clientY - 10);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const isInteractive = Boolean(
        e.target?.closest?.('a, button, [role="button"], .cursor-pointer, input, textarea')
      );
      setIsHovered(isInteractive);
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    }
    const handleMouseEnter = () => {
      setIsVisible(true);
    }

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="custom-cursor desktop-only"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-color)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        opacity: isVisible ? 1 : 0
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        filter: isHovered ? 'blur(0px)' : 'blur(0px)',
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
