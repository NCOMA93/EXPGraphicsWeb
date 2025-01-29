import React, { useEffect, useState } from 'react';
import { Building2, FileDown, Layers, PackageCheck, ChevronUp } from 'lucide-react';
import BoothScene from './components/BoothScene';
import Logo from './components/Logo';

function PricingCard({ title, price, sizes, description }: { 
  title: string;
  price: string;
  sizes: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-purple rounded-full opacity-10" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-brand-purple mb-2">{price}</p>
      <p className="text-gray-600 mb-4">{sizes}</p>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 w-full bg-brand-purple text-white py-2 px-4 rounded-md hover:bg-brand-purple-dark transition-colors flex items-center justify-center gap-2">
        <FileDown size={20} />
        Get Quote
      </button>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-purple rounded-full opacity-10" />
      <div className="w-12 h-12 bg-brand-purple bg-opacity-10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-brand-purple" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed bottom-8 right-8 bg-brand-purple text-white p-3 rounded-full shadow-lg hover:bg-brand-purple-dark transition-all duration-300 z-50`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Logo white={!isScrolled} />
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('projects')}
              className={`font-medium hover:text-brand-purple transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`font-medium hover:text-brand-purple transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Prices
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium hover:text-brand-purple transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ScrollToTopButton />
      
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center home">
        <BoothScene />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <Logo className="mb-6" white />
            <h1 className="text-5xl font-bold mb-4 text-white">Transform Your Exhibition Space</h1>
            <p className="text-xl mb-8 max-w-2xl text-white">
              Professional graphics solutions for Octanorm and BeMatrix structures. 
              Elevate your brand with stunning visual designs.
            </p>
            <button className="bg-white text-brand-purple py-3 px-8 rounded-full font-bold hover:bg-opacity-90 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Building2}
            title="Exhibition Ready"
            description="Designs optimized for exhibition structures with precise measurements and specifications."
          />
          <FeatureCard
            icon={Layers}
            title="Multiple Formats"
            description="Receive your designs in various file formats suitable for different printing requirements."
          />
          <FeatureCard
            icon={PackageCheck}
            title="Quality Assured"
            description="High-resolution graphics that maintain quality at any scale."
          />
        </div>
      </section>

      {/* Showcase */}
      <section id="projects" className="bg-gradient-radial from-brand-purple-light via-brand-purple to-brand-purple-dark py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
              alt="Exhibition Design"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
            />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
              alt="Exhibition Stand"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
            />
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" 
              alt="Graphics Display"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Standard Package"
            price="From $299"
            sizes="Up to 3x3m structures"
            description="Perfect for small exhibition stands and displays. Includes design in PDF, JPG, and TIFF formats."
          />
          <PricingCard
            title="Professional Package"
            price="From $599"
            sizes="Up to 6x3m structures"
            description="Ideal for medium-sized exhibitions. Includes design in all standard formats plus source files."
          />
          <PricingCard
            title="Premium Package"
            price="From $999"
            sizes="Custom sizes available"
            description="Complete solution for large exhibitions. Includes all formats, source files, and 3D visualization."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-brand-purple text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Exhibition Space?</h2>
          <p className="mb-8 text-lg">Contact us today for a custom quote and consultation</p>
          <button className="bg-white text-brand-purple py-3 px-8 rounded-full font-bold hover:bg-opacity-90 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 EXP Graphics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;