import React, {useContext, useEffect} from "react";
import {StateContext} from "./App";
import {setCoord, setError, setMarkersSel} from "./State";
import L, {LatLng, LeafletMouseEvent} from "leaflet";
import {useMap, useMapEvents} from "react-leaflet";
import {Marcatori} from "./Marcatori";



export function PopulationMarker () {
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

    useEffect(() => {
        fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${state.coord?.lat}&lng=${state.coord?.lng}&date=${state.annoSel}-${state.meseSel}`, {mode:'cors'})
            .then(v => v.json())
            .then(j => j!==null?
                dispatch(setMarkersSel(j)):
                dispatch(setMarkersSel([])))
            .catch(e => dispatch(setError(e)))
    }, [state.coord?.lat, state.coord?.lng, state.coord, state.annoSel, state.meseSel, dispatch])

    return (
        <div>
            {state.markersSel && state.coord !== null
                && <Marcatori/>}
        </div>
        )
}