import { useEffect, useRef } from 'react';
import { Code, Database, Globe, Layers, Wrench, Users } from 'lucide-react';
import skillsImage from '@/assets/skills-bg.jpg';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('fade-scale');
              }, index * 100);
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'primary',
      skills: ['React', 'Vue.js', 'Minimal CSS frameworks', 'Web3.js', 'TypeScript']
    },
    {
      title: 'Backend',
      icon: Code,
      color: 'accent',
      skills: ['Node.js', 'Express', 'Laravel', 'Lumen', 'PHP', 'REST APIs']
    },
    {
      title: 'Blockchain',
      icon: Layers,
      color: 'primary',
      skills: ['Solidity', 'OpenZeppelin', 'Hardhat', 'Truffle', 'Web3.js', 'Smart Contracts']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'accent',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'primary',
      skills: ['Git', 'GitHub Actions', 'Docker', 'Vercel hosting', 'CI/CD']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'accent',
      skills: ['Remote collaboration', 'Async coordination', 'Code reviews', 'Documentation', 'Client communication']
    }
  ];

  const paymentApis = [
    'Stripe API', 'PayPal SDK', 'Payment Gateway Integration'
  ];

  const getColorClasses = (color: string) => {
    return color === 'primary' 
      ? 'border-primary/30 bg-primary/10 text-primary' 
      : 'border-accent/30 bg-accent/10 text-accent';
  };

  const getHoverClasses = (color: string) => {
    return color === 'primary' 
      ? 'hover:border-primary hover:glow-primary' 
      : 'hover:border-accent hover:glow-accent';
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 54, 0.85), rgba(34, 39, 54, 0.85)), url(${skillsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="text-glow gradient-cyber bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 gradient-cyber mx-auto animate-on-scroll" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto animate-on-scroll">
              A comprehensive toolkit for modern web development and blockchain innovation
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 gradient-card rounded-2xl border hover-lift transition-smooth animate-on-scroll ${getHoverClasses(category.color)}`}
                >
                  {/* Category header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl mr-4 ${getColorClasses(category.color)} group-hover:scale-110 transition-smooth`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center group/skill"
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 ${category.color === 'primary' ? 'bg-primary' : 'bg-accent'} group-hover/skill:scale-125 transition-smooth`} />
                        <span className="text-muted-foreground group-hover/skill:text-foreground transition-smooth">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special highlight: Payments & APIs */}
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-primary">Payments & API Integration</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentApis.map((api, index) => (
                <div
                  key={index}
                  className="px-6 py-3 gradient-card rounded-full border border-border hover-lift transition-smooth hover:border-primary hover:glow-primary"
                >
                  <span className="font-medium">{api}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proficiency levels */}
          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="text-center p-6 gradient-card rounded-2xl border border-border hover-lift transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">Expert</div>
              <div className="text-muted-foreground">React, Node.js, Solidity</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-2xl border border-border hover-lift transition-smooth">
              <div className="text-4xl font-bold text-accent mb-2">Advanced</div>
              <div className="text-muted-foreground">Laravel, Vue.js, PostgreSQL</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-2xl border border-border hover-lift transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">Proficient</div>
              <div className="text-muted-foreground">Docker, GraphQL, MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;