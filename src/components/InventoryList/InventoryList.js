import InventoryItemMob from '../InventoryItemMob/InventoryItemMob';
import InventoryItemTabDes from '../InventoryItemTabDes/InventoryItemTabDes';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';

const InventoryList = ({
  allInvetories,
  handleDeleteClick,
  handleEditClick,
}) => {
  return (
    <>
      <InventoryListHeader />
      <section>
        {allInvetories.map((inventory) => (
          <InventoryItemMob
            inventory={inventory}
            key={inventory.id}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
          />
        ))}
      </section>
      <section>
        {allInvetories.map((inventory) => (
          <InventoryItemTabDes
            inventory={inventory}
            key={inventory.id}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
          />
        ))}
      </section>
    </>
  );
};
export default InventoryList;
