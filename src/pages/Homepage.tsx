import React from "react";
import { Link } from "react-router-dom";

// Custom Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DestinationSearchBar from "@/components/DestinationSearchBar";
import PackageCard from "@/components/PackageCard";

// shadcn/ui Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Placeholder data for featured packages
const featuredPackages = [
  {
    id: 1,
    title: "Enchanting Kerala Backwaters",
    price: 499,
    imageUrl: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["7-Day Houseboat Stay", "Traditional Kathakali Performance", "Spice Plantation Tour"],
  },
  {
    id: 2,
    title: "Royal Rajasthan Heritage Tour",
    price: 699,
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["Jaipur, Jodhpur & Udaipur", "Amber Fort Elephant Ride", "Desert Safari in Jaisalmer"],
  },
  {
    id: 3,
    title: "Himalayan Peaks & Serenity",
    price: 899,
    imageUrl: "https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["Trekking in Himachal", "Visit to Dalai Lama Temple", "Stay in Manali & Shimla"],
  },
];

const Homepage = () => {
  console.log("Homepage loaded");

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-[85vh] w-full flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-center gap-8 p-4 w-full">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg">
              Discover Your India
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90">
              From majestic mountains to serene backwaters, your next great
              adventure is just a search away.
            </p>
            <DestinationSearchBar />
          </div>
        </section>

        {/* Featured Packages Section */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-foreground">
                Featured Travel Packages
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked journeys that promise unforgettable experiences and exceptional value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  id={pkg.id}
                  title={pkg.title}
                  price={pkg.price}
                  imageUrl={pkg.imageUrl}
                  highlights={pkg.highlights}
                />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/packagespage">
                  View All Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <Card className="bg-card shadow-lg border-primary/20 border-2 overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                            Exclusive Offers & Deals
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Don't miss out on limited-time deals. Save big on your next trip with our special promotions.
                        </p>
                        <Button asChild size="lg" className="mt-6 text-lg">
                            <Link to="/offerspage">
                                Explore All Offers
                            </Link>
                        </Button>
                    </div>
                    <div className="hidden md:block h-full">
                        <img 
                            src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Abstract colorful background for offers"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;