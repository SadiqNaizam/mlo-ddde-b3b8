import React from 'react';
import { Button } from '@/components/ui/button';
import { Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils'; // Assuming utils file exists for cn function

// Props definition to make the banner reusable
interface OfferBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  title = "Limited Time Offer!",
  description = "Book now and save up to 20% on select destinations.",
  ctaText = "Explore Deals",
  ctaLink = "/packagespage", // Default link to packages page
  className,
}) => {
  console.log('OfferBanner loaded');

  return (
    // The "unique border" is created by this outer div with a gradient background and padding.
    // The "glowing effect" is achieved with the shadow, which intensifies on hover.
    <div
      className={cn(
        "relative rounded-lg bg-gradient-to-r from-accent/80 via-primary/80 to-accent/80 p-1 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 dark:hover:shadow-accent/30",
        className
      )}
    >
      {/* The inner div has the actual card background, creating the border effect. */}
      <div className="flex flex-col items-center justify-between gap-6 rounded-md bg-card p-6 sm:flex-row md:p-8">
        <div className="flex flex-1 items-center gap-4">
          <div className="hidden rounded-full bg-primary/10 p-3 ring-2 ring-primary/20 sm:block">
            <Megaphone className="h-8 w-8 text-primary" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold text-card-foreground">
              {title}
            </h2>
            <p className="mt-1 font-body text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        <Button asChild size="lg" className="group w-full shrink-0 sm:w-auto">
          <Link to={ctaLink}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OfferBanner;