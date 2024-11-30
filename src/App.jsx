// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import Catalog from "./components/Catalog/Catalog.jsx";
// import NotFound from "./pages/NotFound/NotFound";
// import SeparateCamper from "./components/SeparateCamper/SeparateCamper";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/campers" element={<Catalog />} />
          <Route path="/campers/:id" element={<SeparateCamper />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
};

export default App;
