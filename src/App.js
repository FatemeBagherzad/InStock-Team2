import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import InventoryMainPage from "./pages/InventoryMainPage/InventoryMainPage";
import InvetoryItemDetailPage from "./pages/InvetoryItemDetailPage/InvetoryItemDetailPage";
import InventoryEditItemPage from "./pages/InventoryEditItemPage/InventoryEditItemPage";
import InventoryAddNewPage from "./pages/InventoryAddNewPage/InventoryAddNewPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/warehouses" element={<WarehousePage />} />
          {/* <Route path="/warehouses" element={<WarehousesPage />} />
          <Route
            path="/warehouses/:warehouseid"
            element={<WarehouseDetailsPage />}
          />
          <Route
            path="/warehouses/:warehouseid/edit"
            element={<EditWarehousePage />}
          />*/}
          <Route path="/warehouses/new" element={<WarehouseAddNewPage />} />
          <Route path="/inventory" element={<InventoryMainPage />} />
          <Route
            path="/inventory/:inventoryid"
            element={<InvetoryItemDetailPage />}
          />
          <Route
            path="/inventory/edit/:id"
            element={<InventoryEditItemPage />}
          />
          <Route path="/inventory/new" element={<InventoryAddNewPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}
export default App;
