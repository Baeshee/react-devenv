import React, { Component } from "react";
import { FaReact, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiReactrouter, SiRedux, SiTypescript, SiTailwindcss } from "react-icons/si";

import "../styles/scss/card.scss"

import css from '../media/svg/css.svg'
import react from '../media/svg/react.svg'
import icons from '../media/svg/icons.svg'
import sass from '../media/svg/sass.svg'
import redux from '../media/svg/redux.svg'
import tailwind from '../media/svg/tailwind.svg'
import router from '../media/svg/router.svg'
import typescript from '../media/svg/typescript.svg'

class Card extends Component {
    render() {
        let body;
        let smallIcon;
        let largeIcon;

        switch(this.props.letter){
            case "R":
                smallIcon = <FaReact size="30" />
                largeIcon = <img src={react} alt="" height="90" width="auto"/>
                break;
            case "C":
                smallIcon = <FaCss3Alt size="30" />
                largeIcon = <img src={css} alt="" height="90" width="auto"/>
                break;
            case "S":
                smallIcon = <FaSass size="30" />
                largeIcon = <img src={sass} alt="" height="90" width="auto"/>
                break;
            case "TW":
                smallIcon = <SiTailwindcss size="30" />
                largeIcon = <img src={tailwind} alt="" height="70" width="auto"/>
                break;
            case "TS":
                smallIcon = <SiTypescript size="25" />
                largeIcon = <img src={typescript} alt="" height="90" width="auto"/>
                break;
            case "RX":
                smallIcon = <SiRedux size="30" />
                largeIcon = <img src={redux} alt="" height="80" width="auto"/>
                break;
            case "RR":
                smallIcon = <SiReactrouter size="30" />
                largeIcon = <img src={router} alt="" height="70" width="auto"/>
                break;
            case "RI":
                smallIcon = <FaReact size="30" />
                largeIcon = <img src={icons} alt="" height="90" width="auto"/>
                break;
        }

        
        body =
            <div className="card">
                <section className="card__upper">
                    <p className="text">{this.props.letter}</p>
                    {smallIcon}
                </section>
                <section className="card__middle">
                    <p className="card__middle__before" style={{ color: this.props.color}}>{this.props.content}</p>
                    <p className="card__middle__after" style={{color: this.props.color}}>{this.props.content}</p>
                    {largeIcon}
                    <h2 style={{ color: this.props.color}}>{this.props.name}</h2>
                </section>
                <section className="card__bottom">
                    <p className="text">{this.props.letter}</p>
                    {smallIcon}
                </section>
            </div>

        return(
            body
        )
    }
}

export default Card;