import { useEffect, useState } from "react";

export default function useLocalStorage(initialValue, localStorageName) {
  const [state, setState] = useState(() => {
    const localData = JSON.parse(localStorage.getItem(localStorageName));
    return localData ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(state));
  }, [state, localStorageName]);

  return [state, setState];
}
