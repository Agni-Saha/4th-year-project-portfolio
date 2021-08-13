import React, { useEffect, useRef } from 'react'
import web from "../images/cherry-new-in-the-class-1.png"
import AboutInfoItem from "../components/AboutInfoItem"
import gsap from 'gsap'

function About() {
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    useEffect(() => {
        gsap.from([line1, line2, line3], {
            duration: 0.8,
            delay: 0.8,
            ease: "power3.out",
            y: 190,
            stagger: {
                amount: 0.15
            }
        })

    }, [])
    return (
        <div>
            <section id="about" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 
                                d-flex justify-content-center flex-column">
                                    <div className="line-wrap">
                                        <h1 className="about_heading"
                                            ref={element => line1 = element}
                                        >
                                            Hello, I'm <br />
                                        </h1>

                                    </div>
                                    <div className="line-wrap">
                                        <h1 className="brand-name"
                                            ref={element => line2 = element}
                                        >
                                            {" "}Agni Saha
                                        </h1>
                                    </div>
                                    <div className="line-wrap-extra-large">
                                        <p className="about_desc"
                                            ref={element => line3 = element}
                                        >
                                            I'm a Junior Full Stack Developer and currently in
                                            Information Technology major at Jadavpur University, India.
                                            <br /> <br />
                                            I create projects with the belief that “Less is more”
                                            and so I prefer minimalistic and clean design, that has a modern
                                            appealing look.

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} alt="" className="img-fluid animated" />
                                </div>
                            </div>
                            <div className="about__info__items">
                                <div className="about__info__item">
                                    <h1 className="about__info__heading">Education</h1>

                                    <AboutInfoItem
                                        title="School"
                                        items={['Kendriya Vidyalaya No. 2, Salt Lake, Kolkata - 106']}
                                    />
                                    <AboutInfoItem title="Collage" items={['Jadavpur University']} />
                                </div>
                                <div className="about__info__item">
                                    <h1 className="about__info__heading">My Skills</h1>

                                    <AboutInfoItem
                                        title="FrontEnd"
                                        items={['HTML', 'CSS', 'JavaScript', 'React.js']}
                                    />
                                    <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
                                    <AboutInfoItem
                                        title="Database"
                                        items={['PostgreSQL', 'MongoDB', 'Firebase']}
                                    />
                                    <AboutInfoItem title="Design" items={['Photoshop', 'Adobe XD']} />
                                </div>
                                <div className="about__info__item">
                                    <h1 className="about__info__heading">Experiences</h1>

                                    <AboutInfoItem title="2020-2021" items={['null']} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
