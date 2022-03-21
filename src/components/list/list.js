import React, {useContext} from 'react';
import './list.css';
import {Breadcrumb} from '../breadcrumb/breadcrumb';
import {Item} from '../item/item';
import {UserContext} from '../UserContext';

export const List = () => {

    const {response} = useContext(UserContext);

    const validateResponse = () => {
        if (Object.keys(response).length > 0) {
            if (response.results.length > 0) {
                return response.results.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                    />
                ))
            } else {
                return 'No existen resultados para la búsqueda';
            }
        } else {
            return 'No existen resultados para la búsqueda';
        }
    };

    return (
        <>
            <div className="main-container">
                <Breadcrumb/>
                <div className="container-list">
                    {
                        validateResponse()
                    }
                </div>
            </div>
        </>
    )
}
