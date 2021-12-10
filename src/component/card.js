import React from 'react'
import './card.css'

export default function card({ classes, image, text, pera, dot }) {
    return (
        <div>
            <div className={`card`}>
                <div className="top-container">
                    <img src={image} alt={image} className="image" />
                </div>
                <div className={`text`}>Add to {text}</div>
                <div className={`peraa`}>Minimum version {pera}</div>
                <span className={`dot`}>. . . . . . . . . . . . . . .</span>
                <div className="d-flex justify-content-center align-content-center">
                    <button className="button2">Add & Install Extension</button>
                </div>
            </div>
        </div>


    )
}
