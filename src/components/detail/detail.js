import React from "react";
import NumberFormat from 'react-number-format';
import './detail.css';
import {Breadcrumb} from "../breadcrumb/breadcrumb";
import {useParams} from "react-router";

export const Detail = () => {

    const imgProduct = `/assets/img.png`;

    const {id} = useParams();

    return (
        <>
            <div className="main-container main-container">
                <Breadcrumb/>
                <div className="container-detail">
                    <div className="product-detail-container">
                        <div className="product-image-container">
                            <img className="product-image" src={imgProduct}/>
                            <div className="product-description-title">
                                Descripción del producto
                            </div>
                            <div className="product-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="product-specs-container">
                            <div className="product-status">
                                Nuevo
                            </div>
                            <div className="product-name">
                                Nombre producto bien largo para poder ajustar el texto en dado caso
                            </div>
                            <div className="product-price">
                                <NumberFormat value='4000000' displayType={'text'} thousandSeparator={'.'}
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
