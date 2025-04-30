
import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Code, PenTool } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of Educational Game Design',
    excerpt: 'How we designed Grand Wizard Tournament to teach real programming concepts through magical gameplay mechanics.',
    category: 'Game Design',
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop',
    author: 'Alex Morgan',
    icon: BookOpen,
  },
  {
    id: 2,
    title: 'Building Visual Programming Systems for Non-Programmers',
    excerpt: 'A deep dive into creating intuitive interfaces that teach coding concepts without overwhelming new users.',
    category: 'Development',
    date: 'February 28, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop',
    author: 'Jamie Chen',
    icon: Code,
  },
  {
    id: 3,
    title: 'Art Direction in Fantasy Educational Games',
    excerpt: 'How we use visual elements to convey complex ideas and reinforce learning objectives.',
    category: 'Art & Design',
    date: 'January 20, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop',
    author: 'Sasha Williams',
    icon: PenTool,
  }
];

const milestones = [
  {
    date: 'January 2020',
    title: 'WizWare Founded',
    description: 'Our journey begins with a small team of passionate developers and educators.'
  },
  {
    date: 'July 2020',
    title: 'First Prototype',
    description: 'Initial prototype of Grand Wizard Tournament visual programming system completed.'
  },
  {
    date: 'March 2021',
    title: 'Early Access Launch',
    description: 'First version released to early access players for feedback and testing.'
  },
  {
    date: 'October 2022',
    title: 'Educational Partnership',
    description: 'Partnered with schools to bring coding education to classrooms.'
  },
  {
    date: 'April 2023',
    title: 'Full Release',
    description: 'Grand Wizard Tournament officially launched with full feature set.'
  },
  {
    date: 'September 2024',
    title: 'Mobile Expansion',
    description: 'Released mobile version to bring magical coding to more platforms.'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-wizware-black to-wizware-dark-black sacred-geometry">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-magic-fade-in">
          <h2 className="wizware-title text-4xl md:text-5xl mb-4">Development Blog</h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-quicksand">
            Stay updated with our latest insights, behind-the-scenes content, and development updates
          </p>
        </div>
        
        {/* Featured blog post */}
        <div className="mb-16 animate-magic-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="cosmic-card group overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop" 
                  alt="Featured post" 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-wizware-black to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-wizware-black bg-wizware-gold rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-400 font-quicksand">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    April 5, 2025
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    15 min read
                  </span>
                </div>
                
                <h3 className="text-2xl font-cinzel text-wizware-gold">Behind the Scenes: Creating the Procedural Labyrinth System</h3>
                
                <p className="text-gray-300 font-quicksand">
                  A detailed look at how we designed and implemented the procedural labyrinth generation system
                  that creates unique magical challenges for players in every game. Learn about the algorithms,
                  design challenges, and magical elements that make each run a unique experience.
                </p>
                
                <div className="flex items-center gap-2 mt-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                    alt="Author" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-wizware-teal font-medium text-sm font-quicksand">Ray Johnson</p>
                    <p className="text-gray-400 text-xs font-quicksand">Lead Level Designer</p>
                  </div>
                </div>
                
                <a href="#" className="inline-flex items-center text-wizware-gold hover:text-wizware-teal transition-colors font-quicksand mt-4">
                  Read Full Article <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-cinzel text-wizware-gold mb-8 animate-magic-fade-in" style={{ animationDelay: '0.3s' }}>Recent Articles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="cosmic-card group transition-all duration-300 hover:scale-[1.02] animate-magic-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wizware-black to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-wizware-dark-black/80 p-2 rounded-full">
                    <post.icon className="text-wizware-gold" size={16} />
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-wizware-black bg-wizware-gold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 font-quicksand">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h4 className="text-xl font-cinzel text-wizware-gold mb-3">{post.title}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 font-quicksand">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-gray-400 text-sm font-quicksand">By {post.author}</p>
                  <a 
                    href="#" 
                    className="text-wizware-gold hover:text-wizware-teal transition-colors"
                    aria-label="Read more"
                  >
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Development Timeline */}
        <div>
          <h3 className="text-2xl font-cinzel text-wizware-gold mb-8 text-center animate-magic-fade-in" style={{ animationDelay: '0.7s' }}>
            Development Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-wizware-gold/50 via-wizware-teal/30 to-wizware-purple/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center animate-magic-fade-in ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={`w-5/12 cosmic-card ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <h4 className="text-lg font-cinzel text-wizware-gold mb-1">{milestone.title}</h4>
                    <p className="text-sm text-wizware-teal mb-2 font-quicksand">{milestone.date}</p>
                    <p className="text-gray-300 text-sm font-quicksand">{milestone.description}</p>
                  </div>
                  
                  {/* Center point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-wizware-gold"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
