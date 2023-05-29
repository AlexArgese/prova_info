import React from 'react'

export function LoadingPane() {
    return (
        <div>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h3>Loading...</h3>
        </div>
    )
}
