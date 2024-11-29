import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import NotFound from "./pages/NotFound/NotFound";
import Camper from "./pages/Camper/Camper";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/campers" element={<Catalog />} />
          <Route path="/campers/:id" element={<Camper />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
