import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import InventoryMainPage from "./pages/InventoryMainPage/InventoryMainPage";
import InvetoryItemDetailPage from "./pages/InvetoryItemDetailPage/InvetoryItemDetailPage";
import InventoryEditItemPage from "./pages/InventoryEditItemPage/InventoryEditItemPage";
import InventoryAddNewPage from "./pages/InventoryAddNewPage/InventoryAddNewPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseAddNewPage from "./pages/WarehouseAddNewPage/WarehouseAddNewPage";
import WarehouseDetailPage from "./pages/WarehouseDetailPage/WarehouseDetailPage";
// import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/warehouses" element={<WarehousePage />} />
          <Route path="/warehouses/new" element={<WarehouseAddNewPage />} />
          <Route
            path="/warehouses/:warehouseId"
            element={<WarehouseDetailPage />}
          />
          {/* <Route path="/warehouses/:warehouseId/edit" element={<EditWarehouse />}
          /> */}
          {/* <Route path="/warehouses" element={<WarehousesPage />} /> */}

          {/* <Route */}
          {/* //   path="/warehouses/:warehouseid/edit"
          //   element={<EditWarehousePage />} */}
          {/* /> */}

          <Route path="/inventory" element={<InventoryMainPage />} />
          <Route
            path="/inventory/:inventoryid"
            element={<InvetoryItemDetailPage />}
          />
          {/* <Route
            path="/inventory/:inventoryid/edit"
            element={<InventoryEditItemPage />}
          /> */}
          <Route path="/inventory/new" element={<InventoryAddNewPage />} />
        </Routes>
      </BrowserRouter>
      ;
    </main>
  );
}
export default App;
