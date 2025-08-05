import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center animated-bg particles"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 54, 0.8), rgba(34, 39, 54, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dynamic floating orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse"
        style={{
          left: `${mousePosition.x * 0.5}%`,
          top: `${mousePosition.y * 0.5}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse delay-500"
        style={{
          right: `${(100 - mousePosition.x) * 0.3}%`,
          bottom: `${(100 - mousePosition.y) * 0.3}%`,
          transform: 'translate(50%, 50%)',
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main title with staggered animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 slide-in-up">
            <span className="text-glow gradient-cyber bg-clip-text text-transparent">
              Kushnir Ustym
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-2xl md:text-4xl mb-8 slide-in-up delay-200">
            <span className="text-primary font-semibold">Full‑Stack Web</span>
            <span className="text-foreground"> & </span>
            <span className="text-accent font-semibold">Blockchain Developer</span>
          </div>

          {/* Location and contact info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-muted-foreground slide-in-up delay-300">
            <div className="flex items-center gap-2 hover:text-primary transition-smooth">
              <MapPin className="w-5 h-5" />
              <span>Mykolaiv, Ukraine</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Mail className="w-5 h-5" />
              <span>kushnirustym@gmail.com</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-16 slide-in-up delay-400">
            <a
              href="https://www.linkedin.com/in/ustym-kushnir-b06343377"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border hover-lift hover:border-primary hover:glow-primary transition-smooth"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ukushnirustym@gmail.com"
              className="p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border hover-lift hover:border-accent hover:glow-accent transition-smooth"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border hover-lift hover:border-primary hover:glow-primary transition-smooth"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToNext}
            className="inline-flex items-center px-8 py-4 gradient-cyber text-primary-foreground rounded-full font-semibold hover-lift glow-primary transition-smooth slide-in-up delay-500"
          >
            Explore My Work
            <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-scale delay-800">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;