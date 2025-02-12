import { useEffect, useState } from "react";

const useDeviceDetection = () => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const handleDeviceDetection = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setDevice('Mobile');
      } else if (width > 768 && width <= 1024) {
        setDevice('Tablet');
      } else {
        setDevice('Desktop');
      }
    };

    handleDeviceDetection();

    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  return device;
};

export default useDeviceDetection;

