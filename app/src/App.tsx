import React from "react";

import { GlobalStyle } from "./GlobalStyle";
import { NearbyPlaces } from "./nearby-places/NearbyPlaces";
import Header from "./Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <NearbyPlaces />
      </div>
    </>
  );
}

export default App;
