import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { NavLink } from 'react-router-dom'
import web from "../images/pngwing.com.png"

export default function Home() {

    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    useEffect(() => {
        gsap.from([line1, line2, line3], {
            duration: 0.8,
            delay: 0.8,
            ease: "power3.out",
            y: 130,
            stagger: {
                amount: 0.15
            }
        })
    }, [])
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-xs-10 pt-5 pt-lg-0 order-2 order-lg-1 
                                d-flex justify-content-center flex-column home-details mb-4">

                                    <div className="line-wrap">
                                        <h1 className="home-header"
                                            ref={element => line1 = element}
                                        >
                                            Hi, I'm <br />
                                        </h1>

                                    </div>
                                    <div className="line-wrap">
                                        <h1 className="brand-name"
                                            ref={element => line2 = element}
                                        >
                                            Utpal Kumar Roy
                                        </h1>
                                    </div>
                                    <div className="line-wrap-larger">
                                        <div ref={element => line3 = element}>
                                            <h2 className="my-3">
                                                We are the team of talented developer making websites
                                            </h2>
                                            <div className="mt-3">
                                                <NavLink to="/about" className="btn-get-started">
                                                    More About Me
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} alt="" className="img-fluid img animated px-auto " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
