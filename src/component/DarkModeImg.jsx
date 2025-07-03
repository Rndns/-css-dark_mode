import { useState } from "react";
import "./darkModeImg.css";

function DarkMode() {
  const [conversion, setConversion] = useState(false);

  const handleClick = () => {
    setConversion(conversion ? false : true);
  };

  return (
    <>
      <button onClick={handleClick}>이미지 보기</button>
      <div className={`image-wrapper ${conversion ? "while-mode" : "black-mode"}`}>
        <img className="invert" src="https://placehold.co/600x400" alt="invert" />
        <img className="original" src="https://placehold.co/600x400" alt="original" />
      </div>
    </>
  ) 
}

export default DarkMode;