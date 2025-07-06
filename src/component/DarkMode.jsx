import { useState } from "react";
import "./DarkMode.scss";

function DarkMode() {
  const [conversion, setConversion] = useState(false);

  const handleClick = () => setConversion(conversion ? false : true);

  return (
    <>
      <div className="bg">
        <div className="while-mode">
          <button className="button" onClick={handleClick}>다크 모드</button>
        </div>
        <div className={`wrapper ${!conversion ? "while-mode" : "dark-mode"}`}>
          <button className="bg_button" onClick={handleClick}>다크 모드</button>
        </div>
        <div className="text">다크 모드</div>
      </div>
    </>
  );
}

export default DarkMode;
