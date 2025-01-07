import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./Contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <div className=" dark:bg-[#1e1e1e] dark:text-[#D1D5DB]">
      <App />
    </div>
  </ThemeContextProvider>
);
