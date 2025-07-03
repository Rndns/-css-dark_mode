import DarkModeImg from "./component/DarkModeImg";
import DarkMode from "./component/DarkMode.jsx";

export default function App() {


  return (
    <div className="container">
      {/* image dark-mode */}
      <DarkModeImg />
      {/* dark-mode */}
      <DarkMode></DarkMode>
    </div>
  );
}
