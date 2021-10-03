import React from 'react'
import "./AboutInfoItem.css"

export default function AboutInfoItem({ title = 'Title', items = ['HTML', 'CSS'], topMargin = true }) {
    return (
        <div className="aboutInfoItemStyle">
            <h1 className="title">{title}</h1>
            <div className={`items${topMargin ? ' top_margin' : ''}`}
            >
                {
                    items.filter((item, index) => index < 3)
                        .map((filteredItem, index) => (
                            <div className="item" key={index}>
                                <p>{filteredItem}</p>
                            </div>
                        ))
                }
            </div>
            <div className={`items second_line${topMargin ? ' top_margin' : ''}`}>
                {
                    (items.length >= 3) ?
                        (items.filter((item, index) => (index >= 3 && index < 6))
                            .map((filteredItem, index) => (
                                <div className="item" key={index}>
                                    <p>{filteredItem}</p>
                                </div>
                            )))
                        : null
                }
            </div>
            <div className={`items third_line${topMargin ? ' top_margin' : ''}`}>
                {
                    (items.length >= 6) ?
                        (items.filter((item, index) => (index >= 6 && index < 9))
                            .map((filteredItem, index) => (
                                <div className="item" key={index}>
                                    <p>{filteredItem}</p>
                                </div>
                            )))
                        : null
                }
            </div>
            <div className={`items fourth_line${topMargin ? ' top_margin' : ''}`}>
                {
                    (items.length >= 9) ?
                        (items.filter((item, index) => (index >= 9))
                            .map((filteredItem, index) => (
                                <div className="item" key={index}>
                                    <p>{filteredItem}</p>
                                </div>
                            )))
                        : null
                }
            </div>
        </div>
    )
}
