import React from "react";
import NumberFormat from 'react-number-format';
import './item.css';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {conditionText} from "../../helpers/utils";

export const Item = ({item}) => {

    const thumbnail = item.thumbnail;
    const navigate = useNavigate();

    const handleDetail = (e) => {
        e.preventDefault();

        navigate(`/items/${item.id}`);

    }

    return (
        <>
            <div className="container-item">
                <div className="row">
                    <div className="col-9">
                        <Link to={`/items/${item.id}`} onClick={handleDetail}>
                            <img src={thumbnail} className="thumbnail"/>
                        </Link>
                        <div className="product-details">
                            <div className="price">
                                <Link to={`/items/${item.id}`} onClick={handleDetail}>
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
                                {conditionText(item.condition)}
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
