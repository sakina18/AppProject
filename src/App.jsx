import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Main = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
