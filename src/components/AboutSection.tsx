import { useEffect, useRef } from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('slide-in-up');
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

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'React, Node.js, Laravel with modern development practices'
    },
    {
      icon: Database,
      title: 'Blockchain Innovation',
      description: 'Smart contracts, Web3 integration, and DeFi solutions'
    },
    {
      icon: Globe,
      title: 'Remote Collaboration',
      description: 'Proven track record with international clients'
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'From concept to deployment in record time'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="text-glow gradient-cyber bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 gradient-cyber mx-auto animate-on-scroll" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="space-y-8">
              <div className="animate-on-scroll">
                <h3 className="text-3xl font-bold mb-6 text-primary">
                  Passionate Developer & Blockchain Enthusiast
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a full‑stack developer and blockchain practitioner with hands-on freelance experience 
                  and a strong academic background. I specialize in implementing smart contracts, Web3 interfaces, 
                  and full‑stack web applications using cutting-edge technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With expertise in React, Node.js, Laravel, and Solidity, I've delivered impactful projects 
                  in fintech, healthcare, and eCommerce. I excel at remote collaboration, seamless handoffs, 
                  and integrating with complex client systems.
                </p>
              </div>

              {/* Education highlight */}
              <div className="p-6 gradient-card rounded-2xl border border-border hover-lift transition-smooth animate-on-scroll">
                <h4 className="text-xl font-semibold text-accent mb-2">Education</h4>
                <p className="text-foreground font-medium">Bachelor of Engineering in Computer Science</p>
                <p className="text-muted-foreground">Poltava National Technical University</p>
                <p className="text-muted-foreground">GPA 3.25 / 4.00 • 2020 – 2024</p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 gradient-card rounded-2xl border border-border hover-lift transition-smooth animate-on-scroll group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 w-fit rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;