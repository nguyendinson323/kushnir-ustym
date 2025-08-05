import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('slide-in-left');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Freelance Full‑Stack & Blockchain Developer',
      company: 'Individual Clients (Ukraine & EU)',
      period: '2025.05 – 2025.07',
      location: 'Remote, Ukraine',
      type: 'Freelance',
      achievements: [
        'Implemented frontend and backend features for client websites including payment gateway integration and user authentication',
        'Built ERC‑20 based token smart contract for a small trading platform and deployed it on testnet using Hardhat and MetaMask',
        'Documented API handoffs for client follow‑up with future teams or internal IT'
      ]
    },
    {
      title: 'Junior Web Developer Intern',
      company: 'MidTech Systems Ltd',
      period: '2024.09 – 2025.03',
      location: 'Kyiv, Ukraine',
      type: 'Internship',
      achievements: [
        'Converted legacy PHP pages into Node.js/Express microservices that served new frontends in React',
        'Worked with clients to onboard data, set up PostgreSQL schemas, and prepare sample SQL scripts',
        'Participated in remote standups and Git branching strategy discussions'
      ]
    },
    {
      title: 'Trainee Blockchain Assistant',
      company: 'BlockHub UA',
      period: '2024.06 – 2024.08',
      location: 'Kharkiv, Ukraine',
      type: 'Training',
      achievements: [
        'Assisted in writing and testing smart contracts using OpenZeppelin templates and Remix',
        'Created basic React UI to interact with deployed contracts and display state',
        'Collaborated with lead developers to hand off code to workshop participants'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Freelance': return 'bg-primary/20 text-primary border-primary/30';
      case 'Internship': return 'bg-accent/20 text-accent border-accent/30';
      case 'Training': return 'bg-secondary/20 text-secondary-foreground border-secondary/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="text-glow gradient-cyber bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 gradient-cyber mx-auto animate-on-scroll" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 animate-on-scroll ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background glow-primary" />

                {/* Content card */}
                <div className="ml-16 md:ml-0">
                  <div className="p-8 gradient-card rounded-2xl border border-border hover-lift transition-smooth group">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center mb-2 text-accent font-medium">
                      <Building className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center mb-6 text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements highlight */}
          <div className="mt-16 p-8 gradient-card rounded-2xl border border-border animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-primary/10 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">ERC-20</div>
                <div className="text-sm text-muted-foreground">Token deployed and integrated with frontend</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/10 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-accent mb-2">Legacy → Modern</div>
                <div className="text-sm text-muted-foreground">PHP to Node.js/React migration</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary/10 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">Smart Contracts</div>
                <div className="text-sm text-muted-foreground">OpenZeppelin & Remix expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;