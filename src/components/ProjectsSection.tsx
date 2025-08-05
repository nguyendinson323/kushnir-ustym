import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, Code, Globe, Layers } from 'lucide-react';
import projectsImage from '@/assets/projects-bg.jpg';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('slide-in-up');
              }, index * 150);
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

  const projects = [
    {
      title: 'TokenSwapUA',
      subtitle: 'Blockchain token swap test app',
      period: 'Jan 2025 – Mar 2025',
      client: 'Freelance blockchain demo for local fintech startup',
      role: 'Smart Contract Developer and Frontend Integrator',
      stack: ['Solidity', 'Hardhat', 'Web3.js', 'React'],
      url: 'https://tokenswapua.com',
      summary: 'A simple swap interface running on Ethereum testnet letting users exchange a test ERC‑20 token for another test token with on‑chain swapping logic and minimal UI abstraction.',
      category: 'blockchain',
      featured: true
    },
    {
      title: 'SupplyChainDapp',
      subtitle: 'Blockchain supply‑chain tracking',
      period: 'Jan 2024 – Dec 2024',
      client: 'Pilot project via university‑affiliated startup',
      role: 'Blockchain Intern / Assistant',
      stack: ['Solidity', 'Node.js', 'GraphQL', 'React'],
      url: 'https://supplychaindapp.eu',
      summary: 'Distributed ledger to track shipments across stages. Developed smart contract for asset tracking, built GraphQL API and React dashboard to visualize real‑time status.',
      category: 'blockchain',
      featured: true
    },
    {
      title: 'ReactNodeStore',
      subtitle: 'React + Node.js eCommerce prototype',
      period: 'Aug 2023 – Nov 2023',
      client: 'Side project portfolio',
      role: 'Full‑Stack Developer',
      stack: ['React', 'Express.js', 'MongoDB', 'Stripe API'],
      url: 'https://reactnodestore.dev',
      summary: 'A minimal eCommerce storefront with product listing, cart, checkout using Stripe, admin panel for product management and order view.',
      category: 'fullstack',
      featured: true
    },
    {
      title: 'HealthTrackWeb',
      subtitle: 'Healthcare patient portal',
      period: 'Jun 2022 – Sep 2022',
      client: 'Student collaboration',
      role: 'Frontend and API Integrator',
      stack: ['Laravel Lumen API', 'Vue.js', 'MySQL'],
      url: 'https://healthtrackweb.org',
      summary: 'Patient portal for tracking appointments and results. Built API endpoints, authored Vue frontend, handled authentication, and integrated PDF report access.',
      category: 'fullstack',
      featured: false
    },
    {
      title: 'LaravelShopUA',
      subtitle: 'Laravel eCommerce demo',
      period: 'Apr 2021 – Jul 2021',
      client: 'Personal project',
      role: 'Backend Developer',
      stack: ['Laravel', 'Blade templates', 'MySQL', 'PayPal SDK'],
      url: 'https://laravelshopua.com',
      summary: 'Prototype online shop with product categories, cart, checkout, PayPal payment integration and admin dashboard for order management.',
      category: 'backend',
      featured: false
    },
    {
      title: 'SmartLeaseChain',
      subtitle: 'Blockchain rental contract demo',
      period: 'Feb 2021 – May 2021',
      client: 'Coursework pilot',
      role: 'Smart Contract Author and UI lead',
      stack: ['Solidity', 'Truffle', 'Web3.js', 'React'],
      url: 'https://smartleasechain.info',
      summary: 'Smart contract for property rental agreements handling deposit escrow and automatic refund. UI to create lease, sign transactions and view status.',
      category: 'blockchain',
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blockchain': return Layers;
      case 'fullstack': return Globe;
      case 'backend': return Code;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'blockchain': return 'border-accent text-accent bg-accent/10';
      case 'fullstack': return 'border-primary text-primary bg-primary/10';
      case 'backend': return 'border-secondary text-secondary-foreground bg-secondary/10';
      default: return 'border-muted text-muted-foreground bg-muted/10';
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 54, 0.9), rgba(34, 39, 54, 0.8)), url(${projectsImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="text-glow gradient-cyber bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 gradient-cyber mx-auto animate-on-scroll" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto animate-on-scroll">
              A showcase of my most impactful work in blockchain development and full-stack web applications
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div
                  key={index}
                  className="group gradient-card rounded-2xl border border-border hover-lift transition-smooth overflow-hidden animate-on-scroll"
                >
                  {/* Project header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(project.category)}`}>
                        <CategoryIcon className="w-4 h-4 mr-2" />
                        {project.category}
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-smooth">
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-accent font-medium mb-3">{project.subtitle}</p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded-md hover:bg-primary/10 hover:text-primary transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Role:</span> {project.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Other Projects */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Additional Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <div
                    key={index}
                    className="group gradient-card rounded-xl border border-border hover-lift transition-smooth p-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {project.category}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.stack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
