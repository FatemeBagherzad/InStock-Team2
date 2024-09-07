import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoryMainPage from './pages/InventoryMainPage/InventoryMainPage';
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';
import InventoryAddNewPage from './pages/InventoryAddNewPage/InventoryAddNewPage';
import WarehouseAddNewPage from './pages/WarehouseAddNewPage/WarehouseAddNewPage';
import WarehouseDeletePage from './pages/WarehouseDeletePage/WarehouseDeletePage';
import WarehouseDetailPage from './pages/WarehouseDetailPage/WarehouseDetailPage';
import InventoryEditItemPage from './pages/InventoryEditItemPage/InventoryEditItemPage';
import InvetoryItemDetailPage from './pages/InvetoryItemDetailPage/InvetoryItemDetailPage';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />

        <div className="mainPageBody">
          <Routes>
            <Route path="/warehouses" element={<WarehousePage />} />
            <Route path="/" element={<WarehousePage />} />
            <Route
              path="/warehouses/:warehouseid/detail"
              element={<WarehouseDetailPage />}
            />
            <Route
              path="/warehouses/:warehouseid/edit"
              element={<WarehouseEditPage />}
            />
            <Route
              path="/warehouses/:warehouseid"
              element={<WarehouseDeletePage />}
            />
            <Route path="/warehouses/new" element={<WarehouseAddNewPage />} />
            <Route path="/inventory" element={<InventoryMainPage />} />
            <Route
              path="/inventory/:inventoryid"
              element={<InvetoryItemDetailPage />}
            />
            <Route
              path="/inventory/edit/:inventoryid"
              element={<InventoryEditItemPage />}
            />
            <Route path="/inventory/new" element={<InventoryAddNewPage />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </main>
  );
}
export default App;
