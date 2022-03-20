import React from "react";
import './search.css';

export const Search = () => {

    const imageLogoPath = `/assets/logo.png`;
    const imageSearchPath = `/assets/ic_Search.png`;
    return (
        <>
            <div className="container-search">
                <img className="img-logo mb-2 mt-2" src={imageLogoPath}/>
                <div className="container-search-group">
                    <div className="input-group mb-2 mt-2 col-5">
                        <input type="text" className="form-control" placeholder="Nunca dejes de buscar"
                               aria-label="Username"
                               aria-describedby="basic-addon1"/>
                        <span className="input-group-text" id="basic-addon1">
                                <img src={imageSearchPath}/>
                            </span>
                    </div>
                </div>
            </div>
        </>
    )
}
