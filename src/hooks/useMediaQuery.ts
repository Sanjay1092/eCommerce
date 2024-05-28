import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);
  const matchQuery = window.matchMedia(query);
  useEffect(() => {
    function handleChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }
    matchQuery.addEventListener("change", handleChange);
    return () => matchQuery.removeEventListener("change", handleChange);
  }, [query]);
  return matches;
}

export default useMediaQuery;
