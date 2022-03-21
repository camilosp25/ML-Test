import React, {useContext, useState} from "react";
import './search.css';
import {search} from '../../helpers/productsService';
import {useNavigate} from "react-router";
import {ListContext} from "../ListContext";

export const Search = () => {

    const imageLogoPath = `/assets/logo.png`;
    const imageSearchPath = `/assets/ic_Search.png`;
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const {setProducts} = useContext(ListContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        search(inputValue).then(data => {
            setProducts(data);
            navigate('/items');
        });

    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <div className="container-search">
                <img className="img-logo mb-2 mt-2" src={imageLogoPath}/>
                <div className="container-search-group">
                    <div className="input-group mb-2 mt-2">
                        <form className="form-search" onSubmit={handleSubmit}>
                            <input type="text" className="form-control" placeholder="Nunca dejes de buscar"
                                   aria-label="Username"
                                   aria-describedby="basic-addon1" value={inputValue} onChange={handleInputChange}/>
                            <span className="input-group-text" id="basic-addon1" onClick={handleSubmit}>
                                <img src={imageSearchPath}/>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
