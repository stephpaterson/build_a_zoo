import { useState } from "react";

const useToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
  }

  return { isDarkMode, toggleDarkMode }
}

export default useToggle;