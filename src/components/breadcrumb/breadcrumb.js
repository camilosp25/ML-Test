import React, {useContext} from "react";
import {Link} from "react-router-dom";
import './breadcrumb.css';
import {ListContext} from "../ListContext";

export const Breadcrumb = ({isDetail = false}) => {

    const {response} = useContext(ListContext);

    const validateResponse = () => {
        if (Object.keys(response).length > 0) {
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
                            {/*<li className="breadcrumb-item active" aria-current="page">Library</li>*/}
                        </ol>
                    </nav>
                )
            }
        }
    }

    return (
        <>
            <div>
                {
                    validateResponse()
                }
            </div>
        </>
    )
}
