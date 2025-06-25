import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Mountain, User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  console.log('Header loaded');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      isActive ? 'text-primary' : 'text-foreground/80'
    );
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/packagespage', label: 'Packages' },
    { href: '/offerspage', label: 'Offers' },
    { href: '/tripcostestimatorpage', label: 'Trip Estimator' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isHomePage && !isScrolled
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-sm border-b'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-heading text-foreground">IndusTravel</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-5 w-5" />
            <span className="sr-only">User Profile</span>
          </Button>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 p-4 border-b">
                   <Mountain className="h-6 w-6 text-primary" />
                   <span className="text-xl font-bold font-heading">IndusTravel</span>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={navLinkClasses}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                  <Button className="w-full">
                     <User className="mr-2 h-4 w-4" />
                     Login / Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;