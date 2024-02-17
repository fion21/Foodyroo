import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
        className="logo"
          alt="logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vnotaq2k5i2nqdigafon"/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

//const styleCard = ;

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"}}>
        <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mtuzvgdmipuikj6pxllr"/>
                <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>

        </div>
    )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container"></div>
      <RestaurantCard /> <RestaurantCard /> <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
