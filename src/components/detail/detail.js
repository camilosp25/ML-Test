import React, {useEffect, useState} from "react";
import NumberFormat from 'react-number-format';
import './detail.css';
import {Breadcrumb} from "../breadcrumb/breadcrumb";
import {conditionText} from "../../helpers/utils";
import {getDetail} from "../../helpers/productsService";
import {useParams} from "react-router";

export const Detail = () => {

    const [detail, setDetail] = useState({
        detailData: {}, descriptionData: {}
    });

    const {detailData, descriptionData} = detail;

    const {id} = useParams();

    useEffect(() => {
        getDetail(id).then((data) => {
            setDetail({
                detailData: data.detailData,
                descriptionData: data.descriptionData
            })
        });
    }, []);

    let imgProduct = '';

    if (detailData.pictures) {
        imgProduct = detailData.pictures[0].url;
    }

    return (
        <>
            <div className="main-container main-container">
                <Breadcrumb isDetail={true}/>
                <div className="container-detail">
                    <div className="product-detail-container">
                        <div className="product-image-container">
                            <img className="product-image" src={imgProduct}/>
                            <div className="product-description-title">
                                Descripción del producto
                            </div>
                            <div className="product-description">
                                {descriptionData.plain_text}
                            </div>
                        </div>
                        <div className="product-specs-container">
                            <div className="product-status">
                                {conditionText(detailData.condition)}
                            </div>
                            <div className="product-name">
                                {detailData.title}
                            </div>
                            <div className="product-price">
                                <NumberFormat value={detailData.price} displayType={'text'} thousandSeparator={'.'}
                                              decimalSeparator={','} prefix={'$'}/>
                            </div>
                            <div className="button-buy">
                                <button className="btn">Comprar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
