import PageHeader from '../../components/PageHeader/PageHeader';
import WarehouseEditForm from '../../components/WarehouseEditForm/WarehouseEditForm';

const WarehouseEditPage = () => {
    document.title = 'In Stock/Warehouse Edit Page';

    return (
        <div className="WarehouseEditPage">
            <PageHeader pageTitle="Edit Warehouse" />
            <WarehouseEditForm />
        </div>
    );
};
export default WarehouseEditPage;


