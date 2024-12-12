import React from "react";
import Offers from "./components/Offers";
import Ratings from "./components/Ratings";
import Price from "./components/Price";

const App = () => {
  return (
    <div className="relative flex items-center justify-center h-screen gap-3">
      <div>
        <Ratings />
      </div>
      <div>
        <Price />
      </div>
      <div>
        <Offers />
      </div>
    </div>
  );
};

export default App;
