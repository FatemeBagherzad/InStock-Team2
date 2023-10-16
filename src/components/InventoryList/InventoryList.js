import { useState } from 'react';
import InventoryItemMob from '../InventoryItemMob/InventoryItemMob';
import InventoryItemTabDes from '../InventoryItemTabDes/InventoryItemTabDes';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';

const InventoryList = ({ allInvetories, handleDeleteClick }) => {
  // const nonZeroInventories = allInvetories.filter(
  //   (inventory) => inventory.quantity > 0
  // );

  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(1); // 1 for ascending, -1 for descending

  const sortedData = [...allInvetories];

  // Function to handle sorting
  const handleSort = (field) => {
    if (field === sortField) {
      // If the same field is clicked again, toggle the sort order
      setSortOrder(sortOrder === 1 ? -1 : 1);
    } else {
      // If a different field is clicked, set the new field and order
      setSortField(field);
      setSortOrder(1);
    }
  };

  // Sort the data based on the selected field and order
  if (sortField) {
    sortedData.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      console.log(aValue, bValue);

      if (aValue < bValue) return -1 * sortOrder;
      if (aValue > bValue) return 1 * sortOrder;
      return 0;
    });
  }
  return (
    <>
      <InventoryListHeader handleSort={handleSort} />
      <section>
        {sortedData.map((inventory) => (
          <InventoryItemMob
            inventory={inventory}
            key={inventory.id}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
      <section>
        {sortedData.map((inventory) => (
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
