import React from "react";
import HomeScreen from "./components/HomeScreen";
import WalletConnect from "./components/WalletConnect";

export default function App() {
  return (
    <div>
      <WalletConnect />
      <HomeScreen />
    </div>
  );
}
