import React, { useState, useEffect } from 'react';

interface Idata {
    Id: number;
    ScenarioType: number;
    Name: string;
    Icon: string;
    OnOrOff: boolean;
    HomeOrOutdoor: boolean;
    IncreaseOrDecrease: number;
    Window: number;
    Garage: boolean;
    Valve: boolean;
    Time: number;
}

let MyData: Idata[] = [
    {   "Id": 0,
        "ScenarioType": 1,
        "Name": "Oturma Odası",
        "Icon": "ri-lightbulb-line",
        "OnOrOff": true,
        "HomeOrOutdoor": false,
        "IncreaseOrDecrease": 0,
        "Window": 0,
        "Garage": false,
        "Valve": false,
        "Time": 0
     },
     {   "Id": 1,
        "ScenarioType": 1,
        "Name": "Yatak Odası",
        "Icon": "ri-lightbulb-line",
        "OnOrOff": true,
        "HomeOrOutdoor": false,
        "IncreaseOrDecrease": 0,
        "Window": 0,
        "Garage": false,
        "Valve": false,
        "Time": 0
     },
     {   "Id": 2,
        "ScenarioType": 2,
        "Name": "Alarm",
        "Icon": "fa-solid fa-bell",
        "OnOrOff": false,
        "HomeOrOutdoor": true,
        "IncreaseOrDecrease": 0,
        "Window": 1,
        "Garage": false,
        "Valve": false,
        "Time": 0
     },
     {   "Id": 3,
        "ScenarioType": 3,
        "Name": "Vana",
        "Icon": "ri-contrast-drop-line",
        "OnOrOff": false,
        "HomeOrOutdoor": false,
        "IncreaseOrDecrease": 0,
        "Window": 2,
        "Garage": false,
        "Valve": true,
        "Time": 0
     },
     {   "Id": 4,
        "ScenarioType": 4,
        "Name": "Panel Kombi",
        "Icon": "fa-solid fa-temperature-high",
        "OnOrOff": false,
        "HomeOrOutdoor": true,
        "IncreaseOrDecrease": 25.0,
        "Window": 0,
        "Garage": false,
        "Valve": false,
        "Time": 0
     },
     {   "Id": 5,
        "ScenarioType": 5,
        "Name": "Perde",
        "Icon": "ri-window-2-line",
        "OnOrOff": false,
        "HomeOrOutdoor": true,
        "IncreaseOrDecrease": 0,
        "Window": 2,
        "Garage": false,
        "Valve": false,
        "Time": 0
     },
     {   "Id": 6,
        "ScenarioType": 6,
        "Name": "Garaj",
        "Icon": "fa-solid fa-warehouse",
        "OnOrOff": false,
        "HomeOrOutdoor": true,
        "IncreaseOrDecrease": 0,
        "Window": 1,
        "Garage": false,
        "Valve": false,
        "Time": 0
     },
];


function Home() {
    const [myArray, setMyArray] = useState<Idata[]>([]);
    const [mySelectedArray, setMySelectedArray] = useState<Idata[]>([]);
    const [updateState, setUpdateState] = useState(false);
    const [position, setPosition] = useState(0);
    const [positionlenght, setPositionlenght] = useState(0);




    useEffect(()=>{
        setMyArray(MyData);
    },[myArray]);


    function handleOnClick(index: number) {
        setPosition(index);
        var i;
        let array = [];  
        for(i=0; i<positionlenght+1; i++)
        {   
            array.push(i)
        }
        // küçükten büyüğe sıralar
        console.log("*",array.sort((a,b)=>{
            return a - b;
        }));

        // let a = (position - 1) % positionlenght;
        // setPosition(a);
    };

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
                {myArray.map((data,index)=>{
                    return (
                        <div key={index} className="control-list-cover">
                    <div className="control-list-item control-list-item-alert">
                        <div className="control-list-name">
                            <p>{data.Name}</p>
                        </div>
                        <div className="control-list-icon">
                            <i className={data.Icon}></i>
                        </div>
                        {data.ScenarioType === 1 ? (<div className="control-list-onoff">
                            <button type='button' onClick={(e) => {data.OnOrOff = true; setUpdateState(!updateState) }}>I</button>
                            <button type='button' onClick={(e) => {data.OnOrOff = false; setUpdateState(!updateState)}}>0</button>
                        </div>) : "" }
                        {data.ScenarioType === 2 ? (<div className="control-list-onoff">
                            <button type='button' onClick={(e) => { data.HomeOrOutdoor = true; setUpdateState(!updateState)}}>Ev</button>
                            <button type='button' onClick={(e) => { data.HomeOrOutdoor = false; setUpdateState(!updateState)}}>Dış</button>
                        </div>) : "" }
                        {data.ScenarioType === 3 ? (<div className="control-list-onoff">
                            <button type='button' onClick={(e) => { data.Valve = true; setUpdateState(!updateState)}}>I</button>
                            <button type='button' onClick={(e) => { data.Valve = false; setUpdateState(!updateState)}}>0</button>
                        </div>) : "" }
                        {data.ScenarioType === 4 ? (<div className="control-list-onoff contol-list-incdec">
                            <button type='button' onClick={(e) => { data.IncreaseOrDecrease = data.IncreaseOrDecrease - 0.5; setUpdateState(!updateState)}}>-</button>
                            <p>{data.IncreaseOrDecrease.toFixed(1)}</p>
                            <button type='button' onClick={(e) => {data.IncreaseOrDecrease = data.IncreaseOrDecrease + 0.5; setUpdateState(!updateState)}}>+</button>
                        </div>) : "" }
                        {data.ScenarioType === 5 ? (<div className="control-list-onoff contol-list-incdec">
                            <button type="button" onClick={(e) => { data.Window = 1; setUpdateState(!updateState)}}><i className="ri-arrow-up-s-fill"></i></button>
                            <button type="button" onClick={(e) => { data.Window = 0; setUpdateState(!updateState)}}><i className="fa-solid fa-equals"></i></button>
                            <button type="button" onClick={(e) => { data.Window = 2; setUpdateState(!updateState)}}><i className="ri-arrow-down-s-fill"></i></button>
                        </div>) : "" }
                        {data.ScenarioType === 6 ? (<div className="control-list-onoff contol-list-incdec">
                            <button type="button" onClick={(e) => { data.Garage = !data.Garage; setUpdateState(!updateState)}} className="garage-text"><p>Aç/Kapat</p></button>
                        </div>) : "" }
                        <div className="control-list-add">
                            <button type='button' onClick={(e) => {setMySelectedArray([...mySelectedArray, data]); setPositionlenght(mySelectedArray.length)}}>Ekle</button>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
            <div className="item-right">
                <div className="contol-list-show-cover">
                    {mySelectedArray.map((selectedarray, index)=>{
                        return (
                            <div key={index} className="displayed-item">
                                {index === position ? (<div>
                                <div className="displayed-item-top">
                                    <div className="displayed-item-name">
                                        <p>Gecikme süresi</p>
                                    </div>
                                    <div className="displayed-item-button">
                                        <div>
                                            <button type='button' onClick={(e) => { selectedarray.Time = selectedarray.Time -10; setUpdateState(!updateState) }}>-10</button>
                                            <button type='button' onClick={(e) => { selectedarray.Time = selectedarray.Time - 1; setUpdateState(!updateState) }}>-1</button>
                                        </div>
                                        <p>{selectedarray.Time} sn</p>
                                        <div>
                                            <button type='button' onClick={(e) => { selectedarray.Time = selectedarray.Time + 1; setUpdateState(!updateState) }} >+1</button>
                                            <button type='button' onClick={(e) => { selectedarray.Time = selectedarray.Time + 10; setUpdateState(!updateState) }} >+10</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="displayed-item-bottom">
                                    <div className="displayed-item-name bottom-name">
                                        <p> {index} {selectedarray.Name}</p>
                                    </div>
                                    <div className="displayed-item-inner">
                                        <div className="displayed-item-inner-button-left">
                                            <i className="fa-solid fa-bell"></i>
                                            {selectedarray.ScenarioType === 1 ? (<button type="button">{selectedarray.OnOrOff === true ? 1 : 0}</button>) : "" }
                                            {selectedarray.ScenarioType === 2 ? (<button type="button">{selectedarray.HomeOrOutdoor === true ? "Ev" : "Dış"}</button>) : "" }
                                            {selectedarray.ScenarioType === 3 ? (<button type="button">{selectedarray.Valve === true ? 1 : 0}</button>) : "" }
                                            {selectedarray.ScenarioType === 4 ? (<button type="button">{selectedarray.IncreaseOrDecrease}</button>) : "" }
                                            {selectedarray.ScenarioType === 5 ? (<button type="button">
                                                {selectedarray.Window === 0 ? (<i className="fa-solid fa-equals"></i>) : ""}
                                                {selectedarray.Window === 1 ? (<i className="ri-arrow-up-s-fill"></i>) : ""}
                                                {selectedarray.Window === 2 ? (<i className="ri-arrow-down-s-fill"></i>) : ""}
                                            </button>) : "" }
                                            {selectedarray.ScenarioType === 6 ? (<button type="button">{selectedarray.Garage === true ? "Açık" : "Kapalı"}</button>) : "" }
                                        </div>
                                        <div className="displayed-item-inner-button-right">
                                            <button type="button" onClick={(e) => { handleOnClick(index) }} ><i className="ri-arrow-up-line"></i></button>
                                            <button type="button"><i className="ri-arrow-down-line"></i></button>
                                            <button type="button"><i className="ri-delete-bin-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                                </div>) : ""}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
  )
}

export default Home