// src/hooks/usePreviousPath.js
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePreviousPath = () => {
  const location = useLocation();
  const previousRef = useRef<string | null>(null);;

  useEffect(() => {
    previousRef.current = location.pathname;
  }, [location]);

  return previousRef.current;
};

export default usePreviousPath;
