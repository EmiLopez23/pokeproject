import { useEffect, useState } from 'react';
import ArrowToTop from 'resources/ArrowToTop';
import './ScrollToTop.styles.css';

const ScrollToTop = () => {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const filters = document.getElementById('filters');
    if (filters && window.scrollY > filters?.offsetTop) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className="scroll-to-top"
      style={{
        display: isInView ? 'block' : 'none',
      }}
      onClick={handleClick}
    >
      <ArrowToTop />
    </button>
  );
};

export default ScrollToTop;
