import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './breadcrumb.css';
import {ListContext} from '../ListContext';

/**
 * Componente manejador del breadcrumb
 * @param isDetail
 * @returns {JSX.Element}
 * @constructor
 */
export const Breadcrumb = ({isDetail = false}) => {

    const {response} = useContext(ListContext);

    /**
     * Validador de respuesta del servicio search para condicionar datos que se muestran en breadcrumb
     * @returns {JSX.Element}
     */
    const validateResponse = () => {
        if (Object.keys(response).length > 0) {
            //Servicio retorna filter
            if (response.filters.length > 0) {
                return (
                    <nav aria-label="breadcrumb" className="breadcrumb-container">
                        {
                            ((isDetail) ? (<Link to={"/items"} className="back-to-list">Volver al listado</Link>) : '')
                        }
                        <ol className="breadcrumb">
                            {
                                response.filters.map((item, index) => (
                                    item.values.map(value => (
                                        <li className={"breadcrumb-item " + ((response.filters.length === (index + 1)) ? 'active' : '')}>{value.name}</li>
                                    ))
                                ))
                            }
                        </ol>
                    </nav>
                )
                //Servicio no retorna filter se muestra lo que se envio en la caja de busqueda
            } else {
                return (
                    <nav aria-label="breadcrumb" className="breadcrumb-container">
                        {
                            ((isDetail) ? (<Link to={"/items"} className="back-to-list">Volver al listado</Link>) : '')
                        }
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">{response.query}</li>
                        </ol>
                    </nav>
                )
            }
            //Se llega al componente por url
        } else {
            return (
                <nav aria-label="breadcrumb" className="breadcrumb-container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Detalle de producto</li>
                    </ol>
                </nav>
            )
        }
    }

    return (
        <>
            {
                validateResponse()
            }
        </>
    )
}
