import Logo from "./logo.svg";
import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} height={32} alt="Airbnb" />
    </header>
  );
}
