import React, { useState } from 'react';

import './breadcumb.css';

export default function Breadcumb(props) {
    // const [ breadcumbs, setBreadcumbs ] = useState(props.breadcumbs);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    { props.breadcumbs.map((b, index) => {
                        return <li key={ index } className={ "breadcrumb-item" + ((index == (props.breadcumbs.length - 1)) ? " active" : "") } aria-current="page"><strong>{ b }</strong></li>
                    })}
                </ol>
            </nav>            
        </>
    );
}
