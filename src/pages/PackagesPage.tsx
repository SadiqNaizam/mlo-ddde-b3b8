import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom UI Components
import PackageCard from '@/components/PackageCard';

// shadcn/ui Components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";

// Placeholder data for travel packages
const packages = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1588225334293-8a066d581e28?q=80&w=800&auto=format&fit=crop',
    title: 'Himalayan Serenity: Leh-Ladakh',
    price: 45000,
    highlights: ['Monastery Tours', 'Pangong Lake Visit', 'Khardung La Pass Drive'],
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1594736341432-85317d745a55?q=80&w=800&auto=format&fit=crop',
    title: 'Royal Rajasthan: Palaces & Deserts',
    price: 38000,
    highlights: ['Jaipur City Palace', 'Jodhpur Mehrangarh Fort', 'Thar Desert Safari'],
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1595675860212-09c313b24479?q=80&w=800&auto=format&fit=crop',
    title: 'Coastal Bliss: Kerala Backwaters',
    price: 32000,
    highlights: ['Alleppey Houseboat Stay', 'Munnar Tea Gardens', 'Kochi Cultural Tour'],
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?q=80&w=800&auto=format&fit=crop',
    title: 'Spiritual Sojourn: Varanasi',
    price: 25000,
    highlights: ['Ganga Aarti Ceremony', 'Sarnath Visit', 'Boat ride on the Ganges'],
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop',
    title: 'Vibrant Goa: Beaches & Parties',
    price: 28000,
    highlights: ['North Goa Beaches', 'Old Goa Churches', 'Dudhsagar Falls Trip'],
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1599408182933-66487d6a575a?q=80&w=800&auto=format&fit=crop',
    title: 'Wildlife Trails of Ranthambore',
    price: 41000,
    highlights: ['Tiger Safari', 'Ranthambore Fort', 'Bird Watching Tours'],
  },
];


const PackagesPage: React.FC = () => {
  console.log('PackagesPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 md:py-16">
          {/* Page Header and Filters */}
          <section className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Explore Our Packages
              </h1>
              <p className="mt-2 text-lg text-muted-foreground font-body">
                Find the perfect journey curated just for you.
              </p>
            </div>
            <div className="w-full md:w-auto md:min-w-[220px]">
              <Select>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Sort by: Relevance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Sort by: Relevance</SelectItem>
                  <SelectItem value="price-low-high">Sort by: Price (Low to High)</SelectItem>
                  <SelectItem value="price-high-low">Sort by: Price (High to Low)</SelectItem>
                  <SelectItem value="duration">Sort by: Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Packages Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                id={pkg.id}
                imageUrl={pkg.imageUrl}
                title={pkg.title}
                price={pkg.price}
                highlights={pkg.highlights}
              />
            ))}
          </section>

          {/* Pagination */}
          <section className="mt-12 md:mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackagesPage;