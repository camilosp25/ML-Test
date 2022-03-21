import React, {useState} from "react";
import NumberFormat from 'react-number-format';
import './item.css';
import {Link} from "react-router-dom";

export const Item = ({item}) => {

    const thumbnail = item.thumbnail;

    const contidionText = (condition) => {
        let text = '';
        if (condition === 'new') {
            text = 'Nuevo';
        }
        if (condition === 'used') {
            text = 'Usado';
        }
        return text;
    };

    return (
        <>
            <div className="container-item">
                <div className="row">
                    <div className="col-9">
                        <Link to={`/items/${item.id}`}>
                            <img src={thumbnail} className="thumbnail"/>
                        </Link>
                        <div className="product-details">
                            <div className="price">
                                <Link to={`/items/${item.id}`}>
                                    <NumberFormat value={item.price} displayType={'text'} thousandSeparator={'.'}
                                                  decimalSeparator={','} prefix={'$'}/>
                                </Link>
                            </div>
                            <div className="item-detail">
                                <Link to={`/items/${item.id}`}>
                                    {item.title}
                                </Link>
                            </div>
                            <div className="item-detail">
                                {contidionText(item.condition)}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="seller-location">
                            {item.seller_address.state.name}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
