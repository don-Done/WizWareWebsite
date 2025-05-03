import React from "react";
import { Helmet } from "react-helmet-async";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      bio: "Founder, passionate about blending education and gaming.",
    },
    {
      name: "Jamie Chen",
      bio: "Lead Developer, experienced in game programming.",
    },
    {
      name: "Sasha Williams",
      bio: "Art Director, creates stunning visuals.",
    },
    {
      name: "Ray Johnson",
      bio: "Sound Designer, crafts immersive audio.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Team - Grand Wizard Tournament - WizWare Games</title>
        <meta
          name="description"
          content="Meet the team behind Grand Wizard Tournament, a game that teaches programming through magical spell-crafting."
        />
      </Helmet>
      <section className="py-5 grimoire-section">
        <div className="container">
          <h1 className="text-center mb-4">Meet the Team</h1>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-6" key={index}>
                <div className="card grimoire-card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">{member.name}</h3>
                    <p className="card-text">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;