import { useState } from "react";
import "./DarkMode.css";

function DarkMode() {
  const [conversion, setConversion] = useState(false);

  const handleClick = () => setConversion(conversion ? false : true);

  return (
    <>
      <div className="bg">
      <button onClick={handleClick}>다크 모드</button>
        <div
          className={`wrapper ${conversion ? "while-mode" : "dark-mode"}`}
        ></div>
        <div className="text">다크 모드</div>
      </div>
    </>
  );
}

export default DarkMode;
