import React from "react";
import "./Coin.css";

function Coin({ name, image, volume, price, symbol, priceChange, marketcap }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? <p className="red">{priceChange.toFixed(2)}%</p> : <p className="green">{priceChange.toFixed(2)}%</p>}
          <p className="market">Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
