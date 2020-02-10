import React from 'react';

import './styles.css';
import Menu from '../../shared/menu';
import MenuList from './../../components/MenuList/MenuList';

export default function ServiceNew() {
    // const [ thumbnail, setThumbnail ] = useState(null);

    const thumbnail = null;

    return (
        <>
            <Menu/>

            <div className="container mt-3">
                <hr className="bg-primary"/>

                <div className="row mt-5">
                    <div className="col-md-4" style={{ marginLeft: '21%' }}>
                        <h4 className="pull-left">INCLUIR NOVOS SERVIÇOS</h4>
                    </div>
                </div>

                <div className="row">
                    <MenuList/>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control2" placeholder="Título"/>
                            </div>

                            <div className="col-md-3">
                                <select name="category" id="category" className="form-control form-control2">
                                    <option value="0">Categoria</option>
                                    <option value="1">Maquiagem</option>
                                    <option value="2">Unha</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-9">
                                <h5 className="font-primary pull-left">Descrição</h5>

                                <textarea name="" id="" cols="30" rows="5" className="form-control form-control2"></textarea>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <h5 className="font-primary pull-left">Fotos</h5>
                            </div>

                            <div className="col-md-3">
                                <label id="thumbnail" className={ "preview " + (thumbnail ? 'has-thumbnail' : '')}>
                                </label>
                            </div>

                            <div className="col-md-3" style={{ height: 130 }}>
                                <label className="btn btn-primary-inverse form-control" style={{ width: 150, position: 'absolute', left: 0, bottom: 0 }}>
                                    Enviar mais fotos
                                    <input type="file" className="d-none"/>
                                    {/* <input type="file" className="d-none" onChange={ handleThumbnail }/> */}
                                </label>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <h5 className="font-primary pull-left">Preço</h5>
                            </div>

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control form-control2" placeholder="R$ 100,00"/>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h4 className="font-orange pull-left">Legal :)</h4>

                                <br/>

                                <span className="pull-left">
                                    Esse valor está dentro dos valores do mercado.<br/>
                                    Grandes chances de escolherem o seu trabalho.
                                </span>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <div className="form-group pull-left">
                                    <button className="btn btn-primary-inverse" style={{ color: "#fbb26a" }}>Salvar e continuar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}