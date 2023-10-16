import WarehouseListHeader from '../WarehouseListHeader/WarehouseListHeader';
import WarehouseMob from '../WarehouseMob/WarehouseMob';
import WarehouseTabDesc from '../WarehouseTabDesc/WarehouseTabDesc';

const WarehouseList = ({ allWarehouses, handleDeleteClick }) => {
  if (!allWarehouses || allWarehouses.length === 0) {
    return <p>No warehouses available.</p>; // or render an appropriate fallback UI
  }

  return (
    <div>
      <WarehouseListHeader />
      <section>
        {allWarehouses.map((warehouse) => (
          <WarehouseMob
            key={warehouse.id}
            warehouse={warehouse}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
      <section>
        {allWarehouses.map((warehouse) => (
          <WarehouseTabDesc
            key={warehouse.id}
            warehouse={warehouse}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
    </div>
  );
};

export default WarehouseList;
