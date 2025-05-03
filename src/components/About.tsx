import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Grand Wizard Tournament - WizWare Games</title>
        <meta name="description" content="Learn about the educational roguelike game teaching programming through magic." />
        <meta name="keywords" content="indie game, programming education, roguelike, spell-crafting" />
      </Helmet>
      <section className="py-5 grimoire-section">
        <div className="container">
          <h1 className="text-center mb-4" data-aos="fade-up">About Grand Wizard Tournament</h1>
          <p>Grand Wizard Tournament is an educational roguelike game that teaches programming through a magical spell-crafting system. Set in a world where young wizards rely too heavily on AI-like tools, the game challenges players to master true magic by understanding programming concepts.</p>
        </div>
      </section>
      <section className="py-5 grimoire-section">
        <div className="container">
          <h2>Story</h2>
          <p>The Grand Wizard Council, concerned about wizards’ over-reliance on Whispering Oracles, creates the Tournament to encourage true understanding of magic. Key characters include Elder Archmage Thorne, Archmage Lyra, and Elara Dawnbreak.</p>
        </div>
      </section>
      <section className="py-5 grimoire-section">
        <div className="container">
          <h2>Gameplay</h2>
          <p>Navigate procedurally generated rooms in a 3x3x3 labyrinth, collect spell components, craft spells, and fight enemies across 10 waves. The spell node system allows players to create custom spells using nodes like Magic, Trigger, Effect, Condition, Variable, and Flow, each mapping to programming concepts such as functions, event handlers, outputs, conditionals, variables, and control flow.</p>
        </div>
      </section>
      <section className="py-5 grimoire-section">
        <div className="container">
          <h2>Educational Value</h2>
          <p>The game tracks player understanding, provides feedback, and offers tutorials. It’s designed for students aged 12-25 and educators, with research supporting game-based learning’s effectiveness.</p>
        </div>
      </section>
      <section className="py-5 grimoire-section">
        <div className="container">
          <h2>Visuals and Audio</h2>
          <p>Features a magical academy aesthetic with vibrant spell effects and immersive audio, built with Unreal Engine using C++.</p>
        </div>
      </section>
    </>
  );
};

export default About;