import { useEffect, useRef } from 'react';
import { Mail, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kushnirustym@gmail.com',
      href: 'mailto:kushnirustym@gmail.com',
      color: 'primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ustym Kushnir',
      href: 'https://www.linkedin.com/in/ustym-kushnir-b06343377',
      color: 'accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mykolaiv, Ukraine',
      href: null,
      color: 'primary'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 relative overflow-hidden animated-bg particles"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="text-glow gradient-cyber bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 gradient-cyber mx-auto animate-on-scroll" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto animate-on-scroll">
              Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a full-stack web application, blockchain integration, 
                  or smart contract development, I'm here to help.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  const colorClasses = contact.color === 'primary' 
                    ? 'text-primary bg-primary/10 border-primary/20' 
                    : 'text-accent bg-accent/10 border-accent/20';
                  
                  const content = (
                    <div className={`p-6 gradient-card rounded-2xl border hover-lift transition-smooth animate-on-scroll group ${contact.href ? 'cursor-pointer' : ''}`}>
                      <div className="flex items-center">
                        <div className={`p-3 rounded-xl mr-4 border ${colorClasses} group-hover:scale-110 transition-smooth`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{contact.label}</div>
                          <div className="text-lg font-semibold group-hover:text-primary transition-smooth">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );

                  return contact.href ? (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="p-6 gradient-card rounded-2xl border border-border animate-on-scroll">
                <h4 className="text-lg font-semibold mb-3 text-accent">Current Availability</h4>
                <p className="text-muted-foreground">
                  🟢 Available for freelance projects and collaboration
                </p>
                <p className="text-muted-foreground mt-2">
                  ⏰ Timezone: EET (UTC+2) • Flexible with international clients
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="p-8 gradient-card rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-4 gradient-cyber text-primary-foreground rounded-lg font-semibold hover-lift glow-primary transition-smooth"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border animate-on-scroll">
            <p className="text-muted-foreground">
              © 2025 Kushnir Ustym. Full-Stack Web & Blockchain Developer
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with React, TypeScript, and passion for innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;