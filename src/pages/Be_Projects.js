import React, { Component } from 'react'
import BECards from '../components/BECards';
import { dataList } from '../components/BEprojectData'

export default class Be_Projects extends Component {
    componentDidMount() {
        var d = document,
            accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
            setAccordionAria,
            switchAccordion,
            skipClickDelay,
            setAriaAttr,
            touchSupported = ('ontouchstart' in window),
            pointerSupported = ('pointerdown' in window);

        skipClickDelay = function (e) {
            e.preventDefault()
            e.target.click()
        }

        setAriaAttr = function (el, ariaType, newProperty) {
            el.setAttribute(ariaType, newProperty)
        };
        setAccordionAria = function (el1, el2, expanded) {
            switch (expanded) {
                case "true":
                    setAriaAttr(el1, 'aria-expanded', 'true');
                    setAriaAttr(el2, 'aria-hidden', 'false');
                    break;
                case "false":
                    setAriaAttr(el1, 'aria-expanded', 'false');
                    setAriaAttr(el2, 'aria-hidden', 'true');
                    break;
                default:
                    break;
            }
        }
        switchAccordion = function (e) {
            e.preventDefault()
            var thisAnswer = e.target.parentNode.nextElementSibling
            var thisQuestion = e.target
            if (thisAnswer.classList.contains('is-collapsed')) {
                setAccordionAria(thisQuestion, thisAnswer, 'true')
            } else {
                setAccordionAria(thisQuestion, thisAnswer, 'false')
            }
            thisQuestion.classList.toggle('is-collapsed')
            thisQuestion.classList.toggle('is-expanded')
            thisAnswer.classList.toggle('is-collapsed')
            thisAnswer.classList.toggle('is-expanded')
            thisAnswer.classList.toggle('animateIn')
        }
        for (var i = 0, len = accordionToggles.length; i < len; i++) {
            if (touchSupported) {
                accordionToggles[i].addEventListener('touchstart', skipClickDelay, false)
            }
            if (pointerSupported) {
                accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false)
            }
            accordionToggles[i].addEventListener('click', switchAccordion, false)
        }
    }
    render() {
        return (
            <div className="BE_projects_container">
                <div className="heading-primary">
                    <h1>B.E. Projects</h1>
                    <p>List of projects done by B.E. students under me</p>
                </div>
                <div className="accordion">
                    <dl>
                        <dt>
                            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1"
                                className="accordionTitle js-accordionTrigger">
                                2005
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <BECards title={dataList[0].title} file={dataList[0].file} />
                        </dd>
                        <dt>
                            <a href="#accordion2" aria-expanded="false" aria-controls="accordion2"
                                className="accordionTitle js-accordionTrigger">
                                2006
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion2" aria-hidden="true">
                            <BECards title={dataList[1].title} file={dataList[1].file} />
                            <BECards title={dataList[2].title} file={dataList[2].file} />
                        </dd>
                        <dt>
                            <a href="#accordion3" aria-expanded="false" aria-controls="accordion3"
                                className="accordionTitle js-accordionTrigger">
                                2007
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion3" aria-hidden="true">
                            <BECards title={dataList[3].title} file={dataList[3].file} />
                        </dd>
                        <dt>
                            <a href="#accordion4" aria-expanded="false" aria-controls="accordion4"
                                className="accordionTitle js-accordionTrigger">
                                2008
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion4" aria-hidden="true">
                            <BECards title={dataList[4].title} file={dataList[4].file} />
                            <BECards title={dataList[5].title} file={dataList[5].file} />
                        </dd>
                        <dt>
                            <a href="#accordion5" aria-expanded="false" aria-controls="accordion5"
                                className="accordionTitle js-accordionTrigger">
                                2013
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion5" aria-hidden="true">
                            <BECards title={dataList[6].title} file={dataList[6].file} />
                            <BECards title={dataList[7].title} file={dataList[7].file} />
                        </dd>
                        <dt>
                            <a href="#accordion6" aria-expanded="false" aria-controls="accordion6"
                                className="accordionTitle js-accordionTrigger">
                                2014
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion6" aria-hidden="true">
                            <BECards title={dataList[8].title} file={dataList[8].file} />
                            <BECards title={dataList[9].title} file={dataList[9].file} />
                        </dd>
                        <dt>
                            <a href="#accordion7" aria-expanded="false" aria-controls="accordion7"
                                className="accordionTitle js-accordionTrigger">
                                2016
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion7" aria-hidden="true">
                            <BECards title={dataList[10].title} file={dataList[10].file} />
                        </dd>
                        <dt>
                            <a href="#accordion8" aria-expanded="false" aria-controls="accordion8"
                                className="accordionTitle js-accordionTrigger">
                                2017
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion8" aria-hidden="true">
                            <BECards title={dataList[11].title} file={dataList[11].file} />
                            <BECards title={dataList[12].title} file={dataList[12].file} />
                            <BECards title={dataList[13].title} file={dataList[13].file} />
                        </dd>
                        <dt>
                            <a href="#accordion9" aria-expanded="false" aria-controls="accordion9"
                                className="accordionTitle js-accordionTrigger">
                                2018
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion9" aria-hidden="true">
                            <BECards title={dataList[14].title} file={dataList[14].file} />
                            <BECards title={dataList[15].title} file={dataList[15].file} />
                            <BECards title={dataList[16].title} file={dataList[16].file} />
                        </dd>
                        <dt>
                            <a href="#accordion10" aria-expanded="false" aria-controls="accordion10"
                                className="accordionTitle js-accordionTrigger">
                                2019
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion10" aria-hidden="true">
                            <BECards title={dataList[17].title} file={dataList[17].file} />
                            <BECards title={dataList[18].title} file={dataList[18].file} />
                            <BECards title={dataList[19].title} file={dataList[19].file} />
                        </dd>
                        <dt>
                            <a href="#accordion11" aria-expanded="false" aria-controls="accordion11"
                                className="accordionTitle js-accordionTrigger">
                                2020
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion11" aria-hidden="true">
                            <BECards title={dataList[20].title} file={dataList[20].file} />
                            <BECards title={dataList[21].title} file={dataList[21].file} />
                            <BECards title={dataList[22].title} file={dataList[22].file} />
                            <BECards title={dataList[23].title} file={dataList[23].file} />
                            <BECards title={dataList[24].title} file={dataList[24].file} />
                        </dd>
                        <dt>
                            <a href="#accordion12" aria-expanded="false" aria-controls="accordion12"
                                className="accordionTitle js-accordionTrigger">
                                2021
                            </a>
                        </dt>
                        <dd className="accordion-content accordionItem is-collapsed" id="accordion12" aria-hidden="true">
                            <BECards title={dataList[25].title} file={dataList[25].file} />
                            <BECards title={dataList[26].title} file={dataList[26].file} />
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}
