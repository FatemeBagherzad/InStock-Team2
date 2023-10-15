import PageHeader from "../../components/PageHeader/PageHeader";
import InventoryEditItem from "../../components/InventoryEditItem/InventoryEditItem";


const InventoryEditItemPage = () => {
  document.title = "In Stock/Edit Item";

  return (
    <div className="inventoryEditPage">
      <PageHeader pageTitle="Edit Inventory Item" />
      <InventoryEditItem />

    </div>
  );
};
export default InventoryEditItemPage;
