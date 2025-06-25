import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, User, Users, Calendar, Lock } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const Bookingpage: React.FC = () => {
  console.log('BookingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-16 lg:py-24">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto border-border/60 shadow-lg">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-3xl md:text-4xl font-heading text-foreground">
                Complete Your Booking
              </CardTitle>
              <CardDescription className="font-body text-muted-foreground mt-2">
                You're just a few steps away from your next adventure.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-8 pt-0">
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-12">
                  <TabsTrigger value="details" className="h-full text-base font-body">
                    <Users className="mr-2 h-5 w-5" />
                    Traveler Details
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="h-full text-base font-body">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Payment Information
                  </TabsTrigger>
                </TabsList>

                {/* Traveler Details Tab */}
                <TabsContent value="details" className="mt-6">
                  <form className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-heading text-foreground">Package Summary</h3>
                      <div className="p-4 rounded-md bg-secondary/50 border border-secondary">
                        <p className="font-bold text-secondary-foreground">Himalayan Majesty Tour</p>
                        <p className="text-sm text-muted-foreground">7 Days, 6 Nights | 2 Adults</p>
                        <Separator className="my-2 bg-border" />
                        <p className="text-lg font-semibold text-primary">Total: $2,499</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="font-body">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input id="fullName" placeholder="e.g., Ananya Sharma" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-body">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                      </div>
                       <div className="space-y-2">
                        <Label htmlFor="adults" className="font-body">Adults</Label>
                        <Select defaultValue="2">
                          <SelectTrigger id="adults">
                            <SelectValue placeholder="Select number of adults" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Adult</SelectItem>
                            <SelectItem value="2">2 Adults</SelectItem>
                            <SelectItem value="3">3 Adults</SelectItem>
                            <SelectItem value="4">4 Adults</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="children" className="font-body">Children</Label>
                        <Select defaultValue="0">
                          <SelectTrigger id="children">
                            <SelectValue placeholder="Select number of children" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0 Children</SelectItem>
                            <SelectItem value="1">1 Child</SelectItem>
                            <SelectItem value="2">2 Children</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end">
                       <p className="text-sm text-muted-foreground">
                        * In a real app, clicking 'Continue' would validate and move to the next tab.
                       </p>
                    </div>
                  </form>
                </TabsContent>

                {/* Payment Information Tab */}
                <TabsContent value="payment" className="mt-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="cardName" className="font-body">Name on Card</Label>
                        <Input id="cardName" placeholder="As it appears on your card" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="font-body">Card Number</Label>
                        <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="pl-10" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="expiry" className="font-body">Expiry Date</Label>
                             <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input id="expiry" placeholder="MM / YY" className="pl-10" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvc" className="font-body">CVC / CVV</Label>
                             <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input id="cvc" placeholder="123" className="pl-10" />
                            </div>
                        </div>
                    </div>
                     <Separator className="my-4 bg-border" />
                    <Button type="submit" className="w-full text-lg font-heading h-12">
                      Confirm & Pay Securely
                    </Button>
                     <p className="text-xs text-center text-muted-foreground font-body mt-2">
                      By clicking, you agree to our <Link to="/terms" className="underline hover:text-primary">Terms of Service</Link>.
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bookingpage;