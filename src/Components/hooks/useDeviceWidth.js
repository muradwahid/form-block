import {useState,useEffect} from 'react';
const useDeviceWidth = () => { 

  const [device, setDevice] = useState("");
  const [rendered, setRendered] = useState(0)
  const width = window.innerWidth;
  useEffect(() => {
    if (width > 1024) {
      setDevice("desktop");
    } else if (width > 640) {
      setDevice("tablet")
    } else {
      setDevice("mobile")
    }
    const handleWindowSizeChange = () => {
      setRendered(window.innerWidth)
      if (window.innerWidth > 1024 || width > 1024) {
        setDevice("desktop");
      } else if (window.innerWidth > 640 || width > 641) {
        setDevice("tablet")
      } else {
        setDevice("mobile")
      }
    };
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [rendered]);


  return {device}

}

export default useDeviceWidth