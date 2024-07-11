import { useEffect, useState } from 'react';
import "../Styles/Overlay.css" 

const Overlay = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // 4 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
    const overlay_logo = import.meta.env.VITE_OVERLAY_LOGO;

    return (
      <div className={`overlay ${!isVisible && 'fade-out'}`}>
        <img src={overlay_logo} alt="Rotating Logo" className="rotating-image" />
      </div>
    );
  };
  
  export default Overlay;