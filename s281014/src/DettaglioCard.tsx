import React, {useContext} from "react";
import {StateContext} from "./App";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {PopulationMarker} from "./PopulationMarker";
import {LatLng} from "leaflet";

export function DettaglioCard () {
    const {state,dispatch} = useContext(StateContext)
    const center = new LatLng(parseFloat(state.markerSelezionato?.location.latitude as string), parseFloat(state.markerSelezionato?.location.longitude as string))
    return (
        <div>
            <div className="card">
                <div className="card">
                    <div className="card-body" style={{display:"flex", flexDirection:"row"}}>
                        <div>
                            <h5 className="card-title">ID: {state.markerSelezionato?.id}</h5>
                            <p className="card-text">Lat: {state.markerSelezionato?.location.latitude} Long: {state.markerSelezionato?.location.longitude}</p>
                            <p className="card-text">Street: {state.markerSelezionato?.location.street.name}</p>
                            <p className="card-text">Date: {state.markerSelezionato?.month}</p>
                            <p className="card-text">Category: {state.markerSelezionato?.category}</p>
                            <p className="card-text">Location_type: {state.markerSelezionato?.location_type}</p>
                            {state.markerSelezionato?.outcome_status !== null &&
                                <p className="card-text">Status: {state.markerSelezionato?.outcome_status.category}</p>
                            }
                        </div>
                        <div style={{width:"20em", height:"20em"}}>
                            <MapContainer style={{width:"20em", minHeight:"20vh"}}
                                          className={"leaflet-container2"}
                                          center={center}
                                          zoom={16}>
                                <TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}/>
                                <Marker position={center}></Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}