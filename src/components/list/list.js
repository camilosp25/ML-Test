import React, {useContext} from 'react';
import './list.css';
import {Breadcrumb} from '../breadcrumb/breadcrumb';
import {Item} from '../item/item';
import {ListContext} from '../ListContext';

/**
 * Componente listado de resultados de busqueda
 * @returns {JSX.Element}
 * @constructor
 */
export const List = () => {

    const {response} = useContext(ListContext);

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
                return (<div className="container-no-result">No existen resultados para la búsqueda</div>);
            }
        } else {
            return (<div className="container-no-result">No existen resultados para la búsqueda</div>);
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
