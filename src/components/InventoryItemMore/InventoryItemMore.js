import './InventoryItemMore.scss';

const InventoryItemMore = ({ inventory }) => {
  return (
    <>
      <div className="container InventoryItemMore">
        <section className="InventoryItemMore__section-left">
          <div className="InventoryItemMore__section--group">
            <p className="InventoryItemMore__section--group-label">
              ITEM DESCRIPTION
            </p>
            <p className="InventoryItemMore__section--group-info">
              {inventory[0].description}
            </p>
          </div>

          <div className="InventoryItemMore__section--group">
            <p className="InventoryItemMore__section--group-label">CATEGORY</p>
            <p className="InventoryItemMore__section--group-info">
              {inventory[0].category}
            </p>
          </div>
        </section>

        <section className="InventoryItemMore__section-right">
          <div className="InventoryItemMore__section-right-left">
            <div className="InventoryItemMore__section--group">
              <p className="InventoryItemMore__section--group-label">STATUS</p>
              <p className="InventoryItemMore__section--group-info">
                {inventory[0].status}
              </p>
            </div>

            <div className="InventoryItemMore__section--group">
              <p className="InventoryItemMore__section--group-label">
                WAREHOUSES
              </p>
              <p className="InventoryItemMore__section--group-info">
                {inventory[0].warehouse_id}
              </p>
            </div>
          </div>

          <div className="InventoryItemMore__section--group">
            <p className="InventoryItemMore__section--group-label">QUANTITY</p>
            <p className="InventoryItemMore__section--group-info">
              {inventory[0].quantity}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default InventoryItemMore;
