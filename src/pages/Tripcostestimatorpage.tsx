import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Feature Component
import CostEstimatorTool from '@/components/CostEstimatorTool';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Tripcostestimatorpage = () => {
  console.log('Tripcostestimatorpage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <section 
          className="relative py-20 md:py-28 bg-secondary/30 border-b"
          style={{
            backgroundImage: `radial-gradient(circle at top left, hsl(var(--primary) / 0.05), transparent 30%), radial-gradient(circle at bottom right, hsl(var(--accent) / 0.05), transparent 30%)`
          }}
        >
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Craft Your Perfect Journey
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground font-body">
              Use our interactive tool to build your trip from scratch and get an instant cost estimate. Your adventure, your budget.
            </p>
          </div>
        </section>

        <section className="container py-12 md:py-20">
          <div className="flex flex-col items-center gap-16">
            {/* The main interactive tool */}
            <CostEstimatorTool />

            {/* Call to action card */}
            <Card className="w-full max-w-4xl bg-gradient-to-r from-card to-secondary/40 text-center shadow-lg border-border/60">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Happy With Your Plan?</CardTitle>
                <CardDescription className="font-body">
                  Turn your estimate into a reality. Proceed to booking to finalize the details and secure your trip.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="font-bold font-heading group">
                  <Link to="/bookingpage">
                    Proceed to Booking
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tripcostestimatorpage;