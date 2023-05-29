import React, {useContext} from "react";
import {LeafletMouseEvent} from "leaflet";
import {Marker, useMap, useMapEvents} from "react-leaflet";
import {StateContext} from "./App";

import {PopulationMarker} from "./PopulationMarker";
import {setCoord} from "./State";

export function LocationMarker() {
    const {state,dispatch} = useContext(StateContext)
    const map = useMap()
    useMapEvents(
        {
            click: (e:LeafletMouseEvent)=>{
                dispatch(setCoord(e.latlng))
                map.flyTo(e.latlng,12)
            }
        }
    )
    if (state.coord !== null) {
        return (
            <div>
                <PopulationMarker/>
            </div>
        )
    } else {
        return null
    }

}