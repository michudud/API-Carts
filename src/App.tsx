import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <div></div>;
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
