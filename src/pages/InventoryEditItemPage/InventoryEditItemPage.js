import PageHeader from "../../components/PageHeader/PageHeader";
import InventoryEditItem from "../../components/InventoryEditItem/InventoryEditItem";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import "../InventoryEditItemPage/InventoryEditItemPage.scss";

const InventoryEditItemPage = () => {
  document.title = "In Stock/Edit Item";

  return (
    <div className="inventoryEditPage">
      <img className="back__icon" src={backIcon} alt="back icon" />
      <PageHeader pageTitle="Edit Inventory Item" />
      <InventoryEditItem />
    </div>
  );
};
export default InventoryEditItemPage;
