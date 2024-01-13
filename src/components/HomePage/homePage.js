import React from "react";
import Navbar from "../navBar";
import Title from "../title";
import Button from "../button";
import Footer from "../footer";
import { exstore } from "../../constants/constants";
import leftArrow from '../../assests/images/left-arrow.png';
import rightArrow from '../../assests/images/right-arrow.png';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="banner">
                <div className="banner-content">
                    <div className="img-container">
                        <img src={leftArrow} alt="leftarrow" />
                    </div>
                    <div className="banner-section">
                        <Title className={"head"} titleText={"MultiVersus"} />
                        <p>Now officially free to play for all Xbox users</p>
                        <Button buttonText={"Get it now!"} className={"banner-button"} />
                    </div>
                    <div className="img-container">
                        <img src={rightArrow} alt="rightarrow" />
                    </div>
                </div>
            </div>
            <div className="middle-section">
                <Title className={"middle-head"} titleText={"Why eXStore?"} />
                <p className="middle-title">We are the official Xbox partner in Indonesia that provides official video games.</p>
                <div className="store">
                    {exstore.map((item) => {
                        const { id, media, text } = item;
                        return (
                            <div className="middle-sub-section" key={id}>
                                <div className="img-container">
                                    <img src={media} alt="media" />
                                </div>
                                <p className="sub-text">{text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </div>
    )
}
export default Home;