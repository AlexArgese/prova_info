import {LatLng} from "leaflet";
interface MarkerProps {
    "category": string,
    "location_type": string,
    "location": {
        "latitude": string,
        "street": {
            "id": number,
            "name": string
        },
        "longitude": string
    },
    "context": string,
    "outcome_status": {
        "category": string,
        "date": string
    } | null,
    "persistent_id": string,
    "id": number,
    "location_subtype": string,
    "month": string
}
export interface State {
    coord?: LatLng,
    markersSel?: MarkerProps[] |undefined
    annoSel:string,
    meseSel:string,
    loading: boolean,
    error?: Error,
    markerSelezionato?: MarkerProps
    categorySel : string[]
}
export const initialState: State = {
    annoSel:"2020",
    meseSel:"12",
    loading: false,
    categorySel: []
}

export type Action =
    | {type: "setCoord", coord: LatLng}
    | {type: "setMarkersSel", markersSel: MarkerProps[]}
    | {type: "setAnno", anno: string}
    | {type: "setMese", mese: string}
    | {type: "setError", error: Error}
    | {type: "setMarker", markerSelezionato: MarkerProps}

export const setCoord = (coord: LatLng): Action => ({type: "setCoord", coord})
export const setMarkersSel = (markersSel: MarkerProps[]): Action => ({type: "setMarkersSel", markersSel})
export const setAnno = (anno: string): Action => ({type: "setAnno", anno})
export const setMese = (mese: string): Action => ({type: "setMese", mese})
export const setError = (error: Error): Action => ({type: "setError", error})
export const setMarker = (markerSelezionato: MarkerProps): Action => ({type: "setMarker", markerSelezionato})



export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "setCoord": return {...state,
            coord: action.coord,
            markersSel: undefined,
            loading:true
        }
        case "setMarkersSel": return {...state,
            markersSel: action.markersSel,
            loading:false
        }
        case "setAnno": return {...state,
            annoSel: action.anno
        }
        case "setMese": return {...state,
            meseSel: action.mese
        }
        case "setError": return {...state,
            loading: false,
            error: action.error,
            markersSel: []
        }
        case "setMarker": return {...state,
            markerSelezionato: action.markerSelezionato
        }
    }
}