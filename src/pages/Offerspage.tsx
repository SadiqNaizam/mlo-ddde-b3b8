import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OfferBanner from '@/components/OfferBanner';
import PackageCard from '@/components/PackageCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";

// Placeholder data for special offer packages
const specialOffers = [
  {
    id: 'offer-1',
    imageUrl: 'https://images.unsplash.com/photo-1599661046223-e06221530e6a?q=80&w=800&auto=format&fit=crop',
    title: 'Himalayan Adventure Deal',
    price: 999,
    highlights: ['5-Day Trek', 'All-Inclusive Meals', 'Guided Tours', '4-Star Stay'],
  },
  {
    id: 'offer-2',
    imageUrl: 'https://images.unsplash.com/photo-1562932833-149dd3231a49?q=80&w=800&auto=format&fit=crop',
    title: 'Golden Triangle Express',
    price: 750,
    highlights: ['Delhi, Agra & Jaipur', 'Private Car & Driver', 'Monument Entry Fees', 'Daily Breakfast'],
  },
  {
    id: 'offer-3',
    imageUrl: 'https://images.unsplash.com/photo-1596701062353-73335146c433?q=80&w=800&auto=format&fit=crop',
    title: 'Goan Beach Escape',
    price: 600,
    highlights: ['Beachfront Resort', 'Water Sports Included', 'Daily Happy Hour', 'Airport Transfers'],
  },
  {
    id: 'offer-4',
    imageUrl: 'https://images.unsplash.com/photo-1623961954632-47703875b1c6?q=80&w=800&auto=format&fit=crop',
    title: 'Kerala Backwaters Retreat',
    price: 850,
    highlights: ['Houseboat Stay', 'Ayurvedic Massage', 'Cooking Classes', 'Cochin City Tour'],
  },
  {
    id: 'offer-5',
    imageUrl: 'https://images.unsplash.com/photo-1603202512403-e29864a78401?q=80&w=800&auto=format&fit=crop',
    title: 'Rajasthan Royalty Tour',
    price: 1200,
    highlights: ['Heritage Hotel Stays', 'Udaipur & Jodhpur', 'Desert Safari', 'Cultural Evenings'],
  },
  {
    id: 'offer-6',
    imageUrl: 'https://images.unsplash.com/photo-1624555130581-2d9241819323?q=80&w=800&auto=format&fit=crop',
    title: 'Andaman Islands Getaway',
    price: 1100,
    highlights: ['Scuba Diving Session', 'Radhanagar Beach Visit', 'Ferry Tickets Included', 'Seafood Dinner'],
  },
];

const Offerspage = () => {
  console.log('Offerspage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Page Header */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Exclusive Travel Offers
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Curated deals and seasonal discounts to make your next Indian adventure unforgettable.
            </p>
          </section>

          {/* Featured Offer Banner */}
          <section className="mb-12">
            <OfferBanner
              title="Monsoon Magic in the South"
              description="Save up to 25% on our Kerala & Goa packages. Experience the lush greenery and serene landscapes."
              ctaText="Explore Monsoon Deals"
              ctaLink="/packagespage"
            />
          </section>

          {/* Deals Grid */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center md:text-left">
              Last-Minute Deals & Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialOffers.map((offer) => (
                <PackageCard
                  key={offer.id}
                  id={offer.id}
                  imageUrl={offer.imageUrl}
                  title={offer.title}
                  price={offer.price}
                  highlights={offer.highlights}
                />
              ))}
            </div>
          </section>

          {/* Pagination */}
          <section className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    3
                  </PaginationLink>
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

export default Offerspage;