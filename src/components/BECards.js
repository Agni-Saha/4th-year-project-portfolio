import React from 'react'
import './BECards.css'

export default function BECards({ title, file }) {
    return (
        <section className="BE_card_container">
            <h3 className="BE_card_title">
                {title}
            </h3>
            <a href={file} target="_blank" rel="noreferrer">
                <button className="BE_card_button">
                    See More
                </button>
            </a>
        </section>
    )
}
