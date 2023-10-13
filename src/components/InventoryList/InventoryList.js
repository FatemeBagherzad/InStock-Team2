import InventoryItemMob from '../InventoryItemMob/InventoryItemMob';
import InventoryItemTabDes from '../InventoryItemTabDes/InventoryItemTabDes';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';

const InventoryList = ({ allData }) => {
  return (
    <>
      <InventoryListHeader />
      <section>
        {allData.map((data) => (
          <InventoryItemMob data={data} key={data.id} />
        ))}
      </section>
      <section>
        {allData.map((data) => (
          <InventoryItemTabDes data={data} key={data.id} />
        ))}
      </section>
    </>
  );
};
export default InventoryList;
