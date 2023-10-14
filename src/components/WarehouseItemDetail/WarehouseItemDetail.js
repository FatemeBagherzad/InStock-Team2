import "./WarehouseItemDetail.scss";

const WarehouseItemDetail = ({ inventory }) => {
  return (
    <>
      <div className="container warehouseItemDetail">
        <section className="warehouseItemDetail__section-left">
          <div className="warehouseItemDetail__section--group">
            <p className="warehouseItemDetail__section--group-label">
              ITEM DESCRIPTION
            </p>
            <p className="warehouseItemDetail__section--group-info">
              {inventory[0].description}
            </p>
          </div>

          <div className="warehouseItemDetail__section--group">
            <p className="warehouseItemDetail__section--group-label">
              CATEGORY
            </p>
            <p className="warehouseItemDetail__section--group-info">
              {inventory[0].category}
            </p>
          </div>
        </section>

        <section className="warehouseItemDetail__section-right">
          <div className="warehouseItemDetail__section-right-left">
            <div className="warehouseItemDetail__section--group">
              <p className="warehouseItemDetail__section--group-label">
                STATUS
              </p>
              <p className="warehouseItemDetail__section--group-info">
                {inventory[0].status}
              </p>
            </div>

            <div className="warehouseItemDetail__section--group">
              <p className="warehouseItemDetail__section--group-label">
                WAREHOUSES
              </p>
              <p className="warehouseItemDetail__section--group-info">
                {inventory[0].warehouse_id}
              </p>
            </div>
          </div>

          <div className="warehouseItemDetail__section--group">
            <p className="warehouseItemDetail__section--group-label">
              QUANTITY
            </p>
            <p className="warehouseItemDetail__section--group-info">
              {inventory[0].quantity}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default WarehouseItemDetail;
