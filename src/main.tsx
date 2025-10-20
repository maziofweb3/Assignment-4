import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "bootstrap/dist/css/bootstrap.css";

import { LotteryProvider } from "./components/LotteryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LotteryProvider>
      <App />
    </LotteryProvider>
  </React.StrictMode>
);
