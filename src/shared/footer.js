import React from 'react';

import './footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container bg-primary" style={{ minWidth: '100%' }}>
                    <ul className="nav justify-content-end p-3">
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Dúvidas</a></li>
                        <li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>

                {/* <div className="row">
                    <div className="col-md-12 bg-primary">
                    </div>
                </div> */}
            </footer>
        </>
    );
}