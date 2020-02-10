import React from 'react';

import './footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="row">
                    <div className="col-md-12 bg-primary">
                        <ul className="pull-right mt-3 pr-5">
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Dúvidas</a></li>
                            <li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="container">
                </div> */}
            </footer>
        </>
    );
}