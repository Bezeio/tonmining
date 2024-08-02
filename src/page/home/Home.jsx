import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="App">
        <div className="home-container">
          <main className="main-content">
            <h1 className="main-title">
              Don't just mine,
              <br />
              Ton Mining!
            </h1>

            <p className="description">
              The first DEPin on TON. Cloud mining made simple. Mine-to-earn model.
              <br />
              Every tap contributes to profit-sharing and endless excitement.
            </p>
            <div className="cta-buttons">
              <a
                href="https://t.me/tntGPUBot/tonmining"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="launch-app-btn">Launch App</button>
              </a>
              <a
                href="https://t.me/tntGPUBot/tonmining"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="check-airdrop-btn">Check Your Airdrop</button>
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
