import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <>
          <Helmet>
            <title>Contact Us - Grand Wizard Tournament</title>
            <meta name="description" content="Contact WizWare Games to learn more about Grand Wizard Tournament, support our development, or join our community." />
            <meta name="keywords" content="indie game, contact, programming education, roguelike, spell-crafting, support" />
          </Helmet>
        <section className="py-5 grimoire-section">
          <div className="container">
                <h1>Contact Us</h1>
                <div className="mb-4">
                    <h2>Contact Details</h2>
                    <p>Email: <a href="mailto:contact@wizware-games.com">contact@wizware-games.com</a></p>
                    <p>Address: 123 Magic Lane, Digital City, 98765</p>
                </div>

                 <div className="mb-4">
                    <h2>Stay Connected</h2>
                    <div>
                      <a href="[invalid url, do not cite]" target="_blank" rel="noopener noreferrer">
                        X
                      </a>{" "}
                      |
                      <a href="[invalid url, do not cite]" target="_blank" rel="noopener noreferrer">
                        Discord
                      </a>
                    </div>
                </div>

                <div>
                    <h2>Support Us</h2>
                    <p>Help us bring Grand Wizard Tournament to life! Contact us to discuss crowdfunding or investment opportunities.</p>
                </div>
            </div>
             <div className="mb-4">
          <a href="/assets/presskit.zip">Download Press Kit</a>
        </div>
        </section>
        </>
    );
};

export default Contact;