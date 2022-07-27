import React from 'react';
import Data from '../data/data.json';

interface Idata {
    name: string;
    icon: string;
    degree: number;
    onoff: boolean;
}


function home() {
  return (
        <div className="item-cover">
            <div className="item-left">
                <div className="control-top-cover">
                    <div className="control-top">
                        <input type="text" placeholder="SENARYO İSMİ GİRİNİZ" className="control-input"/>
                        <div className="control-top-icon">
                            <a href="#">
                                <i className="ri-close-circle-line color-red"><span>İptal</span></i>
                            </a>
                            <a href="#">
                                <i className="ri-download-cloud-line color-green"><span>Kaydet</span></i>
                            </a>
                        </div>
                    </div>
                    <div className="control-bottom">
                        <div>
                            <input type="radio" id="all"  name="inpradio"/>
                            <label htmlFor="all">Hepsi</label>
                        </div>
                        <div>
                            <input type="radio" id="alan"  name="inpradio"/>
                            <label htmlFor="alan">Alan</label>
                        </div>
                        <div>
                            <input type="radio" id="tip"  name="inpradio"/>
                            <label htmlFor="tip">Tip</label>
                        </div>
                        <div>
                            <input type="radio" id="atoz"  name="inpradio"/>
                            <label htmlFor="atoz">A-Z</label>
                        </div>
                    </div>
                </div>
                <div className="control-list-cover">
                    <div className="control-list-item control-list-item-alert">
                        <div className="control-list-name">
                            <p>Alarm</p>
                        </div>
                        <div className="control-list-icon">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <div className="control-list-onoff">
                            <button>Ev</button>
                            <button>Dış</button>
                        </div>
                        <div className="control-list-add">
                            <button>Ekle</button>
                        </div>
                    </div>
                    <div className="control-list-item control-list-item-bulb">
                        <div className="control-list-name">
                            <p>2</p>
                        </div>
                        <div className="control-list-icon">
                            <i className="ri-lightbulb-line"></i>
                        </div>
                        <div className="control-list-onoff">
                            <button>I</button>
                            <button>0</button>
                        </div>
                        <div className="control-list-add">
                            <button>Ekle</button>
                        </div>
                    </div>
                    <div className="control-list-item control-list-item-bulb">
                        <div className="control-list-name">
                            <p>3</p>
                        </div>
                        <div className="control-list-icon">
                            <i className="ri-lightbulb-line"></i>
                        </div>
                        <div className="control-list-onoff">
                            <button>I</button>
                            <button>0</button>
                        </div>
                        <div className="control-list-add">
                            <button>Ekle</button>
                        </div>
                    </div>
                    <div className="control-list-item control-list-item-valve">
                        <div className="control-list-name">
                            <p>Vana</p>
                        </div>
                        <div className="control-list-icon">
                            <i className="ri-contrast-drop-line"></i>
                        </div>
                        <div className="control-list-onoff">
                            <button>I</button>
                            <button>0</button>
                        </div>
                        <div className="control-list-add">
                            <button>Ekle</button>
                        </div>
                    </div>
                    <div className="control-list-item control-list-item-combi">
                        <div className="control-list-name">
                            <p>Panel <br/> Kombi</p>
                        </div>
                        <div className="control-list-icon">
                            <i className="fa-solid fa-temperature-high"></i>
                        </div>
                        <div className="control-list-onoff contol-list-incdec">
                            <button>-</button>
                            <p>25.0</p>
                            <button>+</button>
                        </div>
                        <div className="control-list-add">
                            <button>Ekle</button>
                        </div>
                    </div>
                    <div className="control-list-item control-list-item-window">
                        <div className="control-list-name">
                            <p>Perde</p>
                        </div>
                        <div className="control-list-icon">
                            <i className="ri-window-2-line"></i>
                        </div>
                        <div className="control-list-onoff contol-list-incdec">
                            <button type="button"><i className="ri-arrow-up-s-fill"></i></button>
                            <button type="button" disabled><i className="fa-solid fa-equals"></i></button>
                            <button type="button"><i className="ri-arrow-down-s-fill"></i></button>
                        </div>
                        <div className="control-list-add">
                            <button>Ekle</button>
                        </div>
                    </div>
                    <div className="control-list-item control-list-item-garage">
                        <div className="control-list-name">
                            <p>Garaj</p>
                        </div>
                        <div className="control-list-icon">
                            <i className="fa-solid fa-warehouse"></i>
                        </div>
                        <div className="control-list-onoff contol-list-incdec">
                            <button type="button" className="garage-text"><p>Çağır</p></button>
                        </div>
                        <div className="control-list-add">
                            <button>Ekle</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-right">
                <div className="contol-list-show-cover">
                    <div className="displayed-item">
                        <div className="displayed-item-top">
                            <div className="displayed-item-name">
                                <p>Gecikme süresi</p>
                            </div>
                            <div className="displayed-item-button">
                                <div>
                                    <button>-10</button>
                                    <button>-1</button>
                                </div>
                                <p>00 sn</p>
                                <div>
                                    <button>+1</button>
                                    <button>+10</button>
                                </div>
                            </div>
                        </div>
                        <div className="displayed-item-bottom">
                            <div className="displayed-item-name bottom-name">
                                <p>Alarm</p>
                            </div>
                            <div className="displayed-item-inner">
                                <div className="displayed-item-inner-button-left">
                                    <i className="fa-solid fa-bell"></i>
                                    <button type="button">Ev</button>
                                </div>
                                <div className="displayed-item-inner-button-right">
                                    <button type="button"><i className="ri-arrow-up-line"></i></button>
                                    <button type="button"><i className="ri-arrow-down-line"></i></button>
                                    <button type="button"><i className="ri-delete-bin-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="displayed-item">
                        <div className="displayed-item-top">
                            <div className="displayed-item-name">
                                <p>Gecikme süresi</p>
                            </div>
                            <div className="displayed-item-button">
                                <div>
                                    <button>-10</button>
                                    <button>-1</button>
                                </div>
                                <p>00 sn</p>
                                <div>
                                    <button>+1</button>
                                    <button>+10</button>
                                </div>
                            </div>
                        </div>
                        <div className="displayed-item-bottom">
                            <div className="displayed-item-name bottom-name">
                                <p>3</p>
                            </div>
                            <div className="displayed-item-inner">
                                <div className="displayed-item-inner-button-left">
                                    <i className="fa-solid fa-bell"></i>
                                    <button type="button">0</button>
                                </div>
                                <div className="displayed-item-inner-button-right">
                                    <button type="button"><i className="ri-arrow-up-line"></i></button>
                                    <button type="button"><i className="ri-arrow-down-line"></i></button>
                                    <button type="button"><i className="ri-delete-bin-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="displayed-item">
                        <div className="displayed-item-top">
                            <div className="displayed-item-name">
                                <p>Gecikme süresi</p>
                            </div>
                            <div className="displayed-item-button">
                                <div>
                                    <button>-10</button>
                                    <button>-1</button>
                                </div>
                                <p>00 sn</p>
                                <div>
                                    <button>+1</button>
                                    <button>+10</button>
                                </div>
                            </div>
                        </div>
                        <div className="displayed-item-bottom">
                            <div className="displayed-item-name bottom-name">
                                <p>Garaj2</p>
                            </div>
                            <div className="displayed-item-inner">
                                <div className="displayed-item-inner-button-left">
                                    <i className="fa-solid fa-bell"></i>
                                    <button type="button">1</button>
                                </div>
                                <div className="displayed-item-inner-button-right">
                                    <button type="button"><i className="ri-arrow-up-line"></i></button>
                                    <button type="button"><i className="ri-arrow-down-line"></i></button>
                                    <button type="button"><i className="ri-delete-bin-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {Data.map((datas,index)=>{
                return <p key={datas.Id}> {datas.Name} </p>
            })} */}
        </div>
  )
}

export default home