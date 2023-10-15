import WarehouseDetailsHeader from "../../components/WarehouseDetailsHeader/WarehouseDetailsHeader";
// import InvetoryItemDetail from "../../components/InvetoryItemDetail/InvetoryItemDetail";
import WarehouseDetailsInventory from "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory";
import "./WarehouseDetailPage.scss";

function WarehouseDetailPage() {
  return (
    <>
      <main className="details-page">
        <WarehouseDetailsHeader />
        <WarehouseDetailsInventory />
      </main>
    </>
  );
}

export default WarehouseDetailPage;
