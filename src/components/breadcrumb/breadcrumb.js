import React from "react";
import './breadcrumb.css';

export const Breadcrumb = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    )
}
