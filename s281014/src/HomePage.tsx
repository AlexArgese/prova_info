import {MapContainer, TileLayer} from "react-leaflet";
import {LocationMarker} from "./LocationMarker";
import React, {useContext} from "react";
import {StateContext} from "./App";
import {setAnno, setMese} from "./State";
import {PopulationMarker} from "./PopulationMarker";
import {LoadingPane} from "./LoadingPane";
import {ErrorPane} from "./ErrorPane";

export function HomePage() {
    const {state,dispatch} = useContext(StateContext)
    return (
        <div style={{backgroundColor: "lightblue"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={{marginTop: "1em", marginRight: "1em" }}>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            Seleziona Anno
                        </button>
                        <ul className="dropdown-menu">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setAnno("2020"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="firstRadio"/>
                                        <label className="form-check-label" htmlFor="firstRadio">2020</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setAnno("2021"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="secondRadio"/>
                                        <label className="form-check-label" htmlFor="secondRadio">2021</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setAnno("2022"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="thirdRadio"/>
                                        <label className="form-check-label" htmlFor="thirdRadio">2022</label>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div style={{marginTop: "1em", marginLeft:"1em"}}>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            Seleziona Mese
                        </button>
                        <ul className="dropdown-menu">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("01"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="firstRadio"/>
                                    <label className="form-check-label" htmlFor="firstRadio">Gennaio</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("02"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="secondRadio"/>
                                    <label className="form-check-label" htmlFor="secondRadio">Febbraio</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("03"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="thirdRadio"/>
                                    <label className="form-check-label" htmlFor="thirdRadio">Marzo</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("04"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="firstRadio"/>
                                    <label className="form-check-label" htmlFor="firstRadio">Aprile</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("05"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="secondRadio"/>
                                    <label className="form-check-label" htmlFor="secondRadio">Maggio</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("06"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="thirdRadio"/>
                                    <label className="form-check-label" htmlFor="thirdRadio">Giugno</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("07"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="firstRadio"/>
                                    <label className="form-check-label" htmlFor="firstRadio">Luglio</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("08"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="secondRadio"/>
                                    <label className="form-check-label" htmlFor="secondRadio">Agosto</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("09"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="thirdRadio"/>
                                    <label className="form-check-label" htmlFor="thirdRadio">Settembre</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("10"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="firstRadio"/>
                                    <label className="form-check-label" htmlFor="firstRadio">Ottobre</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("11"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="secondRadio"/>
                                    <label className="form-check-label" htmlFor="secondRadio">Novembre</label>
                                </li>
                                <li className="list-group-item">
                                    <input onClick={()=>dispatch(setMese("12"))} className="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                           id="thirdRadio"/>
                                    <label className="form-check-label" htmlFor="thirdRadio">Dicembre</label>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div  style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                {state.loading && !state.markersSel
                    && <LoadingPane/>}
                {!state.loading && state.error
                    && <ErrorPane message={state.error.message}/>}
            </div>
            <div style={{border: "solid 2px blue"}}>
                <MapContainer className={"leaflet-container"} center={[54.5445, -4.0649]} zoom={6}>
                    <TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}/>
                    <PopulationMarker/>
                </MapContainer>
            </div>
        </div>
    )
}