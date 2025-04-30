
import React from 'react';
import { Github, Twitter, Linkedin, BookOpen, Code, PaintBucket, Music } from 'lucide-react';

// Sample team data - replace with your actual team members
const teamMembers = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Founder & Creative Director',
    bio: 'Gaming enthusiast with a decade of experience in game development and storytelling.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    specialty: BookOpen,
    specialtyColor: 'text-wizware-gold',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Jamie Chen',
    role: 'Lead Developer',
    bio: 'Code wizard specializing in game mechanics and technical optimization.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    specialty: Code,
    specialtyColor: 'text-wizware-purple',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'Sasha Williams',
    role: 'Art Director',
    bio: 'Bringing magical worlds to life through stunning visual design and animation.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    specialty: PaintBucket,
    specialtyColor: 'text-wizware-teal',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Ray Johnson',
    role: 'Sound Designer',
    bio: 'Creating immersive audio experiences that enhance the magic of our games.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop',
    specialty: Music,
    specialtyColor: 'text-wizware-gold',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-wizware-dark-black to-wizware-black sacred-geometry">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-magic-fade-in">
          <h2 className="wizware-title text-4xl md:text-5xl mb-4">Our Wizards</h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-quicksand">
            Meet the talented team behind the magic at WizWare
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="cosmic-card group h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] animate-magic-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wizware-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Specialty icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-wizware-dark-black/70 backdrop-blur-sm">
                  <member.specialty className={member.specialtyColor} size={20} />
                </div>
                
                {/* Magic particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-wizware-gold opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{
                      width: '6px',
                      height: '6px',
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animation: 'sparkle 3s ease-in-out infinite',
                    }}
                  ></div>
                ))}
                
                {/* Social links */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a 
                    href={member.social.twitter} 
                    className="bg-wizware-dark-black/80 p-2 rounded-full text-wizware-teal hover:text-wizware-gold transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="bg-wizware-dark-black/80 p-2 rounded-full text-wizware-teal hover:text-wizware-gold transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="bg-wizware-dark-black/80 p-2 rounded-full text-wizware-teal hover:text-wizware-gold transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-cinzel text-wizware-gold mb-1">{member.name}</h3>
              <p className="text-wizware-teal text-sm font-medium mb-3 font-quicksand">{member.role}</p>
              <p className="text-gray-300 text-sm flex-grow font-quicksand">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-cinzel text-wizware-gold mb-4">Join Our Magical Team</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6 font-quicksand">
              We're always looking for talented individuals who are passionate about creating
              magical gaming experiences and educational content.
            </p>
            <a href="#contact" className="cosmic-button inline-flex">View Open Positions</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
