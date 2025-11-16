import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 340, 
        behavior: "smooth",
      });
    }, 100); 

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
