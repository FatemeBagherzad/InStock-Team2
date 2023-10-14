import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import InventoryMainPage from './pages/InventoryMainPage/InventoryMainPage';
import InvetoryItemDetailPage from './pages/InvetoryItemDetailPage/InvetoryItemDetailPage';
import InventoryAddNewPage from './pages/InventoryAddNewPage/InventoryAddNewPage';
// import WarehousePage from './pages/WarehousePage/WarehousePage';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/warehouses" />} />
          <Route path="/warehouses" element={<WarehousePage />} /> */}
          {/* <Route
            path="/warehouses/:warehouseid"
            element={<WarehouseDetailsPage />}
          />
          <Route
            path="/warehouses/:warehouseid/edit"
            element={<EditWarehousePage />}
          />
          <Route path="/warehouses/new" element={<NewWarehousePage />} /> */}
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
