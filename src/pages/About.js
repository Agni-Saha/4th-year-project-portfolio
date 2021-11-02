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
            y: 265,
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
                                            {" "}Utpal Kumar Ray
                                        </h1>
                                    </div>
                                    <div className="line-wrap-extra-large">
                                        <p className="about_desc"
                                            ref={element => line3 = element}
                                        >
                                            I'm presently employed at Department of
                                            Information Technology at Jadavpur University, India.
                                            <br /> <br />
                                            The subjects that I have taught are -
                                            Parallel Processing, Software Engineering ,Software Quality
                                            Management, Real Time and Embedded System, Computer Networks,
                                            Computer Organization and Architecture, Distributed System,
                                            Operating System, Cryptography, Network Security
                                            and Information Security
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
                                        title="Masters in Technology (M.Tech.) on Electrical Engineering"
                                        items={['Indian Institute of Technology, Kanpur']}
                                    />
                                    <AboutInfoItem
                                        title="Bachelor in Technology (B.Tech.)k on Electronics and Tele Comm Engg"
                                        items={['Jadavpur University, Kolkata']}
                                    />
                                    <AboutInfoItem
                                        title="Higher Secondary Examination"
                                        items={['West Bengal Council of Higher Secondary Education']}
                                    />
                                    <AboutInfoItem
                                        title=" Secondary Examination"
                                        items={['West Bengal Council of Higher Secondary Education']}
                                    />
                                </div>
                                <div className="about__info__item">
                                    <h1 className="about__info__heading">My Skills</h1>

                                    <AboutInfoItem
                                        title="Operating Systems"
                                        items={['UX', 'UNIX', 'SOLARIS', 'Ubuntu', 'CTRON', 'iRMX', 'LINUX', 'Windows']}
                                        topMargin={false}
                                    />
                                    <AboutInfoItem
                                        title="Languages"
                                        items={['C', 'C++', 'ASM86', 'Shell', 'Perl', 'JAVA', 'Python']}
                                        topMargin={false}
                                    />
                                    <AboutInfoItem
                                        title="Networking"
                                        items={['TCP/IP', 'X25', 'Ethernet', 'ISO / OSI', 'FDDI', 'NFS']}
                                        topMargin={false}
                                    />
                                    <AboutInfoItem
                                        title="Storage"
                                        items={['NAS', 'SAN', 'RAID']}
                                        topMargin={false}
                                    />
                                    <AboutInfoItem
                                        title="GUI"
                                        items={['HP-VUE', 'CDE', 'X-Windows']}
                                        topMargin={false}
                                    />
                                    <AboutInfoItem
                                        title="Tools"
                                        items={['Version Control Systems', 'Install-Shield', 'Y2K', 'SFS97', 'IOZONE', 'NETBENCH', 'GitHub', 'MPI', 'CUDA', 'OpenMP', 'GPU', 'Online Teaching']}
                                        topMargin={false}
                                    />
                                </div>
                                <div className="about__info__item">
                                    <h1 className="about__info__heading">Experiences</h1>

                                    <AboutInfoItem
                                        title="Department of Information Technology, Jadavpur University, Kolkata"
                                        items={["Assistant Professor(Cont) (2003 - Present)"]}
                                    />
                                    <AboutInfoItem
                                        title="SUN Micro System, Menlo Park, California, USA"
                                        items={["Member Of Technical Staff (2000 - 2002)"]}
                                    />
                                    <AboutInfoItem
                                        title="AUSPEX SYSTEMS, Santa Clara, California"
                                        items={["Software Engineer (1999 - 2000)"]}
                                    />
                                    <AboutInfoItem
                                        title="STRATUS COMPUTERS, San Jose, California, USA"
                                        items={["Software Engineer (1998 - 1999)"]}
                                    />
                                    <AboutInfoItem
                                        title="RAVEL SOFTWARE INC., San Jose, California, USA"
                                        items={["Software Engineer (1997 - 1998)"]}
                                    />
                                    <AboutInfoItem
                                        title="HCL America, Sunnyvale, California, USA"
                                        items={["Software Consultant (1996 - 1997)"]}
                                    />
                                    <AboutInfoItem
                                        title="HCL America, Sunnyvale, California, USA"
                                        items={["Software Consultant (1994 - 1996)"]}
                                    />
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
