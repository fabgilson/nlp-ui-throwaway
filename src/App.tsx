import { Route, Routes } from "react-router-dom";

import MainPage from "@/pages/main";
import ChangePage from "@/pages/change";
import { GlobalStateProvider } from "./GlobalState";

function App() {
  return (
    <GlobalStateProvider>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<ChangePage />} path="/change" />
      </Routes>
    </GlobalStateProvider>
  );
}

export default App;
