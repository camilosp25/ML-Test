import React from "react";
import './list.css';
import {Breadcrumb} from "../breadcrumb/breadcrumb";
import {Item} from "../item/item";

export const List = () => {

    const items = [
        {id: 1111, productName: 'Iphone 14', price: '4000000', status:'casi nuevo', location: 'Bogotá'},
        {id: 2222, productName: 'Tv chimba', price: '4000000', status:'casi nuevo', location: 'Bogotá'},
        {id: 3333, productName: 'Multifuncional QK', price: '4000000', status:'casi nuevo', location: 'Bogotá'},
        {id: 4444, productName: 'otra vaina', price: '4000000', status:'casi nuevo', location: 'Bogotá'},
    ]

    return (
        <>
            <div className="main-container">
                <Breadcrumb/>
                <div className="container-list">
                    {
                        items.map(item => (
                            <Item
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
