import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./components/Catalog";
import NotFound from "./pages/NotFound/NotFound";
import SeparateCamper from "./components/SeparateCamper/SeparateCamper";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/campers" element={<Catalog />} />
          <Route path="/campers/:id" element={<SeparateCamper />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
