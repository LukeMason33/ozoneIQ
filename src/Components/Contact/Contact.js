import React from 'react';
import {Link} from 'react-router-dom';
import RB from '../../assets/RB.png';
import LM from '../../assets/LM.png';
import KB from '../../assets/KB.png';
import './Contact.scss';

const Contact = ({backToLandingPage}) => {
    return (
        <section className="about-section">
            <h2>About Us</h2>
            <article className="contact-article">
                <div className="contact-info">
                    <img
                        className="prof-pic"
                        src={RB}
                        alt="Friendly, smiling woman with glasses and blonde hair, with a purple background"/>
                    <a
                        href="https://github.com/rachelbuchta"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link">
                        Rachel Buchta
                    </a>
                </div>
                <div className="contact-info">
                    <img
                        className="prof-pic"
                        src={LM}
                        alt="Happy man with beanie, smiling in a snowy field"/>
                    <a
                        href="https://github.com/LukeMason33"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link">
                        Luke Mason
                    </a>
                </div>
                <div className="contact-info">
                    <img
                        className="prof-pic"
                        src={KB}
                        alt="Woman with blue hair smiling kindly in front of trees"/>
                    <a
                        href="https://github.com/kristenmb"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link">
                        Kristen Bair
                    </a>
                </div>
            </article>

            <p className="about-app">
                We are three software developers who are passionate about environmental conservation, public health and safety, and providing resources to those who need them. We developed OzoneIQ with all of these passions in mind. Our goal is to create an app with accessible information about what Air Quality Indices really mean, and how to navigate daily life in an intentional, and environmentally friendly way. We hope this app can help anyone who takes the daily air quality into consideration when planning their day - due to health concerns and/or a lifestyle choice to be environmentally conscious. <br/> <br/>Don't forget to use your voice and vote for environmental reform! </p>
            <Link to='/' onClick={backToLandingPage}>
                <button className='link-to-landing-page'>
                Choose a Location  
                </button>
            </Link>
        </section>
    );
};

export default Contact;
