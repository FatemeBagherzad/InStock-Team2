import InventoryItemMob from '../InventoryItemMob/InventoryItemMob';
import InventoryItemTabDes from '../InventoryItemTabDes/InventoryItemTabDes';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';

const InventoryList = ({ allInvetories }) => {
  return (
    <>
      <InventoryListHeader />
      <section>
        {allInvetories.map((inventory) => (
          <InventoryItemMob inventory={inventory} key={inventory.id} />
        ))}
      </section>
      <section>
        {allInvetories.map((inventory) => (
          <InventoryItemTabDes inventory={inventory} key={inventory.id} />
        ))}
      </section>
    </>
  );
};
export default InventoryList;
