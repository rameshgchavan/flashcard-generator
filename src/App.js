import React from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="font-semibold">
      <Header />
      <hr className="border-2 drop-shadow-md"/>
      <NavTabs >
        <PageRoutes />
      </NavTabs>
    </div>
  );
}

export default App;
