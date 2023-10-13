import React from 'react'
import Chevron from '../../assets/Icons/chevron.svg'
import Delete from '../../assets/Icons/delete_outline.svg'
import Edit from '../../assets/Icons/edit.svg'
import './WarehouseCard.scss'

function WarehouseCard(props) {
    return (
        <div className="warehouse-card">
            <div className="warehouse-card__text-container">
                <div className="warehouse-card__sub-container">
                    <h3 className="warehouse-card__title">WAREHOUSE</h3>
                    <a className="warehouse-card__link">
                        <p className="warehouse-card__content warehouse-card__location">Manhattan</p>
                        <img className="warehouse-card__icon" src={Chevron} alt="Chevron Icon" />
                    </a>
                </div>

                <div className="warehouse-card__sub-container">
                    <h3 className="warehouse-card__title">CONTACT NAME</h3>
                    <p className="warehouse-card__content warehouse-card__content-mobile">Parmin Ahuja</p>
                    <p className="warehouse-card__content warehouse-card__content-tablet">503 Broadway, New York, USA</p>
                </div>

                <div className="warehouse-card__sub-container">
                    <h3 className="warehouse-card__title">ADDRESS</h3>
                    <p className="warehouse-card__content warehouse-card__content-mobile">503 Broadway, New York, USA</p>
                    <p className="warehouse-card__content warehouse-card__content-tablet">Parmin Ahuja</p>
                </div>

                <div className="warehouse-card__sub-container">
                    <h3 className="warehouse-card__title">CONTACT INFORMATION</h3>
                    <p className="warehouse-card__content">+1 (629) 555-0129</p>
                    <p className="warehouse-card__content">paulja@instock.com</p>
                </div>
            </div>

            <div className="warehouse-card__image-container">
                <img className="warehouse-card__edit-button" src={Delete} alt="Delete Icon" />
                <img className="warehouse-card__edit-button" src={Edit} alt="Edit Icon" />
            </div>
        </div>
    );
}

export default WarehouseCard;