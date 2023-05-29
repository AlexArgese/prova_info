import React from "react";

interface ErrorPaneProps {
    message: string
}

export function ErrorPane({message}: ErrorPaneProps) {
    return (
        <div style={{display:"flex", alignItems:"center", border: "groove 10px red", padding: "0.25em", backgroundColor:"lightpink", margin:"1em 0"}}>
            <h4 style={{margin:"0 5px 5px 0"}}>Errore: </h4>
            <p style={{margin:0}}>{message}</p>
        </div>
    )
}
