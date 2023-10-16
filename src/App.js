import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import InventoryMainPage from './pages/InventoryMainPage/InventoryMainPage';
import InvetoryItemDetailPage from './pages/InvetoryItemDetailPage/InvetoryItemDetailPage';
import InventoryAddNewPage from './pages/InventoryAddNewPage/InventoryAddNewPage';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import WarehouseAddNewPage from './pages/WarehouseAddNewPage/WarehouseAddNewPage';
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/warehouses" element={<WarehousePage />} />
          {/* <Route path="/warehouses" element={<WarehousesPage />} />
          <Route
            path="/warehouses/:warehouseid"
            element={<WarehouseDetailsPage />}
          />*/}
          <Route
            path="/warehouses/:warehouseid/edit"
            element={<WarehouseEditPage />}
          />
          <Route path="/warehouses/new" element={<WarehouseAddNewPage />} /> 
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
              <Footer />
      </BrowserRouter>

    </main>
  );
}
export default App;
