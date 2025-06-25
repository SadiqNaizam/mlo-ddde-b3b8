import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-7 w-7 text-primary" />
              <span className="text-2xl font-bold font-heading text-foreground">IndusTravel</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
              Discover the heart of India with our curated travel experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-center md:text-left">
              {footerLinks.map(link => (
                <Link key={link.href} to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
             <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
             <p className="text-muted-foreground text-sm mb-4 text-center md:text-left">
                Subscribe for exclusive deals and travel inspiration.
             </p>
             {/* Placeholder for a newsletter form */}
             <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="flex-grow h-10 bg-muted rounded-md flex items-center px-3 text-sm text-muted-foreground">Email address...</div>
                <button className="bg-primary text-primary-foreground h-10 px-4 rounded-md text-sm font-medium">Subscribe</button>
             </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} IndusTravel. All Rights Reserved.
          </p>
          {/* Placeholder for social links */}
          <div className="flex gap-4 mt-4 md:mt-0">
             <div className="h-6 w-6 bg-muted rounded-full"></div>
             <div className="h-6 w-6 bg-muted rounded-full"></div>
             <div className="h-6 w-6 bg-muted rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;