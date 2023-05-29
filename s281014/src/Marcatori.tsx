import {Marker} from "react-leaflet";
import L, {LatLng} from "leaflet";
import React, {useContext} from "react";
import {StateContext} from "./App";
import {setMarker} from "./State";
import {useNavigate} from "react-router-dom";

export function Marcatori() {
    const {state,dispatch} = useContext(StateContext)
    const Navigate = useNavigate()
    return (
        <div>
            { state.markersSel &&
                state.markersSel.map((c) =>
                    <Marker position={new LatLng(parseFloat(c.location.latitude), parseFloat(c.location.longitude))}
                            key={c.id}
                            eventHandlers={{click: (event: L.LeafletMouseEvent) => {
                                    dispatch(setMarker(c))
                                    Navigate(`/dettaglio/${c.id}`)
                                }}}
                    />
                )
            }
        </div>
    )
}