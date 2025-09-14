import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useRouterLoader(delay = 800) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [location.pathname, delay]);

  return loading;
}
