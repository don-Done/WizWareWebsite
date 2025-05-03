import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { Helmet } from 'react-helmet-async';
import { collection, addDoc } from 'firebase/firestore';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'newsletter'), { email });
      setEmail('');
      console.log('Newsletter subscription successful!');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    }
  };
  return (
    <>
    <Helmet>
        <title>Grand Wizard Tournament - WizWare Games</title>
        <meta name="description" content="Learn programming through magical spell-crafting in Grand Wizard Tournament. Navigate a magical labyrinth, combine spells, and embark on a journey to become a Grand Wizard." />
        <meta name="keywords" content="indie game, programming education, roguelike, spell-crafting, magic, education" />
      </Helmet>

      <section className="hero text-center d-flex align-items-center" data-aos="fade-up">
        <div className="container">
          <h1>Grand Wizard Tournament</h1>
          <p>Master Programming Through Magical Spell-Crafting</p>
          <div>
            <Link to="/about" className="btn btn-primary btn-lg mx-2">Learn More</Link>
            <a href="https://discord.gg/wizwaregames" className="btn btn-secondary btn-lg mx-2" target='_blank' rel='noopener noreferrer'>Join Discord</a>
            <Link to="/contact" className="btn btn-success btn-lg mx-2">Support Us</Link>
          </div>
        </div>
      </section>
      <section className="py-5 grimoire-section">
        <div className="container">
          <h2 className="text-center mb-4" data-aos="fade-up">Why Grand Wizard Tournament?</h2>
          <div className="row">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card grimoire-card">
                <div className="card-body">
                  <h3>Educational</h3>
                  <p>Learn programming concepts like loops and conditionals through spell-crafting.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card grimoire-card">
                <div className="card-body">
                  <h3>Engaging</h3>
                  <p>Navigate a magical labyrinth with procedurally generated rooms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card grimoire-card">
                <div className="card-body">
                  <h3>Replayable</h3>
                  <p>Endless combinations with the innovative spell system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 grimoire-section">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-4">Stay Updated</h2>
          <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
            <div className="col-auto">
              <input type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="col-auto"><button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;