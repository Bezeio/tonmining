import "./Header.css";
import img_logo from "../../assets/image 2.png";
import logo_tele from "../../assets/ic_baseline-telegram.png";
import logo_x from "../../assets/ic_baseline-telegram (1).png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a
          href="https://t.me/TonMiningOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo_tele} alt="TON Mining Logo" />
        </a>
        <a
          href="https://x.com/tonmining"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo_x} alt="TON Mining Logo" />
        </a>
      </div>
      <div className="logo-middle">
        <img src={img_logo} alt="TON Mining Logo" />
      </div>
      <a
        href="https://t.me/tntGPUBot/tonmining"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="launch-app-btn">Launch App</button>
      </a>
    </header>
  );
};
export default Header;
