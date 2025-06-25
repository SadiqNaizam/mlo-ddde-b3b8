import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface PackageCardProps {
  id: string | number;
  imageUrl: string;
  title: string;
  price: number;
  highlights: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({ id, imageUrl, title, price, highlights }) => {
  console.log('PackageCard loaded for:', title);

  return (
    <Card className="group relative w-full overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl bg-card border-border">
      <div className="relative h-60 w-full overflow-hidden">
        {/* Image */}
        <img
          src={imageUrl}
          alt={`Image of ${title}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        
        {/* Hover Overlay with Highlights */}
        <div className="absolute inset-0 flex flex-col justify-center bg-black/70 p-4 text-white opacity-0 backdrop-blur-sm transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <h4 className="mb-3 font-heading text-lg font-semibold text-accent">Package Highlights</h4>
          <ul className="space-y-2 font-body">
            {highlights.slice(0, 3).map((highlight, index) => ( // Show max 3 highlights
              <li key={index} className="flex items-start text-sm">
                <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/90">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-heading text-xl font-bold text-card-foreground truncate" title={title}>
          {title}
        </h3>
        <p className="mt-1 font-body text-lg font-semibold text-primary">
          Starts from ${price.toLocaleString()}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          <Link to="/bookingpage">
            Book Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;