import React from "react";
import NumberFormat from 'react-number-format';
import './item.css';
import {Link} from "react-router-dom";

export const Item = ({item}) => {

    const thumbnail = `/assets/img.png`;

    return (
        <>
            <div className="container-item">
                <div className="row">
                    <div className="col-8">
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
                                    {item.productName}
                                </Link>
                            </div>
                            <div className="item-detail">
                                {item.status}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="seller-location">
                            {item.location}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
