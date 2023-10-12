import React from "react";
// import WarehouseList from "../../components/WarehouseList";  //WarehouseList from Andy's should come here
import "./WarehousePage.scss";

class WarehousePage extends React.Component {
  render() {
    return (
      <div className="warehouse-page">
        <div className="warehouse-page__container">
          <WarehouseList
            searchTerm={this.props.searchTerm}
            handleOnChange={this.props.handleOnChange}
          />
        </div>
      </div>
    );
  }
}

export default WarehousePage;
