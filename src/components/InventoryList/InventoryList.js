import InventoryItemMob from '../InventoryItemMob/InventoryItemMob';
import InventoryItemTabDes from '../InventoryItemTabDes/InventoryItemTabDes';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';

const InventoryList = ({ allInvetories, handleDeleteClick }) => {
  return (
    <>
      <InventoryListHeader />
      <section>
        {allInvetories.map((inventory) => (
          <InventoryItemMob
            inventory={inventory}
            key={inventory.id}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
      <section>
        {allInvetories.map((inventory) => (
          <InventoryItemTabDes
            inventory={inventory}
            key={inventory.id}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
    </>
  );
};
export default InventoryList;
